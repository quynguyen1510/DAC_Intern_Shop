import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Body extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9">
                        <h2>This is main content</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;