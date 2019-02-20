import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="col-md-1 nav-cart">
                <a href="#top">
                    <img src="./images/cart-icon.png" alt="Giỏ hàng" />
                </a>
            </div>
        );
    }
}

export default Cart;