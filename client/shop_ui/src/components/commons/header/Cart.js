import React, { Component } from 'react';
class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberItems: 0,
        }
    }

    componentDidMount(){
        // declare cart 
        let cart = localStorage.getItem("cart");
        if(cart == null || cart.length === 0){
            cart = []
            localStorage.setItem("cart", JSON.stringify([]));
        }
        else{
            this.setState({numberItems: JSON.parse(localStorage.getItem("cart")).length})
        }
    }

    render() {
        return (
            <div className="col-md-1 nav-cart">
                <a href="#">
                    <img src="https://img.icons8.com/ios/50/000000/add-shopping-cart.png" alt="Giỏ hàng" />
                </a>
                <p className="cart-number">                     
                    {
                        `(${this.state.numberItems})`
                    }
                </p>
            </div>
        );
    }
}

export default Cart;