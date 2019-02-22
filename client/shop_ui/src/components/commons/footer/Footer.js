import React, { Component } from 'react';
import FooterFirst from './FooterFirst';
import FooterSecond from './FooterSecond';

class Footer extends Component {
    render() {
        return (
           <div className="footer">
                <FooterFirst/>
                <FooterSecond/>
           </div>
        );
    }
}

export default Footer;