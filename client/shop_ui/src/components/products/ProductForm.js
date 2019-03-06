import React, { Component } from 'react';
import { addNewProduct } from '../../api/product_api';

class FormCreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value 
            product_name: '',
            product_desc: '',
            price: '',
            category_id: '',
            product_img: '',
            user_id: 1
        }
    }
    handleProductNameChange = event => {
        this.setState({ product_name: event.target.value });
    }

    handleProductDescChange = event => {
        this.setState({ product_desc: event.target.value });
    }

    handlePriceChange = event => {
        this.setState({ price: event.target.value });
    }

    handleCategoryChange = event => {
        this.setState({ category_id: event.target.value })
    }
    handleSubmit = () => {
        const { product_name, product_desc,price , category_id, user_id, product_img } = this.state;
        const token = localStorage.getItem("token");
        const product = {
            "product_name" : `${product_name}`,
            "product_desc" : `${product_desc}`,
            "price" : `${price}`,
            "product_img" : `${product_img}`,
            "category_id": `${category_id}`,
            "user_id": `${user_id}`
        }
        addNewProduct(token,product)
    }
    render() {
        return (
            <div>
                <form encType="multipart/form-data">
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Name</label>
                            <input type="text"
                                name="product_name"
                                className="form-control"
                                onChange={this.handleProductNameChange}
                            />
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Description</label>
                            <input onChange={this.handleProductDescChange} type="text" name="product_desc" className="form-control" />
                            <div className="invalid-feedback"></div>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Price</label>
                            <input onChange={this.handlePriceChange} type="number" className="form-control" name="price" />
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Category Name</label>
                            <select className="form-control" onChange={this.handleCategoryChange}>
                                <option value="1">Điện tử</option>
                                <option value="2">Đồ mẹ & bé</option>
                                <option value="3">Du lịch</option>
                            </select>
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Image</label>
                            <div className="col-sm-12">
                                <input type="file" className="custom-file-input" id="uploadImage" />
                                <label htmlFor="uploadImage" className="custom-file-label">Choose File</label>
                            </div>
                        </div>
                    </div>

                </form>
                <div className="submit-profile justify-content-center">
                    <button onClick={this.handleSubmit} className="btn btn-primary update-profile-button">Create</button>
                </div>
            </div>
        );
    }
}

export default FormCreateProduct;
