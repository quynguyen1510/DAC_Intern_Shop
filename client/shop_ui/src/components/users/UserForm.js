import React, { Component } from 'react';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: '',
            imageUrl: '',
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: '',
            passwordConfirmationError: '',
        }
    }

    validateFisrtName = () => {
        const { first_name } = this.state;
        const valid_name = first_name.length !== 0
        this.setState({ firstNameError: valid_name ? null : "First name can't be blank" });
    }
    validateLastName = () => {
        const { last_name } = this.state;
        const valid_name = last_name.length !== 0;
        this.setState({ lastNameError: valid_name ? null : "Last name can't be blank" });
    }

    validateEmail = () => {
        const { email } = this.state;

        if (email.length === 0) {
            this.setState({ emailError: "Email can't be blank" });
        }
        const valid_email = EMAIL_REGEX.test(email)
        this.setState({ emailError: valid_email ? null : "Please enter a valid email" })

    }

    validatePassword = () => {
        const { password } = this.state;
        this.setState({ passwordError: password.length < 6 ? "Password must be greater than 5" : null })
    }
    validatePasswordConfirm = () => {
        const { passwordConfirm, password } = this.state;
        if (passwordConfirm.length < 6) {
            this.setState({ passwordConfirmationError: "Password confirm must be greater than 5" });
        }
        if (passwordConfirm !== password) {
            this.setState({ passwordConfirmationError: "Password confirm don't match password " });
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

    handleRoleChange = event => {
        this.setState({ role: event.target.value })
    }

    handleUploadAvatar  = event => {
        const imageUrl = event.target.value;
        this.setState({imageUrl: imageUrl})
    }
    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <form encType="multipart/form-data">
                    <div className="form-group row">
                        <label className="col-sm-2  col-form-label">First Name</label>
                        <div className="col-sm-8">
                            {
                                currentUser ? <input type="text" disabled className="form-control"
                                    onBlur={this.validateFisrtName}
                                    placeholder={currentUser.first_name}
                                    onChange={this.handleFirstNameChange} /> :
                                    <input type="text"
                                        className="form-control"
                                        onBlur={this.validateFisrtName}
                                        onChange={this.handleFirstNameChange} />
                            } 
                        </div>
                        {
                            currentUser ? <button className="btn btn-link">Edit</button> : null
                        }
                        <div className="invalid-feedback">{this.state.firstNameError}</div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                            {
                                currentUser ? <input type="text" disabled
                                    className="form-control"
                                    onBlur={this.validateLastName}
                                    placeholder={currentUser.last_name}
                                    onChange={this.handleLastNameChange} /> :
                                    <input type="text"
                                        className="form-control"
                                        onBlur={this.validateLastName}
                                        onChange={this.handleLastNameChange} />
                            }
                        </div>
                        {
                            currentUser ? <button className="btn btn-link">Edit</button> : null
                        }
                        <div className="invalid-feedback">{this.state.lastNameError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-8">
                            {
                                currentUser ? 
                                <input type="email" 
                                    disabled
                                    className="form-control"
                                    onBlur={this.validateEmail}
                                    placeholder={currentUser.email}
                                    onChange={this.handleEmailChange} /> :
                                <input type="email" className="form-control"
                                        onBlur={this.validateEmail}
                                        onChange={this.handleEmailChange} />
                            }
                        </div>
                        {
                            currentUser ? <button className="btn btn-link">Edit</button> : null
                        }
                        <div className="invalid-feedback">{this.state.emailError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-8">
                            {
                                currentUser ?
                                    <input type="password"
                                        onBlur={this.validatePassword} 
                                        disabled
                                        className="form-control"
                                        onChange={this.handlePasswordChange} /> :
                                    <input type="password"
                                        onBlur={this.validatePassword}
                                        className="form-control"
                                        onChange={this.handlePasswordChange} />
                            }
                        </div>
                        {
                            currentUser ? <button className="btn btn-link">Edit</button> : null
                        }
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Confirm</label>
                        <div className="col-sm-8">
                            {
                                currentUser ?
                                    <input type="password"
                                        onBlur={this.validatePasswordConfirm} 
                                        onChange={this.handlePasswordConfirmChange}
                                        disabled
                                        className="form-control" /> :
                                    <input type="password"
                                        onBlur={this.validatePasswordConfirm}
                                        onChange={this.handlePasswordConfirmChange}
                                        className="form-control" />
                            }
                        </div>
                        {
                            currentUser ? <button className="btn btn-link">Edit</button> : null
                        }
                        <div className="invalid-feedback">{this.state.passwordConfirmationError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-8">
                            {
                                currentUser ?
                                    <select onChange={this.handleRoleChange} className="form-control" disabled value={currentUser.role_id}>
                                        <option value="1">Admin</option>
                                        <option value="2">Shopper</option>
                                        <option value="3">User</option>
                                    </select> :

                                    <select onChange={this.handleRoleChange} className="form-control">
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
                                {
                                    this.state.imageUrl ? <label htmlFor="uploadImage" className="custom-file-label">{this.state.imageUrl}</label> : 
                                    <label  htmlFor="uploadImage" className="custom-file-label">Choose File</label>
                                }
                            </div>
                            <input type="file" 
                                    className="form-control-file"
                                    id="uploadImage"
                                    onChange={this.handleUploadAvatar}/>

                        </div>
                    </div>
                </form>
                <div className="submit-profile">
                    <button onClick={this.handleSubmit}
                        className="btn btn-primary update-profile-button">{currentUser ? "Update" : "Create"}</button>
                </div>
            </div>
        );
    }
}

export default UserForm;