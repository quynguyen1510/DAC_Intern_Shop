import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div className="col-md-2 col-sm-2 col-xs-12 mb-2 col-cus">
                <div className="product-item">
                    <div className="pi-img-wrapper">
                        <a href="#none">
                            <img src="http://keenthemes.com/assets/bootsnipp/k1.jpg" className="img-responsive" alt="Berry Lace Dress" />
                        </a>
                    </div>
                    <a href="#none" className="item-name">
                        <h3 className="text-center">Berry Lace Dress</h3>
                    </a>
                    <div>
                        <p className="item-price">$29.00</p>
                        <a href="#none" className="btn add-cart">Add to cart</a>
                    </div>
                </div>
            </div>
        );
    }
}

// width="100%" height="241px" 

export default ProductItem;