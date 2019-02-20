import React, { Component } from 'react';

import "../style/style.css";
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';


class HomePage extends Component {
  render() {
    return (
        <div>
           <Header/>
           <Footer />
        </div>
    );
  }
}

export default HomePage;
