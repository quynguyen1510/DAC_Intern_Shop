import React, { Component } from 'react';
import { addNewProduct, updateProduct } from '../../api/product_api';
import { uploadImage } from '../../api/imgur_api';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Modal } from 'react-bootstrap';
var jwt_decode = require('jwt-decode');

class FormCreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value 
            product_name: this.props.currentProduct ? this.props.currentProduct.product_name : '',
            product_desc: this.props.currentProduct ? this.props.currentProduct.product_desc : '',
            price: this.props.currentProduct ? this.props.currentProduct.price : '',
            category_id: this.props.currentProduct ? this.props.currentProduct.category_id : 1,
            product_img: this.props.currentProduct ? this.props.currentProduct.product_img : '',

            isLoading: false,
            shouldShow: false
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

    uploadImage = (event) => {
        this.setState({ isLoading: true })
        const imgFile = event.target.files[0];
        uploadImage(imgFile).then(response => {
            const imageUrl = `https://i.imgur.com/${response.data.data.id}.png`;
            this.setState({ product_img: imageUrl, isLoading: false })
        }).catch(err => {
            console.log(err)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const product = {};
        const attributes = Object.keys(this.state);

        for(let index in attributes){
            const key = attributes[index];
            let value = this.state[`${attributes[index]}`];
            if(key === "isLoading" || key === "shouldShow"){
                continue;
            }

            if(key === "price" && Number(value) <= 0){
                alert("Invalid price. It must be greater than 0");
                return;
            }

            if (value === "" && key !== "product_img") {
                alert("You must type " + key);
                return;
            }

            product[`${key}`] = value;
        }
        const token = localStorage.getItem("token");
        if(this.props.currentProduct){
           if(!this.checkObjectEqual( product, this.props.currentProduct)){
               updateProduct(token, product,this.props.currentProduct.id).then(res => {
                   alert(res.data.message);
                   this.backToPreviousPage();
               }).catch(err => {
                    alert("Can not update " + product.product_name);
                    return;
               })
               //this.backToPreviousPage();
           }
           else{
              alert("You must update something new");
           }
        }
        else{
            product[`user_id`] = jwt_decode(token).user_id
            addNewProduct(token, product).then(res => {
                alert(res.data.message);
                this.backToPreviousPage();
            }).catch(err => {
                alert("Can not create " + product.product_name);
                return;
            })
        }
    }

    checkObjectEqual(a, b) {
        const aProps = Object.getOwnPropertyNames(a);
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (String(a[propName]) !== String(b[propName])) {
                return false;
            }
        }
        return true;
    }

    backToPreviousPage = ()=> {
        this.props.history.push({
            pathname: "/manage/products",
        });
    }

    render() {
        const { currentProduct, categories } = this.props;

        return (
            <div>
                <form encType="multipart/form-data" onSubmit={this.handleSubmit} >
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Name</label>
                            <input type="text"
                                name="product_name"
                                value={this.state.product_name}
                                className="form-control"
                                onChange={this.handleProductNameChange}/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Description</label>
                            <input onChange={this.handleProductDescChange}
                                type="text"
                                name="product_desc"
                                value={this.state.product_desc}
                                className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Product Price</label>
                            <input onChange={this.handlePriceChange}
                                type="number"
                                className="form-control"
                                name="price"
                                value={this.state.price} />
                        </div>
                    </div>

                    <div className="form-group row justify-content-center">
                        <div className="col-sm-6">
                            <label className="col-form-label">Category Name</label>
                            <select className="form-control"
                                onChange={this.handleCategoryChange}
                                value={this.state.category_id}>
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
                            {
                                this.state.product_img ? <img className="avatar-preview" src={this.state.product_img} alt="preview" /> :
                                    null
                            }
                            {
                                this.state.isLoading && (
                                    <ReactLoading color={"black"} height={"1%"} width={"5%"} />
                                )
                            }
                        </div>
                    </div>

                </form>
                <div className="submit-profile justify-content-center">
                    <button onClick=
                        {this.handleSubmit}
                          className="btn btn-primary update-profile-button">
                        {currentProduct ? "Update" : "Create"}
                    </button>
                    <button className="btn btn-link update-profile-button">Back to list</button>
                </div>
                {
                    this.state.message && (
                        <Modal show={this.state.shouldShow} >
                            <Modal.Header >
                                <Modal.Title>{currentProduct ? "Update Product" : "Create Product"}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{this.state.message}</Modal.Body>
                            <Modal.Footer>
                                <Link className="btn btn-link back" to="/manage/products">OK</Link>
                            </Modal.Footer>
                        </Modal>
                    )
                }

            </div>
        );
    }
}

export default withRouter(FormCreateProduct);
