import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Cart from './Cart.js';
import {Link} from 'react-router-dom';
class LogoBar extends Component {
    render() {
        return (
            <div className="logo-bar container-fluid">
                <div className="container-fluid logo-bar-content">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 col-offset-2 search-bar">
                            <Link className="homepage"  to="/">HOMEPAGE</Link>
                            <SearchBar />
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default LogoBar;