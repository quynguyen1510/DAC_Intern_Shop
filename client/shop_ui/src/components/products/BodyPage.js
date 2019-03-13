import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { getListProduct } from '../../api/product_api';

class BodyPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList: [],
            page: 1,
            shouldGetMore: true
        }
    }

    loadProduct = (page, productList) => {
        getListProduct(page).then(res => {
            if(res.data.length > 0){
              const list = res.data.filter(product => product.active === true)
              this.setState({ productList: [...productList,...list]});
            }
            else{
              this.setState({shouldGetMore: false});
            }
         }).catch(err => {
             console.log(err)
         });
    }

    componentDidMount(){
        const {page, productList, shouldGetMore} = this.state;
        if(productList.length === 0 && shouldGetMore){
           this.loadProduct(page, productList);
        }
    }
    
    handleLoadMoreProduct = () => {
        const {page, productList} = this.state;
        if(this.state.shouldGetMore){
          this.setState({page: this.state.page + 1});
          this.loadProduct(page + 1, productList);
        }
    }

    render() {
        const {productList, shouldGetMore} = this.state;
        return (
            <div className="container col-md-10 col-lg-10" id="body-page">
                <div className="row" id="item-row">
                   {
                       productList.map((product, index) => {
                           return <ProductItem key={index} product={product}/>
                       })
                   }
                </div>
              {  shouldGetMore &&   <button onClick={this.handleLoadMoreProduct} className="btn btn-dark get-more-product">Tải thêm</button>}
            </div>
        );
    }
}

export default BodyPage;