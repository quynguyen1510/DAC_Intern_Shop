import React, { Component } from 'react';
import LoginBar from './LoginBar';
import LogoBar from './LogoBar';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <LoginBar />
    
                <LogoBar />
            </div>
        );
    }
}
export default Header;