import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// import css file
import "./Componenets/ads/css/ads.css";
import "./App.css";
import "./Componenets/Footer/footer.css";
import "./Componenets/ads/css/info.css";
import "./Componenets/modal/modal.css";
import "./Componenets/Form/form.css";
import './Componenets/Dashboard/dash.css'
// import componenet
import Category from "./Componenets/Category/Category";
import Home from "./Componenets/home/home";
import Footer from "./Componenets/Footer/Footer";
import AdInfo from "./Componenets/ads/AdsInfo";
import Favoris from "./Componenets/Favoris/Favoris";
import Header from "./Componenets/Header/Header";
import Dashboard from './Componenets/Dashboard/Dashboard'
import AdArray from './Componenets/Dashboard/AdArray'
import UserArray from './Componenets/Dashboard/UserArray'

const Client = props => {
  return (
    <div>
      <Header />
      {props.content}
      <Footer />
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <div className="App">


         <Route exact path='/dashboard' render={()=><Dashboard />}  />
         <Route exact path="/dashboard/ads"  render={()=><Dashboard><AdArray /></Dashboard >} />
          <Route exact path="/dashboard/users"  render={()=><Dashboard><UserArray /></Dashboard > } />
          
        <Route
          exact
          path="/"
          render={() => <Client content={<Category />} />}
        />

        <Route
          exact
          path="/home"
          render={() => <Client content={<Home />} />}
        />
        <Route
          path="/favoris"
          render={() => <Client content={<Favoris />} />}
        />
        <Route
          path="/info/:ad"
          render={props => (
            <Client content={<AdInfo name={props.match.params.ad} />} />
          )}
        />
      </div>
    );
  }
}

export default App;
