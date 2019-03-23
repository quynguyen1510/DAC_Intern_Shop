import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { deleteProduct } from '../../api/product_api';

class ProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldShow: false,
            selectedId: null
        }
    }

    handleClose = () => {
        this.setState({ shouldShow: false });
    }

    handleShow = (id) => {
        this.setState({selectedId: id});
        this.setState({ shouldShow: true });
    }

    handleDelete = () =>{
        this.props.onRemoveProduct(this.state.selectedId);
        // update in server
        const token = localStorage.getItem("token");
        deleteProduct(this.state.selectedId,token);
        this.handleClose();
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Category Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listProducts.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td className="pretty-text">{product.product_name}</td>
                                    <td><img className="product-row-img" alt={product.product_name} 
                                            src={product.product_img ? product.product_img : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"} />
                                    </td>
                                    <td className="pretty-text">{product.product_desc}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category_name}</td>
                                    <td className="product-active">
                                        {product.active ?   
                                        <img className="banner-campaign" src="https://i.imgur.com/JuPGxJR.png" alt="active"/> :
                                        <img className="banner-campaign" src="https://imgur.com/qEK8sFP.png" alt="non active"/>}
                                    </td>
                                    <td>
                                        <Link to={{pathname: `/products/${product.id}`, state: {product: product} }} className="btn btn-primary btnEditUser">Edit</Link>
                                        {
                                            product.active && 
                                            <Button  onClick={() => {this.handleShow(product.id)}} 
                                                    className="btn btn-danger btnDeleteUser">
                                            Delete</Button>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <Modal show={this.state.shouldShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

export default ProductTable;