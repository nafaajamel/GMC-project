import React, { Component } from "react";

// import css file
import "./Componenets/ads/css/ads.css";
import "./App.css";
import "./Componenets/Footer/footer.css";
import "./Componenets/ads/css/info.css";
import "./Componenets/modal/modal.css";
import "./Componenets/Form/form.css";
import './Componenets/Dashboard/dash.css'
// import componenet
import Router from './Router/Router'
class App extends Component {
  render() {
    return (
      <div className="App">

<Router />
     
      </div>
    );
  }
}

export default App;
