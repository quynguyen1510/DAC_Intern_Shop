import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserTable extends Component {

    getUserRole = (role_id) => {
        switch (role_id) {
            case 1:
                return "ADMIN";
            case 2:
                return "USER";
            default:
                return "SHOPER"
        }
    }

    render() {
        const { usersPerPage, updatedUserId } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersPerPage.map((user, index) => {
                            return (
                                user.active && (
                                    <tr key={index}>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{this.getUserRole(user.role_id)}</td>
                                        <td>
                                            <Link to={`/profile/users/${user.id}`} className="btn btn-primary btnEditUser">Edit</Link>
                                            {
                                                this.getUserRole(user.role_id) === "USER" ? <Link to={`/delete/users/${user.id}`} className="btn btn-danger btnDeleteUser">Delete</Link> : null
                                            }
                                            {
                                                updatedUserId ? <span className="badge badge-success"></span> : null
                                            }
                                        </td>
                                    </tr>
                                )
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}


export default UserTable;