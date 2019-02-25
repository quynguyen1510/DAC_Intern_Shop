import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getListUsers} from '../../actions/UsersAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ManageUser extends Component {
    
    componentDidMount(){
        const token = localStorage.getItem("token");
        this.props.getListUsers(token);
    }

    render() {
        return (
            <div className="page">
                <div>
                    <a href="#none" className="btn btn-default" id="btnCreateUser">Create User</a>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Doe</td>
                            <td>John</td>
                            <td>doe@gmail.com</td>
                            <td>User</td>
                            <td>
                                <a href="#none" className="btn btn-primary btnEditUser">Edit</a>
                                <a href="#none" className="btn btn-danger btnDeleteUser">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>David</td>
                            <td>John</td>
                            <td>david@gmail.com</td>
                            <td>Shop</td>
                            <td>
                                <a href="#none" className="btn btn-primary btnEditUser">Edit</a>
                                <a href="#none" className="btn btn-danger btnDeleteUser">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getListUsers
    }, dispatch)
}

const ManageUserContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageUser));

export default ManageUserContainer;