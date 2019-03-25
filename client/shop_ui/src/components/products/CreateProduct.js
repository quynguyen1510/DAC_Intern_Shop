import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Header from '../commons/header/Header';
import { getCategories } from '../../api/product_api';

class FormCreateProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        return (
            <div className="detail">
              <Header /> 
            <h2 className="text-center"> Create New Product</h2>
            <div className="inputForm">
                <ProductForm categories={this.state.categories}/>
            </div>
        </div>
        );
    }
}

export default FormCreateProduct;