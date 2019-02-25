import React, { Component } from 'react';
import {
    validateEmail,
    validateFisrtName,
    validateLastName,
    validatePassword,
    validatePasswordConfirm
} from '../../util/validate';
import defaultAvatarUrl from '../default_avatar.png'


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: '',
            passwordConfirmationError: '',
        }
    }

    handleFirstNameChange = event => {
        this.setState({ first_name: event.target.value });
    }

    handleLastNameChange = event => {
        this.setState({ last_name: event.target.value });
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handlePasswordConfirmChange = event => {
        this.setState({ passwordConfirm: event.target.value });
    }


    render() {
        const { currentUser } = this.props;
        return (
            <form >
                <div className="form-group row">
                    <label className="col-sm-2  col-form-label">First Name</label>
                    <div className="col-sm-8">
                        {
                            currentUser ? <input type="text" disabled className="form-control" placeholder={currentUser.first_name} /> :
                                <input type="text" className="form-control" />
                        }
                    </div>
                    {
                        currentUser ? <button className="btn btn-link">Edit</button> : null
                    }
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-8">
                        {
                            currentUser ? <input type="text" disabled className="form-control" placeholder={currentUser.last_name} /> :
                                <input type="text" className="form-control" />
                        }
                    </div>
                    {
                        currentUser ? <button className="btn btn-link">Edit</button> : null
                    }
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-8">
                        {
                            currentUser ? <input type="email" disabled className="form-control" placeholder={currentUser.email} /> :
                                <input type="email" className="form-control" />
                        }
                    </div>
                    {
                        currentUser ? <button className="btn btn-link">Edit</button> : null
                    }
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" disabled className="form-control" />
                    </div>
                    {
                        currentUser ? <button className="btn btn-link">Edit</button> : null
                    }
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Confirm</label>
                    <div className="col-sm-8">
                        <input type="password" disabled className="form-control" />
                    </div>
                    {
                        currentUser ? <button className="btn btn-link">Edit</button> : null
                    }
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-8">
                        {
                            currentUser ?
                                <select className="form-control" disabled value={currentUser.role_id}>
                                    <option value="1">Admin</option>
                                    <option value="2">Shopper</option>
                                    <option value="3">User</option>
                                </select> :

                                <select className="form-control">
                                    <option value="1">Admin</option>
                                    <option value="2">Shopper</option>
                                    <option value="3">User</option>
                                </select>
                        }
                    </div>
                    {
                        currentUser ? <button className="btn btn-link">Edit</button> : null
                    }                        </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Avatar</label>
                    <div className="col-sm-8">
                        <div className="col-sm-12">
                            <label className="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
                <div className="submit-profile">
                    <button className="btn btn-primary update-profile-button">{currentUser ? "Update" : "Create"}</button>
                </div>

            </form>

        );
    }
}

export default UserForm;