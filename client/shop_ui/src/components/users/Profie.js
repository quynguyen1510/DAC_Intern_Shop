import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    validateEmail,
    validateFisrtName,
    validateLastName,
    validatePassword,
    validatePasswordConfirm
} from '../../util/validate';
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
    componentDidMount() {
        if(this.state.user_id !== null){
            const token = localStorage.getItem("token");
            this.props.getUserById(token, this.state.user_id);
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
        const {currentUser} = this.props.user; 
        console.log(currentUser)
        return (
            <div className="profile">
                <h2> {currentUser.email}</h2>
                <div className="avatar">
                    {
                        currentUser.avatar_url !== null ? <img className="img-thumbnail" src={  `${currentUser.avatar_url}` } alt=""/> :
                        <img className="avatar-default" src={defaultAvatarUrl} alt=""/>
                    }
                    
                </div>
                <div className="inputForm">
                    < UserForm currentUser={currentUser}/>
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