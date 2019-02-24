import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <ul>
                    <li>
                        <a href="#none">Profile</a>
                    </li>
                    <li>
                        <a href="#none">Manage User</a>
                    </li>
                    <li>
                        <a href="#none">Manage Role</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;