import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div className="inputForm">
                <h2 className="titlePopup text-center">Sign Up for free</h2>
                <form>
                    <div className="input-group">
                        <input type="text" id="firstName" className="form-control input-custom"
                            placeholder="First name" />
                        <input type="text" className="form-control input-custom" placeholder="Last name" />
                    </div>
                    <input type="email" className="input-custom form-control" placeholder="Enter email" />
                    <input type="password" className="form-control input-custom" placeholder="Enter password" />
                    <input type="password" className="form-control input-custom" placeholder="Confirm password" />
                    <button type="submit" id="btnSubmit" className="btn btn-default">GET STARTED</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;