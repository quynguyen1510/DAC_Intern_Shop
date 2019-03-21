import React, { Component } from 'react';
import { getBanners } from '../../../api/banner_api';
import {Carousel} from 'react-bootstrap';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        }
    }

    componentDidMount() {
        getBanners().then(res => {
            this.setState({ banners: [...res.data.banners] });
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        let nextBanners;
        const { banners } = this.state;
        if (banners.length > 0) {
            nextBanners = this.state.banners.slice(1, banners.length);
        }
        return (
            <div className="col-8" id="banner">
                <Carousel>
                    {banners.length > 0 ?
                        banners.map((banner, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={banner.campaignimg} alt="Third slide" />
                            </Carousel.Item>
                        )) :
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://ferret.akamaized.net/images/58aa4da76ef5e46d91000001/original.jpg" alt="Third slide" />
                        </Carousel.Item>
                    }
                </Carousel>
            </div>
        );
    }
}

export default Banner;