import React from 'react';
import Category from "../Componenets/Category/Category";
import Home from "../Componenets/home/home";
import Footer from "../Componenets/Footer/Footer";
import AdInfo from "../Componenets/ads/AdsInfo";
import Favoris from "../Componenets/Favoris/Favoris";
import Header from "../Componenets/Header/Header";
import Dashboard from '../Componenets/Dashboard/Dashboard'
import AdArray from '../Componenets/Dashboard/AdArray'
import UserArray from '../Componenets/Dashboard/UserArray'
import { Route} from "react-router-dom";

const Client = props => {
  return (
    <div>
      <Header />
      {props.content}
      <Footer />
    </div>
  );
};
const Router = () => {
    return ( 
        <div>
        <Route exact path='/dashboard' render={()=><Dashboard />}  />
        <Route exact path="/dashboard/ads"  render={()=><Dashboard><AdArray /></Dashboard >} />
         <Route exact path="/dashboard/users"  render={()=><Dashboard><UserArray /></Dashboard > } />
         
       <Route
         exact
         path="/"
         render={() => <Client content={<Category />} />}
       />

       <Route
        
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
           <Client content={<AdInfo id={props.match.params.ad} />} />
         )}
       />
       </div>
     );
}
 
export default Router;