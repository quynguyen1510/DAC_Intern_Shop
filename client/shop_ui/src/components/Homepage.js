import React, { Component } from 'react';

import "../style/style.css";
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router';
import {login}  from '../actions/SessionAction';


class HomePage extends Component {
  render() {
    return (
        <div>
           <Header {...this.props}/>
           <Footer />
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    session: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login}, dispatch)
}
const HomePageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
export default HomePageContainer;
