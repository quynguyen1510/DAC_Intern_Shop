import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Cart from './Cart.js';
import Categories from '../body/Categories.js';

class LogoBar extends Component {
    render() {
        return (
            <div className="logo-bar container-fluid">
                <div className="container-fluid logo-bar-content">
                    <div className="row justify-content-md-center">
                        <div className="col-md-8 col-offset-2 search-bar">
                            <SearchBar />
                            <Cart />
                        </div>
                    </div>
                </div>
                <div className="dropdown-category">
                    <span className="btn btn-link">Categories</span>
                    <Categories />
                </div>
            </div>
            
        );
    }
}

export default LogoBar;