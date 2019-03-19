import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { uploadImage } from '../../api/imgur_api';
import ReactLoading from 'react-loading';
import { update, create } from '../../api/user_api';
import { ADMIN_ROLE } from '../../util/constant';
var jwt_decode = require('jwt-decode');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


class UserForm extends Component {
    constructor(props) {
        super(props);
        const updatedUser = this.props.updatedUser;
        this.state = {
            // value 
            first_name: updatedUser ? updatedUser.first_name : '',
            last_name: updatedUser ? updatedUser.last_name : '',
            email: updatedUser ? updatedUser.email : '',
            password: updatedUser ? updatedUser.password : '',
            passwordConfirm: updatedUser ? updatedUser.passwordConfirm : '',
            role_id: updatedUser ? updatedUser.role_id : '',
            avatar_url: updatedUser ? updatedUser.avatar_url : '',

            isLoading: false
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
        this.setState({ passwordConfirm: event.target.value});
    }

    handleRoleChange = event => {
        this.setState({ role_id: event.target.value })
    }

    handleUploadAvatar = event => {
        this.setState({ isLoading: true })
        const file = event.target.files[0];
        uploadImage(file).then(response => {
            const imageUrl = `https://i.imgur.com/${response.data.data.id}.png`
            this.setState({ avatar_url: imageUrl, isLoading: false });
        }).catch(err => {
            console.log(err)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = {};
        const attributes = Object.keys(this.state);

        for (let index in attributes) {
            const key = attributes[index];
            let value = this.state[`${attributes[index]}`];
            if(!this.props.updatedUser && key === "role_id"){
                value = 2;
            }
            if (value === "") {
                alert("You must type " + key);
                return;
            }

            if(key === "email" && !EMAIL_REGEX.test(value)){
                console.log(EMAIL_REGEX.test(value))
                alert("Your email is invalid");
                return;
            }

            if(!this.props.updatedUser) {
                if((key === "password" || key === "passwordConfirm") && value.length < 6){
                    alert("Your password must greater than 6");
                    return;
                }
    
                if(key === "passwordConfirm" && value !== userInfo['password']){
                    alert("Your password not match");
                    return;
                }
            }

            if (key === "isLoading" || value === undefined) {
                continue;
            }

            userInfo[`${key}`] = String(value);
        }
        if (this.props.updatedUser ) {
            if(!this.checkObjectEqual(userInfo, this.props.updatedUser )){
                update(userInfo, this.props.updatedUser.id).then(res => {
                    alert(res.data.message);
                    this.props.history.push({
                        pathname: "/manage/users",
                        state: {
                            page: this.props.page
                        }
                    })
                }).catch(err => { 
                    alert("Can not update user") ;
                    return;          
                })
            }
            else{
                alert("You must type something new");
            }
        }
        else{
           create(userInfo).then(res => {
               alert(res.data.message);
               this.props.history.push("/manage/users");
           }).catch(err => {
                alert("Can not create " + userInfo.first_name);
                return;
           })
        }
    }

    checkObjectEqual(a, b) {
        const aProps = Object.getOwnPropertyNames(a);
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (String(a[propName]) !== String(b[propName]) ) {
                return false;
            }
        }
        return true;
    }


    render() {
        const { updatedUser } = this.props;
        const {role_id} = jwt_decode(localStorage.getItem("token"));
        return (
            <div>
                <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2  col-form-label">First Name</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                name="first_name"
                                value={this.state.first_name}
                                onChange={this.handleFirstNameChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.handleLastNameChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange} />
                        </div>
                    </div>
                    {!updatedUser &&
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password"
                                    value={this.state.password}
                                    className="form-control"
                                    onChange={this.handlePasswordChange} />
                            </div>
                        </div>
                    }

                    {!updatedUser &&
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Confirm</label>
                            <div className="col-sm-8">
                                <input type="password"
                                    onChange={this.handlePasswordConfirmChange}
                                    value={this.state.passwordConfirm}
                                    className="form-control" />
                            </div>
                        </div>
                    }
                    {updatedUser && role_id === ADMIN_ROLE ?
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Role</label>
                            <div className="col-sm-8">
                                <select 
                                    onChange={this.handleRoleChange}
                                    className="form-control"
                                    value={this.state.role_id}>
                                    <option value="1">Admin</option>
                                    <option value="2">User</option>
                                    <option value="3">Shoper</option>
                                </select>
                            </div>
                        </div> : null
                    }
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Avatar</label>
                        <div className="col-sm-8">
                            <div className="col-sm-12">
                                {
                                    this.state.avatar_url !== "null" ? <label htmlFor="uploadImage" className="custom-file-label">{this.state.avatar_url}</label> :
                                        <label htmlFor="uploadImage" className="custom-file-label">Choose File</label>
                                }
                            </div>
                            <input type="file"
                                className="form-control-file"
                                id="uploadImage"
                                onChange={this.handleUploadAvatar} />
                            {
                                this.state.isLoading && (
                                    <ReactLoading color={"black"} height={"1%"} width={"4%"} />
                                )
                            }
                        </div>
                    </div>
                    <div className="submit-profile">
                        <button className="btn btn-primary update-profile-button">{updatedUser ? "Update" : "Create"}</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default withRouter(UserForm);
