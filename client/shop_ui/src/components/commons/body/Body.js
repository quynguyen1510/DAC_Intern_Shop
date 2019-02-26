import React, { Component } from 'react';
import Categories from './Categories'; 
import Banner from './SlideBanner';
class Body extends Component {
    render() {
        return (
            <div className="container-fluid cat-banner">
                <div className="row justify-content-center cat-banner">
                    <Categories/>
                    <Banner/>
                </div>
            </div>
        );
    }
}

export default Body;