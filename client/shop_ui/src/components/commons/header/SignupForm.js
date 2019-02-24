import React, { Component } from 'react';
import {
    validateEmail,
    validateFisrtName,
    validateLastName,
    validatePassword,
    validatePasswordConfirm
} from '../../../util/validate';

class LoginForm extends Component {
    constructor(props){
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
        this.setState({first_name: event.target.value });
    }

    handleLastNameChange = event => {
        this.setState({last_name: event.target.value });
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handlePasswordConfirmChange = event => {
        this.setState({ passwordConfirm: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password, first_name, last_name, passwordConfirm } = this.state;
        const credentials = {
            "first_name" : `${first_name}`,
            "last_name" : `${last_name}`,
            "email" : `${email}`,
            "password" : `${password}`,
            "password_confirmation" : `${passwordConfirm}`
        }
        this.props.signup(credentials);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.session.user.message){
            return {
                ...prevState,
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                passwordConfirm: '',
                emailError: '',
                passwordError: '',
                nameError: '',
                passwordConfirmationError: '',
            }
        }
        return null;
    }

    render() {
        return (
            <div className="inputForm">
                <h2 className="titlePopup text-center">Sign Up for free</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input type="text" 
                                id="firstName" 
                                value={this.state.first_name}
                                className="form-control input-custom"
                                onBlur={validateFisrtName}
                                onChange={this.handleFirstNameChange}
                            placeholder="First name" />
                        <input type="text"
                               className="form-control input-custom" 
                               placeholder="Last name"
                               value={this.state.last_name}
                               onBlur={validateLastName}
                               onChange={this.handleLastNameChange} />
                        <div className="invalid-feedback">{this.state.firstNameError}</div>
                        <div className="invalid-feedback">{this.state.lastNameError}</div>
                    </div>
                    <div className="input-group">
                        <input type="email" 
                                className="input-custom form-control" 
                                placeholder="Enter email"
                                value={this.state.email}
                                onBlur={validateEmail}
                                onChange={this.handleEmailChange} />
                        <div className="invalid-feedback">{this.state.emailError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password" 
                            className="form-control input-custom" 
                            placeholder="Enter password"
                            value={this.state.password}
                            onBlur={validatePassword}
                            onChange={this.handlePasswordChange} />
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password" 
                            className="form-control input-custom" 
                            placeholder="Confirm password"
                            value={this.state.passwordConfirm}
                            onBlur={validatePasswordConfirm}
                            onChange={this.handlePasswordConfirmChange} />
                        <div className="invalid-feedback">{this.state.passwordConfirmationError}</div>
                    </div>
                    <button type="submit" id="btnSubmit" className="btn btn-default">GET STARTED</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;