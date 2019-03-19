import React, { Component } from 'react';
import { login } from '../../../api/SessionApi';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            response_message: ''
        }
    }
    
    clearValidationText = () => {
        this.setState({ 
            response_message: '',
        })
    }

    handleEmailChange = event => {
        this.setState({ emailError: '' });
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState({ passwordError: '' });
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email.length === 0 || password.length === 0) {
            alert("Please input your account");
        } else if (this.state.passwordError !== null || this.state.emailError !== null) {
            return
        } else {
            login({
                "email": `${email}`,
                "password": `${password}`
            }).then(res => {
                if(res.data.auth_token){
                    localStorage.setItem("token", res.data.auth_token);
                    this.props.setAuthenticate();
                }
                else{
                    this.setState({
                        response_message: res.data.message,
                        email: '',
                        password: '',
                    })
                }

            }).catch(err => {
                
            })
        }
    }

    validateEmail = () => {
        const { email } = this.state;

        if (email.length === 0) {
            this.setState({ emailError: "Email can't be blank" });
        } else {
            const valid_email = EMAIL_REGEX.test(email)
            this.setState({ emailError: valid_email ? null : "Please enter a valid email" })
        }
    }

    validatePassword = () => {
        const { password } = this.state;
        if (password.length === 0) {
            this.setState({ passwordError: "Password can't be blank" })
        } else {
            this.setState({ passwordError: password.length < 6 ? "Password must be greater than 5" : null })
        }
    }

    render() {
        return (
            <div className="inputForm">
                <h2 className="titlePopup text-center">Login</h2>
                <form>
                    <div className="form-group">
                        <input type="email"
                            className="input-custom form-control"
                            placeholder="Enter email"
                            value={this.state.email}
                            onFocus={this.clearValidationText}
                            onChange={this.handleEmailChange}
                            onBlur={this.validateEmail} />
                        <div className="invalid-feedback">{this.state.emailError}</div>
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control input-custom"
                            placeholder="Enter password"
                            value={this.state.password}
                            onFocus={this.clearValidationText}
                            onChange={this.handlePasswordChange}
                            onBlur={this.validatePassword} />
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>
                    <button type="submit" id="btnSubmit" className="btn btn-default" onClick={this.handleSubmit}>GET STARTED</button>
                </form>
                <div className="text-center invalid-feedback"> { this.state.response_message }</div>
            </div>
        );
    }
}

export default LoginForm;