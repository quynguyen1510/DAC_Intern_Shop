import React, { Component } from 'react';

class Menu extends Component {
    componentDidMount() {
<<<<<<< HEAD
        const token = localStorage.getItem("token");
        this.props.getAuthenticatedUser(token);
=======
        this.props.getUserByID;
>>>>>>> af5fecba8cadca364c879dd5e0b7357e5f013e41
    }
    render() {
        const {currentUser} = (this.props.session.user)
        let name = ''
        if (currentUser){
            const { first_name, last_name } = currentUser
             name = name =  first_name + last_name 
        }
        return (
            <div>
                <div className="menu-bar container-fluid clearfix">
                    <div className="nav-avatar float-right">
                        <img src="./images/img_avatar.png" alt="Avatar" id="avatar" />
                        <div className="dropdown" id="dropMenu">
                            <a href="#none" data-toggle="dropdown">{name}</a>
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