import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="page">
                <div>
                    <a href="#none" className="btn btn-default" id="btnUpdateProfile">Update Profile</a>
                </div>
                <div className="profile">
                    <div className="avatar" >
                        <img src="https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm" className="img-circle" />
                    </div>
                    <div className="info">
                        <h3>UserName</h3>
                        <h6>First Name: David</h6>
                        <h6>Last Name: David</h6>
                        <h6>Email: MyEmail@servidor.com</h6>
                        <h6>Role Name: User</h6>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

export default Profile;