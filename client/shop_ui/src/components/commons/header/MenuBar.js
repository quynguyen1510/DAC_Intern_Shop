import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

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
                        <img src="./images/img_avatar.png" alt="Avatar" id="avatar" />
                        <div className="dropdown" id="dropMenu">
                            <a href="#none" data-toggle="dropdown">{name}</a>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item dropdown-custome">
                                    <Link to={`/users/${currentUser.id}`} >Thông tin cá nhân</Link>
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    <Link to="/manage/users" >Quản lý tài khoản</Link>
                                </li>
                                <li className="dropdown-item dropdown-custome">
                                    <a href="#">Đăng xuất</a>
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