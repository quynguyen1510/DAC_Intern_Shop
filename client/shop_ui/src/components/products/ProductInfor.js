import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Navbar from '../commons/header/Navbar';
import { getProductById, getCategories } from '../../api/product_api';

class ProductInfor extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentProduct: null,
            categories: []
        }
    }
    componentDidMount(){
        const productId = this.props.match.params.product_id;
        getProductById(productId).then(response => {
            this.setState({currentProduct: response.data});
        }).catch(err => {
            console.log(err);
        });

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