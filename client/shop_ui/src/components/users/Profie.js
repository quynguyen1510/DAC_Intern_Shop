import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import defaultAvatarUrl from '../default_avatar.png'
import { bindActionCreators } from 'redux';
import { getUserById } from '../../actions/UsersAction';
import UserForm from './UserForm';
import Navbar from '../commons/header/Navbar';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user
        }
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <Navbar />
                <div className="profile">
                    <h2> {user.email}</h2>
                    <div className="avatar">
                        {
                            user.avatar_url !== null ? <img className="avatar-default" src={`${user.avatar_url}`} alt="" /> :
                                <img className="avatar-default" src={defaultAvatarUrl} alt="" />
                        }
                    </div>
                    <div className="inputForm">
                        <UserForm updatedUser={user} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserById
    }, dispatch)
}

const ProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
export default ProfileContainer;