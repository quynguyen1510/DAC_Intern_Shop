import React, { Component } from 'react';

class FooterFirst extends Component {
    render() {
        return (
           <div className="container-fulid footer-first">
                <div className="row footer-first-inner">
                    <div className="col-3">Col 1</div>
                    <div className="col-3">Col 2</div>
                    <div className="col-6">Col 3</div>
                </div>
           </div>
        );
    }
}

export default FooterFirst;