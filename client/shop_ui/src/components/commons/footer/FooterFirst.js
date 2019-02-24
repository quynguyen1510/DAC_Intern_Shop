import React, { Component } from 'react';

class FooterFirst extends Component {
    render() {
        return (
            <div className="container-fluid " id="footer-first">
                <div className="row justify-content-center footer-first-inner">
                    <div className="col-lg-5">
                        <h3 className="footer-first-title">LIÊN HỆ</h3>
                        <ul className="footer-first-list">
                            <li className="footer-first-item">
                                <a href="#none">Thứ 2 đến CN:9h-18h(Hotline), 7h - 22h(chat trực tuyến)</a>
                            </li>
                            <li className="footer-first-item">
                                <a href="#none">Trung tâm hỗ trợ</a>
                            </li>
                            <li className="footer-first-item">
                                <a href="#none">Hướng dẫn đặt hàng</a>
                            </li>
                            <li className="footer-first-item">
                                <a href="#none">Giao hàng và nhận hàng</a>
                            </li>
                            <li className="footer-first-item">
                                <a href="#none">Chính sách hàng nhập khẩu</a>
                            </li>
                            <li className="footer-first-item">
                                <a href="#none">Hướng dẫn đổi trả</a>
                            </li>
                            <li className="footer-first-item">
                                <a href="#none">Hướng dẫn và điều kiện sử dụng voucher</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="footer-first-title">ĐĂNG KÝ NHẬN TIN</h3>
                        <div>
                            <form className="form-inline" action="/action_page.php">
                                <input type="email" className="form-control mb-2 mr-sm-2" id="email" placeholder="Your email address"/>
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label ml-2">
                                        <input className="form-check-input" type="radio" /> Nam
                                    </label>
                                    <label  className="form-check-label ml-2">
                                        <input className="form-check-input" type="radio" /> Nu
                                     </label>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2" id="btnSubmitContact">Đăng ký</button>
                            </form>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-1" id="imgLogo">
                                    <img src="./images/logo-footer.png" alt="logo"></img>
                                </div>
                                <div className="col-sm-4" id="content">
                                    <h4 className="footer-title-form">THẢNH THƠI MUA SẮM</h4>
                                    <h5 className="footer-content-form">Tải app</h5>
                                </div>
                                <div className="col-sm-6 img-availble">
                                    <img src="./images/available_app_store.png" alt="logo"/>
                                    <img src="./images/available_android.png" alt="logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterFirst;