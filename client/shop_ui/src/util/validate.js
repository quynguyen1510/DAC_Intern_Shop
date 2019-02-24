const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateFisrtName = () => {
    const { first_name} = this.state;
    const valid_name = first_name.length !== 0
    this.setState({ firtsNameError: valid_name ? null : "First name can't be blank"});
}
export const validateLastName = () => {
    const {last_name } = this.state;
    const valid_name = last_name.length !== 0;
    this.setState({ lastNameError: valid_name ? null : "Last name can't be blank"});
}

export const validateEmail = () => {
    const {email} = this.state;

    if (email.length === 0){
        this.setState({ emailError: "Email can't be blank"});
    }
    const valid_email = EMAIL_REGEX.test(email)
    this.setState({ emailError: valid_email ? null : "Please enter a valid email"})
    
}

export const validatePassword = () => {
    const { password } = this.state;
    this.setState({ passwordError: password.length < 6 ? "Password must be greater than 5" : null }) 
}

export const validatePasswordConfirm = () => {
    const { passwordConfirm, password } = this.state;
    if( passwordConfirm.length < 6){
        this.setState({ passwordConfirmationError: "Password confirm must be greater than 5"});
    }
    if (passwordConfirm !== password ){
        this.setState({ passwordConfirmationError: "Password confirm don't match password "});
    }
}