import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Cart from './Cart.js';

class LogoBar extends Component {
    render() {
        return (
            <div className="logo-bar container-fluid">
                <div className="container-fluid logo-bar-content">
                    <div className="row justify-content-md-center">
                        <SearchBar />
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

export default LogoBar;