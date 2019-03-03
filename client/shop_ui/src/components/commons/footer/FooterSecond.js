import React, { Component } from 'react';

class FooterSecond extends Component {
    render() {
        return (
            <div className="container-fluid" id="footer-second">
                <div className="row justify-content-center footer-second-inner">
                    <div className="col-5">
                        <h3 className="footer-second-title">CÁCH THỨC THANH TOÁN</h3>
                        <span className="logoBankMethod">
                            <img src="./images/visa.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/master-card.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/jcb.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/delivery.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/napas.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/pig.png"/>
                        </span>
                    </div>
                    <div className="col-3">
                        <h3 className="footer-second-title">DỊCH VỤ GIAO HÀNG</h3>
                        <span className="logoBankMethod">
                            <img src="./images/express.png" width="80px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/vnport.png" width="54px" height="40px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/ghn.png" width="92px" height="38px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/lzd.png" width="89px" height="40px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/ninja.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/dhl.png" width="80px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/vnc.png" width="90px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/netco.png" width="60px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/ship60.png" width="60px" height="30px"/>
                        </span>
                    </div>
                    <div className="col-3">
                        <h3 className="footer-second-title">CHỨNG NHẬN</h3>
                        <span className="logoBankMethod">
                            <img src="./images/ios9001.png" id="iso9001"width="80px" height="80px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img src="./images/check.png" id="checklogo" width="106px" height="40px"/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSecond;