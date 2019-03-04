import React, { Component } from 'react';
import Categories from './Categories';
import Banner from './SlideBanner';
import BodyPage from './BodyPage';

class Body extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="container-fluid cat-banner">
                    <div className="row justify-content-center cat-banner">
                        <Categories />
                        <Banner />
                    </div>
                </div>
                <BodyPage />
            </div>
        );
    }
}

export default Body;