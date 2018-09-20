import React, { Component } from 'react';
import Category from './Componenets/Category/Category'
// import css file

import './App.css';
// import componenet 
import Header from './Componenets/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
   <Header />
  <Category />
      </div>
    );
  }
}

export default App;
