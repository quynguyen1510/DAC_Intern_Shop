import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="menu-bar container-fluid clearfix">
                    <div className="nav-avatar float-right">
                        <img src="./images/img_avatar.png" alt="Avatar" id="avatar" />
                        <div className="dropdown" id="dropMenu">
                            <a href="#none" data-toggle="dropdown">Admin</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item dropdown-custome" href="#">Thông tin cá nhân</a>
                                <a className="dropdown-item dropdown-custome" href="#">Quản lý chiến dịch</a>
                                <a className="dropdown-item dropdown-custome" href="#">Đăng xuất</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;