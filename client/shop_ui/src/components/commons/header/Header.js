import React, { Component } from 'react';
import AuthenticationBar from './AuthenticationBar';
import LogoBar from './LogoBar';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <AuthenticationBar {...this.props} />
                <LogoBar />
            </div>
        );
    }
}
export default Header;