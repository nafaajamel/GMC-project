import React, { Component } from 'react';
import Category from './Componenets/Category/Category'
import AdsList from './Componenets/Ads/Ads'

// import css file

import './App.css';
// import componenet 
import Header from './Componenets/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
   <Header />
  <AdsList />
  {/* <Category /> */}
      </div>
    );
  }
}

export default App;
