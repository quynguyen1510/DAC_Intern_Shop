import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_ROLE, SHOPPER_ROLE } from '../../../util/constant';

class Menu extends Component {

    handleLogOut = () => {
        this.props.logout(localStorage.getItem("token"));
        localStorage.removeItem("token");
        localStorage.removeItem("persist:root");
    }

    render() {
        const { currentUser } = (this.props.session.user)
        let name = '';
        if (currentUser) {
            const { first_name, last_name } = currentUser
            name = name = first_name + last_name;
        }
        return (
            <div>
                <div className="menu-bar container-fluid clearfix">
                    <div className="nav-avatar float-right">
                        <img src="https://img.icons8.com/dusk/64/000000/gender-neutral-user.png" alt="Avatar" id="avatar" />
                        <div className="dropdown" id="dropMenu">
                            <a href="#none" data-toggle="dropdown">{name}</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item dropdown-custome">
                                    {
                                        currentUser ? <Link to={`/profile/users/${currentUser.id}`} >Thông tin cá nhân</Link> : null
                                    }
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    {
                                        currentUser ? (currentUser.role_id === ADMIN_ROLE ? <Link to="/manage/users/1" >Quản lý tài khoản</Link> : null) : null
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
                                    <a onClick={this.handleLogOut} href="#none">Đăng xuất</a>
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