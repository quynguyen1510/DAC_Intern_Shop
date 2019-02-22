import React, { Component } from 'react';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

    validateFisrtName = () => {
        const { first_name} = this.state;
        const valid_name = first_name.length !== 0
        this.setState({ firtsNameError: valid_name ? null : "First name can't be blank"});
    }
    validateLastName = () => {
        const {last_name } = this.state;
        const valid_name = last_name.length !== 0;
        this.setState({ lastNameError: valid_name ? null : "Last name can't be blank"});
    }

    validateEmail = () => {
        const {email} = this.state;

        if (email.length === 0){
            this.setState({ emailError: "Email can't be blank"});
        }
        const valid_email = EMAIL_REGEX.test(email)
        this.setState({ emailError: valid_email ? null : "Please enter a valid email"})
        
    }

    validatePassword = () => {
        const { password } = this.state;
        this.setState({ passwordError: password.length < 6 ? "Password must be greater than 5" : null }) 
    }

    validatePasswordConfirm = () => {
        const { passwordConfirm, password } = this.state;
        if( passwordConfirm.length < 6){
            this.setState({ passwordConfirmationError: "Password confirm must be greater than 5"});
        }
        if (passwordConfirm !== password ){
            this.setState({ passwordConfirmationError: "Password confirm don't match password "});
        }
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
                                onBlur={this.validateFirstName}
                                onChange={this.handleFirstNameChange}
                            placeholder="First name" />
                        <input type="text"
                               className="form-control input-custom" 
                               placeholder="Last name"
                               value={this.state.last_name}
                               onBlur={this.validateLastName}
                               onChange={this.handleLastNameChange} />
                        <div className="invalid-feedback">{this.state.firstNameError}</div>
                        <div className="invalid-feedback">{this.state.lastNameError}</div>
                    </div>
                    <div className="input-group">
                        <input type="email" 
                                className="input-custom form-control" 
                                placeholder="Enter email"
                                value={this.state.email}
                                onBlur={this.validateEmail}
                                onChange={this.handleEmailChange} />
                        <div className="invalid-feedback">{this.state.emailError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password" 
                            className="form-control input-custom" 
                            placeholder="Enter password"
                            value={this.state.password}
                            onBlur={this.validatePassword}
                            onChange={this.handlePasswordChange} />
                        <div className="invalid-feedback">{this.state.passwordError}</div>
                    </div>
                    <div className="input-group">
                        <input type="password" 
                            className="form-control input-custom" 
                            placeholder="Confirm password"
                            value={this.state.passwordConfirm}
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

export default LoginForm;