import React, { Component } from 'react';
import LoginBar from './LoginBar';
import LogoBar from './LogoBar';
import Menu from './MenuBar';


class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <Menu/> */}
                <LoginBar {...this.props} />
                <LogoBar />
            </div>
        );
    }
}
export default Header;