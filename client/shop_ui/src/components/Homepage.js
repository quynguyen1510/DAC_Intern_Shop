import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import "../style/style.css";


class HomePage extends Component {
  render() {
    return (
        <div>
           <Header/>
           <Footer/>
        </div>
    );
  }
}

export default HomePage;
