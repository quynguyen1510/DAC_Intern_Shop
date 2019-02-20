import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div className="inputForm">
                <h2 className="titlePopup text-center">Login</h2>
                <form>
                    <input type="email" className="input-custom form-control" placeholder="Enter email" />
                    <input type="password" className="form-control input-custom" placeholder="Enter password" />
                    <button type="submit" id="btnSubmit" className="btn btn-default">GET STARTED</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;