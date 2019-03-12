import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { addNewUser, updateExistingUser  } from '../../actions/UsersAction';
import { ADMIN_ROLE } from '../../util/constant';
import { uploadImage } from '../../api/imgur_api';


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value 
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: '',
            imageUrl: '',

            // Error 
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: '',
            passwordConfirmationError: '',

            // disable attribute
            firstNameDisabled: true,
            lastNameDisabled: true,
            emailDisabled: true,
            passwordDisabled: true,
            passwordConfirmDisabled: true,
            roleDisabled: true
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
        this.setState({ passwordConfirm: event.target.value, passwordConfirmationError: '' });
    }

    handleRoleChange = event => {
        this.setState({ role: event.target.value })
    }

    handleUploadAvatar = event => {
        const file = event.target.files[0];
        uploadImage(file).then(response => {
            const imageUrl = `https://i.imgur.com/${response.data.data.id}.png`
            this.setState({ imageUrl: imageUrl, loadImageSuccess: true });
        }).catch(err => {
            console.log(err)
        })
    }

    handleSubmit = () => {
        const { email, password, first_name, last_name, passwordConfirm, role, imageUrl } = this.state;
        const { updatedUser } = this.props;
        const { currentUser } = this.props.user.user;
        const token = localStorage.getItem("token");
        const credentials = {
            "first_name": `${first_name}`,
            "last_name": `${last_name}`,
            "email": `${email}`,
            "password": `${password}`,
            "password_confirmation": `${passwordConfirm}`,
            "role_id": `${role}`,
            "avatar_url": `${imageUrl}`
        }
        if (this.state.passwordConfirmationError || this.state.passwordConfirm !== this.state.password) {
            return;
        }
        if (updatedUser) {
            if (currentUser.role_id === ADMIN_ROLE) {
                this.props.updateExistingUser(credentials, token, updatedUser.id, 1);
                this.props.history.push("/manage/users/1", { updatedUserId: this.props.match.params.id });
            }
            else {
                this.props.updateExistingUser(credentials, token, updatedUser.id);
                this.props.history.push("/");
            }
        }
        else {
            this.props.addNewUser(credentials)
            this.props.history.push("/manage/users/1");
        }
    }

    onActiveFirstName = () => {
        this.setState({ firstNameDisabled: false })
    }

    onActiveLastName = () => {
        this.setState({ lastNameDisabled: false })
    }

    onActiveEmail = () => {
        this.setState({ emailDisabled: false })
    }

    onActivePassword = () => {
        this.setState({ passwordDisabled: false })
    }
    onActiveConfirmPassword = () => {
        this.setState({ passwordConfirmDisabled: false })
    }

    onActiveRole = () => {
        this.setState({ roleDisabled: false })
    }

    render() {
        const { updatedUser } = this.props;
        const currentUser = this.props.user.user.currentUser;
        return (
            <div>
                <form encType="multipart/form-data">
                    <div className="form-group row">
                        <label className="col-sm-2  col-form-label">First Name</label>
                        <div className="col-sm-8">
                            {
                                updatedUser ? <input type="text"
                                    disabled={this.state.firstNameDisabled}
                                    className="form-control"
                                    name="first_name"
                                    onBlur={this.validateFisrtName}
                                    defaultValue={updatedUser.first_name}
                                    onChange={this.handleFirstNameChange} /> :
                                    <input type="text"
                                        name="first_name"
                                        className="form-control"
                                        onBlur={this.validateFisrtName}
                                        onChange={this.handleFirstNameChange} />
                            }
                        </div>
                        {
                            updatedUser ? <label onClick={this.onActiveFirstName} className="btn btn-link">Edit</label> : null
                        }
                        <div className="invalid-feedback">{this.state.firstNameError}</div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                            {
                                updatedUser ? <input type="text"
                                    disabled={this.state.lastNameDisabled}
                                    className="form-control"
                                    name="last_name"
                                    onBlur={this.validateLastName}
                                    defaultValue={updatedUser.last_name}
                                    onChange={this.handleLastNameChange} /> :
                                    <input type="text"
                                        name="last_name"
                                        className="form-control"
                                        onBlur={this.validateLastName}
                                        onChange={this.handleLastNameChange} />
                            }
                        </div>
                        {
                            updatedUser ? <label onClick={this.onActiveLastName} className="btn btn-link">Edit</label> : null
                        }
                        <div className="invalid-feedback">{this.state.lastNameError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-8">
                            {
                                updatedUser ?
                                    <input type="email"
                                        disabled={this.state.emailDisabled}
                                        className="form-control"
                                        name="email"
                                        onBlur={this.validateEmail}
                                        defaultValue={updatedUser.email}
                                        onChange={this.handleEmailChange} /> :
                                    <input type="email" className="form-control"
                                        onBlur={this.validateEmail}
                                        name="email"
                                        onChange={this.handleEmailChange} />
                            }
                        </div>
                        <div className="invalid-feedback">{this.state.emailError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-8">
                            {
                                updatedUser ?
                                    <input type="password"
                                        onBlur={this.validatePassword}
                                        disabled={this.state.passwordDisabled}
                                        className="form-control"
                                        onChange={this.handlePasswordChange} /> :
                                    <input type="password"
                                        onBlur={this.validatePassword}
                                        className="form-control"
                                        onChange={this.handlePasswordChange} />
                            }
                        </div>
                        {
                            updatedUser ? <label onClick={this.onActivePassword} className="btn btn-link">Edit</label> : null
                        }
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Confirm</label>
                        <div className="col-sm-8">
                            {
                                updatedUser ?
                                    <input type="password"
                                        onBlur={this.validatePasswordConfirm}
                                        onChange={this.handlePasswordConfirmChange}
                                        disabled={this.state.passwordConfirmDisabled}
                                        className="form-control" /> :
                                    <input type="password"
                                        onBlur={this.validatePasswordConfirm}
                                        onChange={this.handlePasswordConfirmChange}
                                        className="form-control" />
                            }
                        </div>
                        {
                            updatedUser ? <label onClick={this.onActiveConfirmPassword} className="btn btn-link">Edit</label> : null
                        }
                        <div className="invalid-feedback">{this.state.passwordConfirmationError}</div>
                    </div>
                    {updatedUser && this.getUserRole(currentUser.role_id) === "ADMIN" ?
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-8">
                                <select onChange={this.handleRoleChange}
                                    className="form-control"
                                    disabled={this.state.roleDisabled}
                                    value={updatedUser.role_id}>
                                    <option value="1">Admin</option>
                                    <option value="2">User</option>
                                    <option value="3">Shoper</option>
                                </select>
                            </div>
                            <label onClick={this.onActiveRole} className="btn btn-link">Edit</label>
                        </div> : null
                    }
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Avatar</label>
                        <div className="col-sm-8">
                            <div className="col-sm-12">
                                {
                                    this.state.imageUrl ? <label htmlFor="uploadImage" className="custom-file-label">{this.state.imageUrl}</label> :
                                        <label htmlFor="uploadImage" className="custom-file-label">Choose File</label>
                                }
                            </div>
                            <input type="file"
                                className="form-control-file"
                                id="uploadImage"
                                onChange={this.handleUploadAvatar} />

                        </div>
                    </div>
                </form>
                <div className="submit-profile">
                    <button onClick={this.handleSubmit}
                        className="btn btn-primary update-profile-button"
                        disabled={!this.state.password && !this.state.first_name && !this.state.last_name && !this.state.imageUrl}
                    >{updatedUser ? "Update" : "Create"}</button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addNewUser,
        updateExistingUser
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm));
