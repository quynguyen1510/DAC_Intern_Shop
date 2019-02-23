import React, { Component } from 'react';

import "../style/style.css";
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Campaign from './commons/body/Campaign';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { login, signup } from '../actions/SessionAction';
import { getAuthenticatedUser } from '../actions/UsersAction';


class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header {...this.props} />
        <Campaign />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    signup,
    getAuthenticatedUser
  }, dispatch)
}

const HomePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
export default HomePageContainer;
