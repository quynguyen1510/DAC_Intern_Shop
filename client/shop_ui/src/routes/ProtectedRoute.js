import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomePage from '../components/Homepage';
import Profile from '../components/users/Profie';
import ManageUser from '../components/users/ManageUser';
import CreateUser from '../components/users/CreateUser';
import { ADMIN_ROLE, USER_ROLE, SHOPPER_ROLE, GUEST_ROLE } from '../util/constant';
import { getAuthenticatedUser } from '../actions/UsersAction';
import { bindActionCreators } from 'redux';


class ProtectedRoutes extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token) {
         this.props.getAuthenticatedUser(token);
        }
    }


    getRoute = () => {
        const user = this.props.session.user.currentUser;
        const roleUser = user ? user.role_id : GUEST_ROLE;
        const isProtected = localStorage.getItem('token')
        if (isProtected) {
            if (roleUser === ADMIN_ROLE) {
                return (
                    <Switch>
                        <Route path="/manage/users/:page_number" component={ManageUser} />
                        <Route path="/users/new" component={CreateUser} />
                    </Switch>
                )
            }
            if (roleUser === SHOPPER_ROLE) {
                return (
                    <>
                        <Redirect to="/" />
                    </> 
                )
            }
            if (roleUser === USER_ROLE) {
                return (
                    <>
                        <Redirect to="/" />
                    </>
                )
            }
        }
        return <Redirect to="/" />

    }

    render() {

        return (
            <Switch>
                <Route path="/" exact component={() => <HomePage />} />
                <Route path="/profile/users/:id" component={Profile} />
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
