import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import defaultAvatarUrl from '../default_avatar.png'
import { bindActionCreators } from 'redux';
import { getUserById} from '../../actions/UsersAction';
import UserForm from './UserForm';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: '',
            passwordConfirmationError: '',
        }
    }

    handleFirstNameChange = event => {
        this.setState({ first_name: event.target.value });
    }

    handleLastNameChange = event => {
        this.setState({ last_name: event.target.value });
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }

    handlePasswordConfirmChange = event => {
        this.setState({ passwordConfirm: event.target.value });
    }


    render() {
        const {users } = this.props.user; 
        const profileUserId = this.props.match.params.id - 1;
        const updatedUser = users[profileUserId];
        console.log(this.props.match.params.id);
        console.log(this.props.user.users)
        return (
            <div className="profile">
                <h2> {updatedUser.email}</h2>
                <div className="avatar">
                    {
                        updatedUser.avatar_url !== null ? <img className="avatar-default" src={  `${updatedUser.avatar_url}` } alt=""/> :
                        <img className="avatar-default" src={defaultAvatarUrl} alt=""/>
                    }
                    
                </div>
                <div className="inputForm">
                    < UserForm updatedUser={updatedUser}/>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUserById
    }, dispatch)
}

const ProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
export default ProfileContainer;