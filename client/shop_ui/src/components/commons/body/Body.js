import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Profile from '../../user(manage)/Profie';
import FormCreateUser from '../../user(manage)/FormCreateUser';

class Body extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-9">
                        <h2>This is main content</h2>
                        <FormCreateUser/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;