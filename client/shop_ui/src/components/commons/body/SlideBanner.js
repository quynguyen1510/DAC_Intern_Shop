import React, { Component } from 'react';
import { getBanners } from '../../../api/banner_api';
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
        const {banners} = this.state;
        if (banners.length > 0) {
            nextBanners = this.state.banners.slice(1, banners.length);
        }
        return (
            <div className="col-8" id="banner">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {
                            banners[0] && (
                                <div className="carousel-item active">
                                    <a href={banners[0].final_url} target="_blank" alt="banner link">
                                    <img className="d-block w-100" src={ banners[0].campaignimg} alt="Third slide" />
                                    </a>
                                </div>
                            )
                        }
                        {
                            nextBanners  && (
                             nextBanners.map((banner, index) => (
                                    <div key={index} className="carousel-item">
                                        <a href={banner.final_url} alt="banner link" target="_blank">
                                            <img className="d-block w-100" src={banner.campaignimg} alt="Third slide" />
                                        </a>
                                    </div>
                            ))

                            )
                        }

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Banner;