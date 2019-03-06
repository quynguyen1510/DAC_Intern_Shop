import React, { Component } from 'react';
import ProductTable from './ProductTable';
import Navbar from '../commons/header/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios'

class ManageProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        axios({
            url: `http://localhost:3000/products/`,
            method: "GET"
        }).then(response => {
            this.setState({
                products: response.data
            })
        }).catch(error => console.log(error))
    }
    render() {
        console.log("List products:",this.state.products)
        return (
            <div>
                <Navbar />
                <div className="page">
                    <div>
                        <Link to="/products/new" className="btn btn-default" id="btnCreateUser">Create Product</Link>
                    </div>
                    <ProductTable listProducts={this.state.products}/>
                    <nav aria-label="...">
                        <ul className="pagination pagination-lg">
                            <li className="page-item"><a className="page-link" href="#none" >1</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default ManageProduct;