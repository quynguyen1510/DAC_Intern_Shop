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
                    <form >
                        <div className="form-group row">
                            <label className="col-sm-2  col-form-label">First Name</label>
                            <div className="col-sm-8">
                                <input type="text" disabled className="form-control" placeholder={currentUser.first_name} />
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-8">
                                <input type="password" disabled className="form-control" placeholder={currentUser.last_name} />
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input type="password" disabled className="form-control" placeholder={currentUser.email} />
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password" disabled className="form-control" />
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Confirm</label>
                            <div className="col-sm-8">
                                <input type="password"  disabled className="form-control" />
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-8">
                                <select className="form-control" disabled value={currentUser.role_id}>
                                    <option value="1">Admin</option>
                                    <option value="2">Shopper</option>
                                    <option value="3">User</option>
                                </select>
                            </div>
                            <button className="btn btn-link">Edit</button>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Avatar</label>
                            <div className="col-sm-8">
                                <div className="col-sm-12">
                                    <label className="custom-file-label">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="submit-profile">
                            <button className="btn btn-primary update-profile-button">Update</button>
                        </div>

                    </form>

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