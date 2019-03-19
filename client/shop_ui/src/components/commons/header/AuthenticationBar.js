import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import Menu from './MenuBar';
import { withRouter } from 'react-router';
import { Modal } from 'react-bootstrap';

class AuthenticationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowLogin: false,
            isAuthenticated: false,
            shouldShow: false,
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        if (token) {
            this.setState({ isAuthenticated: true });
        }
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

    handleClose = () => {
        this.setState({ shouldShow: false });
    }

    handleShow = () => {
        this.setState({ shouldShow: true });
    }

    setAuthenticate = () => {
        this.setState({ isAuthenticated: true});
        this.handleClose();
    }

    render() {
        let elmForm = null;
        if (this.state.isShowLogin) {
            elmForm = <LoginForm setAuthenticate={this.setAuthenticate} />
        } else {
            elmForm = <SignupForm setAuthenticate={this.setAuthenticate} />
        }

        const authenticated = this.state.isAuthenticated;
        return (
            <div>
                {
                    authenticated ? <Menu userName={this.state.user_name} /> : (
                        <div>
                            <div className="login-bar container-fluid">
                                <a onClick={this.handleShow} href="#top" data-toggle="modal">ĐĂNG NHẬP / ĐĂNG KÝ</a>
                            </div>
                            {/* <!-- Popup content--> */}
                            <Modal className="authen-form" show={this.state.shouldShow} onHide={this.handleClose}>
                                <Modal.Body>
                                    <div className="mx-auto btnLoginBar">
                                        <button className={this.state.isShowLogin === false ? 'active' : ''} onClick={this.handleShowSignup.bind(this)}>Sign Up</button>
                                        <button className={this.state.isShowLogin === true ? 'active' : ''} onClick={this.handleShowLogin.bind(this)}>Login</button>
                                    </div>
                                    {elmForm}
                                </Modal.Body>
                            </Modal>
                            {/* <!-- End popup --> */}
                        </div>
                    )
                }
            </div>
        );
    }
}

export default withRouter(AuthenticationBar);