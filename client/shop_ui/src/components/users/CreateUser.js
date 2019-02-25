import React, { Component } from 'react';
import UserForm from './UserForm';

class FormCreateUser extends Component {
    render() {
        return (
            <div className="profile">
            <h2> Create New User</h2>
            <div className="inputForm">
                < UserForm />
            </div>
        </div>
        );
    }
}

export default FormCreateUser;