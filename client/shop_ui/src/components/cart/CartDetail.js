import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from '../commons/header/Header';


class CartDetail extends Component {
    constructor(props) {
        super(props);
        const arrItems = JSON.parse(localStorage.getItem("cart"));
        this.state = {
            shouldShow: false,
            selectedId: null,
            items: arrItems ? arrItems : [],
            totalPrice: 0
        }
    }

    componentDidMount(){
        this.updateTotalPrice();
    }

    handleClose = () => {
        this.setState({ shouldShow: false });
    }

    handleShow = (id) => {
        this.setState({ selectedId: id });
        this.setState({ shouldShow: true });
    }

    handleChangeQuantity = (event) => {
        const index = (event.target.getAttribute("pid"));
        const value = event.target.value;
        const items = this.state.items;
        const oldQuantity =  items[index].quantity;
        items[index].quantity = Number(value);
        const newPrice = this.state.totalPrice + ( (Number(value) - Number(oldQuantity)) * items[index].product.price);
        this.setState({ items: [...items], totalPrice: newPrice });
        localStorage.setItem("cart", JSON.stringify([...items]))
    }

    handleDelete = () => {
        const { items, totalPrice } = this.state;
        const removeItems = items[this.state.selectedId];
        const newPrice = totalPrice - Number(removeItems.product.price) * Number(removeItems.quantity);
        const newItems = items.filter((ele, ind) =>
            ind !== this.state.selectedId
        )
        this.setState({ items: newItems, totalPrice: newPrice });
        localStorage.setItem("cart", JSON.stringify([...newItems]));
        this.handleClose();
    }

    updateTotalPrice = () => {
        const { items } = this.state;
        let total = 0;
        items.length > 0 && items.map((item, index) => 
            total += Number(item.product.price) * Number(item.quantity)
        )
        this.setState({totalPrice: total})
    }

    render() {
        const { items, totalPrice } = this.state;
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        return (
            <div>
                <Header />
                <div className="page">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Product Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.length > 0 && items.map((item, index) =>
                                    (
                                        <tr key={index}>
                                            <td className="pretty-text">{item.product.product_name}</td>
                                            <td><img className="product-row-img" alt={item.product.product_name}
                                                src={item.product.product_img ? item.product.product_img : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"} />
                                            </td>
                                            <td>{item.product.price}</td>
                                            <td>
                                                <input type="number"
                                                    value={item.quantity}
                                                    onChange={this.handleChangeQuantity}
                                                    min={1}
                                                    pid={index} />
                                            </td>
                                            <td>{Number(item.product.price) * Number(item.quantity)}</td>
                                            <td>
                                                <Button onClick={() => this.handleShow(index)} className="btn btn-danger">Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                )}


                        </tbody>
                    </table>


                    <div className="button-cart">
                        <div className="total-price">
                            Total Price: <p className="total-price">  {formatter.format(totalPrice)}</p>
                        </div>

                        <div>
                            <Link to="/" className="btn btn-link">Back to store</Link>
                            <button className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                    <div className="clear"></div>

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
            </div>
        )
    }
}

export default withRouter(CartDetail);