import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import Menu from './MenuBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { login, signup } from '../../../actions/SessionAction';
import { getAuthenticatedUser } from '../../../actions/UsersAction';

class AuthenticationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowLogin: false,
            isAuthenticated: false
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
       if (token){
           this.setState({isAuthenticated: true});
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


    render() {
        let elmForm = null;
        if (this.state.isShowLogin) {
            elmForm = <LoginForm {...this.props} />
        } else {
            elmForm = <SignupForm {...this.props} />
        }

        const authenticated = this.state.isAuthenticated;
        return (
            <div>
                {
                    authenticated ? <Menu {...this.props}/> : (
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
                    )
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      login,
      signup,
      getAuthenticatedUser
    }, dispatch)
}

function mapStateToProps(state) {
    return {
      session: state
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticationBar));