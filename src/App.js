import React, { Component } from 'react';
import Category from './Componenets/Category/Category'
import Home from './Componenets/home/home'
import Footer from './Componenets/Footer/Footer'
import AdInfo from './Componenets/ads/AdsInfo'
// import css file
import './Componenets/ads/css/ads.css'
import './App.css';
import './Componenets/Footer/footer.css'
import './Componenets/ads/css/info.css'
// import componenet 
import Header from './Componenets/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      <AdInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
