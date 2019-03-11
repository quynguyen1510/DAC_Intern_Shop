import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductTable extends Component {
    render() {
        return (
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
                                <td>{product.product_name}</td>
                                <td><img className="product-row-img" alt={product.product_name} src={product.product_img} /></td>
                                <td>{product.product_desc}</td>
                                <td>{product.price}</td>
                                <td>{product.category_name}</td>
                                <td>{product.active ? "Active" : "Non active"}</td>
                                <td>
                                    <Link to={`/products/${product.id}`} className="btn btn-primary btnEditUser">Edit</Link>
                                    <Link to={`none`} className="btn btn-danger btnDeleteUser">Delete</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;