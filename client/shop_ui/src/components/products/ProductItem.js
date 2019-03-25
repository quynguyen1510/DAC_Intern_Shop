import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
    render() {
        const {product} = this.props;
        return (
            <div className="col-md-3 col-sm-12 col-xs-12 mb-2 col-cus">
                <div className="product-item">
                    <div className="pi-img-wrapper">
                        <Link to={{pathname: `/products/${product.id}`, state: { product: product}}}>
                            <img src={product.product_img} className="img-responsive" alt="Berry Lace Dress" />
                        </Link>
                    </div>
                    <Link to={{pathname: `/products/${product.id}`, state: { product: product}}} className="item-name">
                        <h3 className="text-center">{product.product_name}</h3>
                    </Link>
                    <div className="inforItem">
                        <p className="item-price">{product.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// width="100%" height="241px" 

export default ProductItem;