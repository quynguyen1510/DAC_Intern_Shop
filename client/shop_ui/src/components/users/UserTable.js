import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_ROLE, USER_ROLE } from '../../util/constant';

class UserTable extends Component {

    getUserRole = (role_id) => {
        switch(role_id){
            case 1:
                return ADMIN_ROLE;
            case 2:
                return USER_ROLE;
            default:
                return "Unknown"
        }
    }

    render() {
        const { usersPerPage } = this.props;
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
                                <tr key={index}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{this.getUserRole(user.role_id)}</td>
                                    <td>
                                        <Link to={`/profile/users/${user.id}`} className="btn btn-primary btnEditUser">Edit</Link>
                                        <a href="#" className="btn btn-danger btnDeleteUser">Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}


export default UserTable;