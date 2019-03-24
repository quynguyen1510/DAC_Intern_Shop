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
        const {banners} = this.state;
       
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
                        <img className="d-block w-100" src="https://www.bworldonline.com/wp-content/uploads/2018/10/campaign-101918.jpg" alt="Third slide" />
                    </Carousel.Item>
                }
            </Carousel>
        </div>
        );
    }
}

export default Banner;