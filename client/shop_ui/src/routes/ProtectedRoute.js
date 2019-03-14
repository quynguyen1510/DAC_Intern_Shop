import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomePage from '../components/Homepage';
import Profile from '../components/users/Profie';
import ManageUser from '../components/users/ManageUser';
import CreateUser from '../components/users/CreateUser';
import DeleteUser from '../components/users/DeleteUser';
import { ADMIN_ROLE, USER_ROLE, SHOPPER_ROLE, GUEST_ROLE } from '../util/constant';
import { getAuthenticatedUser } from '../actions/UsersAction';
import { bindActionCreators } from 'redux';
import ManageProduct from '../components/products/ManageProduct';
import CreateProduct from '../components/products/CreateProduct';
import ProductInfor from '../components/products/ProductInfor';
import ProductsByCategory from '../components/products/ProductsByCategory';
import ManageCampaign from '../components/campaign/ManageCampaign';
import CreateCampaign from '../components/campaign/CreateCampaign';

class ProtectedRoutes extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token && !this.props.session.user.currentUser) {
            this.props.getAuthenticatedUser(token);
        }
    }


    getRoute = () => {
        const user = this.props.session.user.currentUser;
        const roleUser = user ? user.role_id : GUEST_ROLE;
        const isProtected = localStorage.getItem('token') != null;
        if (isProtected) {
            if (roleUser === ADMIN_ROLE) {
                return (
                    <Switch>
                        <Route path="/profile/users/:id" component={Profile} />
                        <Route path="/manage/users/:page_number" component={ManageUser} />
                        <Route path="/manage/products" component={ManageProduct} />
                        <Route path="/products/new" component={CreateProduct} />
                        <Route path="/products/:product_id" component={ProductInfor} />
                        <Route path="/users/new" component={CreateUser} />
                        <Route path="/delete/users/:id" component={DeleteUser} />
                        <Route path="/manage/campaign" component={ManageCampaign} />
                        <Route path="/campaign/new" component={CreateCampaign} />
                    </Switch>
                )
            }
            if (roleUser === SHOPPER_ROLE) {
                return (
                    <Switch>
                        <Route path="/profile/users/:id" component={Profile} />
                        <Route path="/manage/products" component={ManageProduct} />
                        <Route path="/products/new" component={CreateProduct} />
                        <Route path="/products/:product_id" component={ProductInfor}/>
                        <Route path="/products/infor" component={ProductInfor} />
                        <Route path="/manage/campaign" component={ManageCampaign} />
                        <Route path="/campaign/new" component={CreateCampaign} />
                    </Switch>
                )
            }
            if (roleUser === USER_ROLE) {
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
                {this.getRoute()}
               
            </Switch>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAuthenticatedUser
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        session: state
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes));
