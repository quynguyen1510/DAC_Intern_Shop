import React, { Component } from 'react';
import "../style/style.css";
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Body from './commons/body/Body';


class HomePage extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Body />
        <Footer />
      </div>
    );
  }
}




export default HomePage;
