import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import UserTable from './UserTable';
import Navbar from '../commons/header/Navbar';

class ManageUser extends Component {
    render() {

        return (
            <div>
                <Navbar/>
                <div className="page">
                    <div>
                        <Link to="/users/new" className="btn btn-default" id="btnCreateUser">Create User</Link>
                    </div>
                    <UserTable />
                </div>
            </div>
        );
    }
}

export default withRouter(ManageUser);