import React, { Component } from 'react';
import LoginBar from './LoginBar.js';
import LogoBar from './LogoBar.js';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <LoginBar/>
    
                <LogoBar/>
            </div>
        );
    }
}
export default Header;