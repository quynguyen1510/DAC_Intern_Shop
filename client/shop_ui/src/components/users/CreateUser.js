import React, { Component } from 'react';
import UserForm from './UserForm';
import defaultAvatarUrl from '../default_avatar.png'

class FormCreateUser extends Component {
    render() {
        return (
            <div className="profile">
            <h2> Create New User</h2>
            <div className="avatar">
                <img className="avatar-default" src={defaultAvatarUrl} alt=""/>
            </div>
            <div className="inputForm">
                < UserForm />
            </div>
        </div>
        );
    }
}

export default FormCreateUser;