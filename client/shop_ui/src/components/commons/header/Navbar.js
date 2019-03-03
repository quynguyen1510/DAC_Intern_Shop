import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link" id="nav-cus" href="#none">Home</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;