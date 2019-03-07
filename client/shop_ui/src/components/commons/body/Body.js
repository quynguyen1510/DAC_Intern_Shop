import React, { Component } from 'react';
import Categories from './Categories';
import Banner from './SlideBanner';
import BodyPage from '../../products/BodyPage';

class Body extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="dropdown-category">
                    <span className="btn btn-link">Categories</span>
                    <Categories />
                </div>
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