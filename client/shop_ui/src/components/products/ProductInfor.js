import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Navbar from '../commons/header/Navbar';
import { getCategories } from '../../api/product_api';

class ProductInfor extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentProduct: this.props.location.state.product,
            categories: []
        }
    }
    componentDidMount(){
        getCategories().then(res => {
            this.setState({categories: [...res.data]});
        }).catch(err =>{
            console.log(err);
        })
    }
    render() {
        const { currentProduct, categories} = this.state;
        return (
            <div>
                <Navbar />
                <div className="profile">
                    <h2>{currentProduct ? currentProduct.product_name: ""}</h2>
                    <div className="avatar">
                        <img className="avatar-default" src={currentProduct ? currentProduct.product_img : ""} alt="" />
                    </div>
                    <div className="inputForm">
                        <ProductForm currentProduct = {this.state.currentProduct} categories={categories}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfor;