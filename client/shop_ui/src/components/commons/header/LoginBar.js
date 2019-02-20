import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';

class LoginBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowLogin: false
        };
    }
    handleShowLogin() {
        this.setState({
            isShowLogin: true
        })
    }
    handleShowSignup() {
        this.setState({
            isShowLogin: false
        })
    }
    render() {
        let elmForm = null;
        if(this.state.isShowLogin) {
            elmForm = <LoginForm/>
        }else{
            elmForm = <SignupForm/>
        }
        return (
            <div>
                <div className="login-bar container-fluid">
                    <a href="#top" data-toggle="modal" data-target="#myModal">ĐĂNG NHẬP / ĐĂNG KÝ</a>
                </div>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        {/* <!-- Popup content--> */}
                        <div className="modal-content" id="modalContent">
                            <div className="mx-auto btnLoginBar">
                                <button className={this.state.isShowLogin === false ? 'active' : ''} onClick={this.handleShowSignup.bind(this)}>Sign Up</button>
                                <button className={this.state.isShowLogin === true ? 'active' : ''} onClick={this.handleShowLogin.bind(this)}>Login</button>
                            </div>
                            {elmForm}
                        </div>
                        {/* <!-- End popup --> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginBar;