import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_ROLE, SHOPPER_ROLE } from '../../../util/constant';
import { getUserById } from '../../../api/user_api';
import { logout } from '../../../api/SessionApi';
var jwt_decode = require('jwt-decode');

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
           currentUser: null
        };
    }

    handleLogOut = () => {
        logout(localStorage.getItem("token"));
        localStorage.removeItem("token");
    }

    componentDidMount = () => {
        const { user_id } = jwt_decode(localStorage.getItem("token"));

        if(!this.state.currentUser){
            getUserById(user_id).then(res => {
                this.setState({currentUser: res.data});
            }).catch(err => {
                console.log(err);
            })
        }
    }

    render() {
        const { currentUser} = this.state;
        return (
            <div>
                <div className="menu-bar container-fluid clearfix">
                    <div className="nav-avatar float-right">
                        <img src={currentUser && currentUser.avatar_url ? currentUser.avatar_url : "https://img.icons8.com/dusk/64/000000/gender-neutral-user.png"} alt="Avatar" id="avatar" />
                        <div className="dropdown" id="dropMenu">
                            <a href="#none" data-toggle="dropdown">{currentUser ? (currentUser.first_name + currentUser.last_name) : ""}</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item dropdown-custome">
                                    {
                                        currentUser ? <Link to={{
                                            pathname: `/profile/users/${currentUser.id}`,
                                            state: {
                                                user: currentUser
                                            }
                                        }} >Thông tin cá nhân</Link> : null
                                    }
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    {
                                        currentUser ? (currentUser.role_id === ADMIN_ROLE ? <Link to="/manage/users" >Quản lý tài khoản</Link> : null) : null
                                    }
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    {
                                        currentUser &&
                                        ((currentUser.role_id === ADMIN_ROLE || currentUser.role_id === SHOPPER_ROLE) ? 
                                        <Link to="/manage/products" >Quản lý sản phẩm</Link> : null) 
                                    }
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    {
                                        currentUser &&
                                        ((currentUser.role_id === ADMIN_ROLE || currentUser.role_id === SHOPPER_ROLE) ? 
                                        <Link to="/manage/campaign" >Quản lý chiến dịch</Link> : null) 
                                    }
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    <a onClick={this.handleLogOut} href="/">Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Menu;