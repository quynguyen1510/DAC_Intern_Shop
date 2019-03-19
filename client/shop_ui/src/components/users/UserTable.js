import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class UserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShow: false,
            selectedId: null
        }
    }

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

    handleClose = () => {
        this.setState({ shouldShow: false });
    }

    handleShow = (id) => {
        this.setState({ selectedId: id });
        this.setState({ shouldShow: true });
    }

    render() {
        const { usersPerPage, updatedUserId } = this.props;
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role Name</th>
                            <th>Status</th>
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
                                        <td>{user.active ? "Active" : "Non active"}</td>
                                        <td>
                                            <Link to={`/profile/users/${user.id}`} className="btn btn-primary btnEditUser">Edit</Link>
                                            {
                                                this.getUserRole(user.role_id) !== "ADMIN" ? <Button onClick={() => { this.handleShow(user.id) }} className="btn btn-danger btnDeleteUser">Delete</Button> : null
                                            }
                                            {
                                                updatedUserId ? <span className="badge badge-success"></span> : null
                                            }
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>


                <Modal show={this.state.shouldShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Link to={`/delete/users/${this.state.selectedId}`} className="btn btn-primary" >Delete</Link>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default UserTable;