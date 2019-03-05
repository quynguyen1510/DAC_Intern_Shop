import React, { Component } from 'react';

class FooterSecond extends Component {
    render() {
        return (
            <div className="container-fluid" id="footer-second">
                <div className="row justify-content-center footer-second-inner">
                    <div className="col-5">
                        <h3 className="footer-second-title">CÁCH THỨC THANH TOÁN</h3>
                        <span className="logoBankMethod">
                            <img alt="visa" src="./images/visa.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="master-card" src="./images/master-card.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="jcb" src="./images/jcb.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="delivery" src="./images/delivery.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="napas" src="./images/napas.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="pig" src="./images/pig.png"/>
                        </span>
                    </div>
                    <div className="col-3">
                        <h3 className="footer-second-title">DỊCH VỤ GIAO HÀNG</h3>
                        <span className="logoBankMethod">
                            <img alt="express" src="./images/express.png" width="80px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="vnport" src="./images/vnport.png" width="54px" height="40px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="ghn" src="./images/ghn.png" width="92px" height="38px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="lzd" src="./images/lzd.png" width="89px" height="40px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="ninja" src="./images/ninja.png"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="dh1" src="./images/dhl.png" width="80px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="vnc" src="./images/vnc.png" width="90px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="netco" src="./images/netco.png" width="60px" height="30px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="ship60" src="./images/ship60.png" width="60px" height="30px"/>
                        </span>
                    </div>
                    <div className="col-3">
                        <h3 className="footer-second-title">CHỨNG NHẬN</h3>
                        <span className="logoBankMethod">
                            <img alt="iso9001" src="./images/ios9001.png" id="iso9001"width="80px" height="80px"/>
                        </span>
                        <span className="logoBankMethod">
                            <img alt="check" src="./images/check.png" id="checklogo" width="106px" height="40px"/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterSecond;