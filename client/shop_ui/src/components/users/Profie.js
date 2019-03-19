import React, { Component } from 'react';
import { withRouter } from 'react-router';
import defaultAvatarUrl from '../default_avatar.png'
import UserForm from './UserForm';
import Navbar from '../commons/header/Navbar';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user,
            page: this.props.location.state.page
        }
    }
    render() {
        const { user, page } = this.state;
        return (
            <div>
                <Navbar />
                <div className="profile">
                    <h2> {user.email}</h2>
                    <div className="avatar">
                        {
                            user.avatar_url !== "null" ? <img className="avatar-default" src={`${user.avatar_url}`} alt="" /> :
                                <img className="avatar-default" src={defaultAvatarUrl} alt="" />
                        }
                    </div>
                    <div className="inputForm">
                        <UserForm updatedUser={user} page={page} />
                    </div>
                </div>
            </div>
        );
    }
}



export default withRouter(Profile);