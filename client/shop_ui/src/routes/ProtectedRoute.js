import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import HomePage from '../components/Homepage';
import Profile from '../components/users/Profie';
import ManageUser from '../components/users/ManageUser';
import CreateUser from '../components/users/CreateUser';
import { ADMIN_ROLE, USER_ROLE, SHOPPER_ROLE } from '../util/constant';
import ManageProduct from '../components/products/ManageProduct';
import CreateProduct from '../components/products/CreateProduct';
import ProductInfor from '../components/products/ProductInfor';
import ProductsByCategory from '../components/products/ProductsByCategory';
import ManageCampaign from '../components/campaign/ManageCampaign';
import CreateCampaign from '../components/campaign/CreateCampaign';
import CampaignInfor from '../components/campaign/CampaignInfor';
import ProductDetail from '../components/products/ProductDetail';
var jwt_decode = require('jwt-decode');

class ProtectedRoutes extends Component {
    
    getRoute = () => {
        const isProtected = localStorage.getItem('token') != null;
        if (isProtected) {
            const {role_id} = jwt_decode(localStorage.getItem("token"));
            if (role_id === ADMIN_ROLE) {
                return (
                    <Switch>
                        <Route path="/profile/users/:id" component={Profile} />
                        <Route path="/manage/users/" component={ManageUser} />
                        <Route path="/manage/products" component={ManageProduct} />
                        <Route path="/products/new" component={CreateProduct} />
                        <Route path="/products/:product_id" component={ProductInfor} />
                        <Route path="/users/new" component={CreateUser} />
                        <Route path="/manage/campaign" component={ManageCampaign} />
                        <Route path="/campaigns/new" component={CreateCampaign} />
                        <Route path="/campaigns/:id" component={CampaignInfor} />
                    </Switch>
                )
            }
            if (role_id === SHOPPER_ROLE) {
                return (
                    <Switch>
                        <Route path="/profile/users/:id" component={Profile} />
                        <Route path="/manage/products" component={ManageProduct} />
                        <Route path="/products/new" component={CreateProduct} />
                        <Route path="/products/:product_id" component={ProductInfor}/>
                        <Route path="/products/infor" component={ProductInfor} />
                        <Route path="/manage/campaign" component={ManageCampaign} />
                        <Route path="/campaigns/new" component={CreateCampaign} />
                        <Route path="/campaigns/:id" component={CampaignInfor} />
                    </Switch>
                )
            }
            if (role_id === USER_ROLE) {
                return (
                    <Switch>
                        <Route path="/profile/users/:id" component={Profile} />
                        <Redirect to="/" />
                    </Switch>
                )
            }
        }
        return <Redirect to="/" />
    }

    render() {

        return (
            <Switch>
                <Route path="/" exact component={() => <HomePage />} />
                <Route path="/categories/:id" component={ProductsByCategory}/>
                <Route path="/products/:id" component={ProductDetail} />
                {this.getRoute()}
            </Switch>

        )
    }
}



export default withRouter(ProtectedRoutes);
