import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getListUsers, getUsersSize } from '../../actions/UsersAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RECORD_PER_PAGE, ADMIN_ROLE, USER_ROLE } from '../../util/constant';
import { Link } from 'react-router-dom';

class ManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.match.params.page_number,
            token:  localStorage.getItem("token")
        }
    }

    componentDidMount() {
        const {token, currentPage} = this.state;
        this.props.getUsersSize(token);

        if (this.state.currentPage) {
            this.props.getListUsers(this.state.token, currentPage);        
        }
    }

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
    getCurrentPage = () => {
        this.setState({currentPage: this.props.match.params.page_number})
    }
    render() {
        const { size } = this.props.user;
        const userPages = (size % 2 !== 0) ? (size / RECORD_PER_PAGE) + 1 : (size / RECORD_PER_PAGE);
        const convertedArrayPages = Array(userPages).fill();
        const usersPerPage = this.props.user.users;
        return (
            <div className="page">
                <div>
                    <a href="#none" className="btn btn-default" id="btnCreateUser">Create User</a>
                </div>
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
                                            <a href="#none" className="btn btn-primary btnEditUser">Edit</a>
                                            <a href="#none" className="btn btn-danger btnDeleteUser">Delete</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        {
                            convertedArrayPages.map((_, i) =>
                                <li key={i} className="page-item"><a onClick={this.getCurrentPage} className="page-link" href={`/manage/users/${i+1}`} >{ i + 1}</a></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsersSize,
        getListUsers
    }, dispatch)
}

const ManageUserContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageUser));

export default ManageUserContainer;