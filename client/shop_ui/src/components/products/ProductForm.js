import React, { Component } from 'react';
import { addNewProduct, updateProduct } from '../../api/product_api';
import { uploadImage } from '../../api/imgur_api';
import {withRouter,Redirect} from 'react-router';
var jwt_decode = require('jwt-decode');
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

            // error
            nameError: '',
            descError: '',
            priceError: ''
        }
    }

    validateNameProduct = () =>{
        this.setState({nameError: (this.state.product_name.length === 0 ? "You should input something cool" :"") });
    }

    validateDescProduct = () =>{
        this.setState({descError: (this.state.product_desc.length === 0 ? "You should input something cool" :"") })
    }

    validatePrice = () =>{
        this.setState({priceError: (Number(this.state.price) === 0 ? "Product description must be greater than 0" :"") })
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

    uploadImage =(event) =>{
        const imgFile = event.target.files[0];
        uploadImage(imgFile).then(response => {
            const imageUrl = `https://i.imgur.com/${response.data.data.id}.png`;
            this.setState({product_img: imageUrl})
        }).catch(err => {
            console.log(err)
        })
    }

    handleSubmit = () => {
        const { product_name, product_desc,price , category_id, product_img } = this.state;
        const shouldSendRequest = this.state.product_name.length > 0 || this.state.product_desc > 0 || this.state.price.length > 0;
        if(!shouldSendRequest){
            alert("You must change something");
            return;
        }
        const token = localStorage.getItem("token");
        const payload = jwt_decode(token);
        const product = {
            "product_name" : `${product_name}`,
            "product_desc" : `${product_desc}`,
            "price" : `${price}`,
            "product_img" : `${product_img}`,
            "category_id": `${category_id ? category_id : 1}`,
            "user_id": `${payload.user_id}`
        }
        if(this.props.currentProduct === undefined){
            addNewProduct(token,product);
            this.props.history.push('/manage/products')
        }else {
            updateProduct(token,product,this.props.currentProduct.id);
            this.props.history.push('/manage/products')
        }
    }

    render() {
        const {currentProduct, categories} = this.props;
    
        return (
            <div>
                <form encType="multipart/form-data">
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Name</label>
                            <input type="text"
                                name="product_name"
                                defaultValue={currentProduct ? currentProduct.product_name: ""}
                                className="form-control"
                                onChange={this.handleProductNameChange}
                                onBlur={this.validateNameProduct}
                            />
                        </div>
                        <div className="invalid-feedback">{this.state.nameError}</div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Description</label>
                            <input onChange={this.handleProductDescChange}
                                    type="text"
                                    name="product_desc" 
                                    defaultValue={currentProduct ? currentProduct.product_desc: ""}
                                    className="form-control"
                                    onBlur={this.validateDescProduct} />
                            <div className="invalid-feedback">{this.state.descError}</div>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Price</label>
                            <input onChange={this.handlePriceChange} 
                                    type="number" 
                                    className="form-control" 
                                    name="price"
                                    onBlur={this.validatePrice}
                                    defaultValue={currentProduct ? currentProduct.price: ""} />
                        </div>
                        <div className="invalid-feedback">{this.state.priceError}</div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Category Name</label>
                            <select className="form-control" 
                                    onChange={this.handleCategoryChange}
                                    defaultValue={currentProduct ? currentProduct.category_name: ""}>
                                {
                                    categories.length > 0 && (
                                        categories.map((cate, index) => {
                                            return (<option key={index} value={cate.id}>{cate.catname}</option>)
                                        })
                                    )
                                }
                            </select>
                        </div>
                        <div className="invalid-feedback"></div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Image</label>
                            <div className="col-sm-12">
                                <input type="file" 
                                        onChange={this.uploadImage}
                                        className="custom-file-input" 
                                        id="uploadImage" />
                                {
                                    this.state.product_img ? <label htmlFor="uploadImage" className="custom-file-label">{this.state.product_img}</label> :
                                    <label htmlFor="uploadImage" className="custom-file-label">Choose File</label>
                                }
                            </div>
                        </div>
                    </div>

                </form>
                <div className="submit-profile justify-content-center">
                    <button onClick=
                        {this.handleSubmit} 
                        className="btn btn-primary update-profile-button">
                        {currentProduct ? "Update" : "Create"}</button>
                </div>
            </div>
        );
    }
}

export default withRouter(FormCreateProduct);
