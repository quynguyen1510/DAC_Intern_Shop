import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { getUsers, deleteUser } from '../../api/user_api';
import { RECORD_PER_PAGE, ADMIN_ROLE } from '../../util/constant';
import {withRouter} from 'react-router';
var jwt_decode = require('jwt-decode');

class UserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            shouldShow: false,
            selectedInd: null,
            numPages: null,
            currentPage:  this.props.previousPage ? this.props.previousPage : 1,
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

    componentDidMount() {
        getUsers(this.state.currentPage).then(res => {
            let numPages = 0;
            if (res.data.total % RECORD_PER_PAGE !== 0) {
                numPages = Array(Math.floor(res.data.total / RECORD_PER_PAGE) + 1).fill();
            }
            else {
                numPages = Array(Math.floor(res.data.total / RECORD_PER_PAGE)).fill();
            }
            this.setState({users: res.data.users, numPages: numPages})
        }).catch(err => {

        })
    }

    getCurrentPage = event => {
        const page = Number(event.target.innerHTML);
        if(this.state.currentPage !== page){
            getUsers(page).then(res => {
                this.setState({ users: [...res.data.users]});
            }).then(err => {
                
            })
            this.setState({currentPage: page})
        }
    }

    handleClose = () => {
        this.setState({ shouldShow: false });
    }

    handleShow = (index) => {
        this.setState({ selectedInd: index });
        this.setState({ shouldShow: true });
    }

    handleDelete = () => {
        const users = this.state.users;
        users[this.state.selectedInd].active = false;
        this.setState({users: [...users]});
        deleteUser(users[this.state.selectedInd].id)
        this.handleClose();
    }

    render() {
        const { numPages, users } = this.state;
        const current_user_id = jwt_decode(localStorage.getItem("token")).user_id
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
                            users.length > 0 && (
                                users.map((user, index) => 
                                        <tr key={index}>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{this.getUserRole(user.role_id)}</td>
                                            <td>
                                            {user.active ? 
                                                <img className="banner-campaign" src="https://i.imgur.com/JuPGxJR.png" alt="active"/> :
                                                 <img className="banner-campaign" src="https://imgur.com/qEK8sFP.png" alt="non active"/>}
                                            </td>
                                            <td>
                                                {
                                                    ((current_user_id !== user.id && user.role_id !== ADMIN_ROLE) 
                                                        || current_user_id === user.id) && 
                                                    <Link to={{
                                                        pathname: `/profile/users/${user.id}`,
                                                        state: {
                                                            user: user,
                                                            page: this.state.currentPage
                                                        }
                                                    }} className="btn btn-primary btnEditUser">
                                                    Edit
                                                    </Link>
                                                }
                                                {
                                                    (this.getUserRole(user.role_id) !== "ADMIN" &&
                                                    user.active) &&
                                                    <Button onClick={() => { this.handleShow(index) }}
                                                     className="btn btn-danger btnDeleteUser">
                                                     Delete</Button>
                                                }
                                              
                                            </td>
                                        </tr> 
                                    ))
                        }
                    </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        {
                            numPages && (numPages.map((_, i) =>
                                <li key={i} className="page-item">
                                <button onClick={this.getCurrentPage} className="page-link">{i + 1}
                                </button></li>
                            ))
                        }
                    </ul>
                </nav>


                <Modal show={this.state.shouldShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default withRouter(UserTable);