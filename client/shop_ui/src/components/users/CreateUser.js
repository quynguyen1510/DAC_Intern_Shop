import React, { Component } from 'react';
import UserForm from './UserForm';
import Navbar from '../commons/header/Navbar';

class FormCreateUser extends Component {
    render() {
        return (
            <div className="profile">
                <Navbar />
                <h2> Create New User</h2>
                <div className="inputForm">
                    < UserForm />
                </div>
            </div>
        );
    }
}

export default FormCreateUser;