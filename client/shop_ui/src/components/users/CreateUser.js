import React, { Component } from 'react';
import UserForm from './UserForm';
import Header from '../commons/header/Header';

class FormCreateUser extends Component {
    render() {
        return (
            <div className="profile">
                <Header />
                <h2> Create New User</h2>
                <div className="inputForm">
                    < UserForm />
                </div>
            </div>
        );
    }
}

export default FormCreateUser;