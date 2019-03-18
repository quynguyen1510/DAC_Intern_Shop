import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_ROLE, SHOPPER_ROLE } from '../../../util/constant';
var jwtDecode = require('jwt-decode');

class Navbar extends Component {
    render() {
        const token = localStorage.getItem('token');
        const currentUser  = jwtDecode(token);
      
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary">
                        <Link to={'/'} className="nav-link" id="nav-cus">Home</Link>
                    </button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropright</span>
                    </button>
                    <div className="dropdown">
                        <ul className="dropdown-menu nav-cus-menu">
                            <li className="dropdown-item">
                                {
                                    currentUser ? <Link to={`/profile/users/${currentUser.user_id}`} >Thông tin cá nhân</Link> : null
                                }
                            </li>
                            <li className="dropdown-item ">
                                {
                                    currentUser ? (currentUser.role_id === ADMIN_ROLE ? <Link to="/manage/users/1" >Quản lý tài khoản</Link> : null) : null
                                }
                            </li>
                            <li className="dropdown-item ">
                                {
                                    currentUser &&
                                    ((currentUser.role_id === ADMIN_ROLE || currentUser.role_id === SHOPPER_ROLE) ?
                                        <Link to="/manage/products" >Quản lý sản phẩm</Link> : null)
                                }
                            </li>
                            <li className="dropdown-item">
                                {
                                    currentUser &&
                                    ((currentUser.role_id === ADMIN_ROLE || currentUser.role_id === SHOPPER_ROLE) ?
                                        <Link to="/manage/campaign" >Quản lý chiến dịch</Link> : null)
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;