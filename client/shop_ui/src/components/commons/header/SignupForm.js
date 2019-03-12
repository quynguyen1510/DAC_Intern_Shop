import React, { Component } from 'react';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

class SignupForm extends Component {
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

    validateFirstName = () => {
        const first_name = this.state.first_name;
        const valid_name = first_name.length !== 0
        this.setState({ firstNameError: valid_name ? "" : "First name can't be blank" });
    }
    validateLastName = () => {
        const { last_name } = this.state;
        const valid_name = last_name.length !== 0;
        this.setState({ lastNameError: valid_name ? "" : "Last name can't be blank" });
    }

    validateEmail = () => {
        const { email } = this.state;

        if (email.length === 0) {
            this.setState({ emailError: "Email can't be blank" });
        } else {
            const valid_email = EMAIL_REGEX.test(email)
            this.setState({ emailError: valid_email ? "" : "Please enter a valid email" })
        }

    }

    validatePassword = () => {
        const { password } = this.state;
        if (password.length === 0) {
            this.setState({ passwordError: "Password can't be blank" });
        } else {
            this.setState({ passwordError: password.length < 6 ? "Password must be greater than 5" : "" })
        }
    }

    validatePasswordConfirm = () => {
        const { passwordConfirm, password } = this.state;
        if (passwordConfirm.length === 0) {
            this.setState({ passwordConfirmationError: "Password confirm can't be blank" });
        } else if (passwordConfirm.length < 6) {
            this.setState({ passwordConfirmationError: "Password confirm must be greater than 5" });
        } else if (passwordConfirm !== password) {
            this.setState({ passwordConfirmationError: "Password confirm don't match password " });
        }
    }

    handleFirstNameChange = event => {
        this.setState({ first_name: event.target.value });
        this.setState({ firstNameError: "" });
    }

    handleLastNameChange = event => {
        this.setState({ lastNameError: "" });
        this.setState({ last_name: event.target.value });
    }

    handleEmailChange = event => {
        this.setState({ emailError: "" });
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState({ passwordError: "" });
        this.setState({ password: event.target.value });
    }

    handlePasswordConfirmChange = event => {
        this.setState({ passwordConfirmationError: "" });
        this.setState({ passwordConfirm: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password, first_name, last_name, passwordConfirm } = this.state;
        if (email.length === 0 || password.length === 0 || first_name.length === 0 || last_name.length === 0 || passwordConfirm.length === 0) {
            alert("Please fill out the information");
        } else if (this.state.emailError.length > 0 || 
                this.state.passwordError.length > 0 || 
                this.state.passwordConfirmationError.length  > 0){
            return;
        } else {
            const credentials = {
                "first_name": `${first_name}`,
                "last_name": `${last_name}`,
                "email": `${email}`,
                "password": `${password}`,
                "password_confirmation": `${passwordConfirm}`
            }
            this.props.signup(credentials);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (localStorage.getItem("token")) {
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
                            className="form-control input-custom"
                            placeholder="First name"
                            onChange={this.handleFirstNameChange}
                            onBlur={this.validateFirstName}
                        />
                        <input type="text"
                            className="form-control input-custom"
                            placeholder="Last name"
                            onChange={this.handleLastNameChange}
                            onBlur={this.validateLastName}
                        />
                        <div className="invalid-feedback">{this.state.firstNameError}</div>
                        <div className="invalid-feedback">{this.state.lastNameError}</div>
                    </div>
                    <div className="input-group">
                        <input type="email"
                            className="input-custom form-control"
                            placeholder="Enter email"
                            onBlur={this.validateEmail}
                            onChange={this.handleEmailChange} />
                        <div className="invalid-feedback">{this.state.emailError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password"
                            className="form-control input-custom"
                            placeholder="Enter password"
                            onBlur={this.validatePassword}
                            onChange={this.handlePasswordChange} />
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password"
                            className="form-control input-custom"
                            placeholder="Confirm password"
                            onBlur={this.validatePasswordConfirm}
                            onChange={this.handlePasswordConfirmChange} />
                        <div className="invalid-feedback">{this.state.passwordConfirmationError}</div>
                    </div>
                    <button type="submit" id="btnSubmit" className="btn btn-default">GET STARTED</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;