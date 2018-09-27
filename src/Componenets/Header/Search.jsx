import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCity } from "../Constants/data";
import UserMenu from "./UserMenu";

import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      search: "",
      autocomplet: [],
      
    };
  }

 

  autocomplet = e => {

    if ((e.id === "search")) {

      this.setState({ search: e.value });
      
    } else {
      this.setState({
          city:e.value,
        autocomplet: getCity().filter(x => {
          return (
            e.value.trim() &&
            x.toLowerCase().includes(e.value.toLowerCase().trim())
          );
        })
      });
    
    }


  };


  search = ()=>{

    

    let search = this.state.search.length>0 ?this.state.search :'all'

    let city = this.state.city.length>0? this.state.city: 'all'

 let category = this.props.category.filter(x=>x.selected).map(x=>x.name)

        axios.get("/search/" +  city+ "/" + search+'/'+category).then(res=>{
            this.props.setAds(res.data)
           
        }) ; 
       
  }

  selectCity = city => {
    this.props.setCity(city)
    this.setState({
      city
    });
   
    this.setState({
      autocomplet: []
    });
    
  };

  render() {
    return (
      <div className="navbar">
        <Link to="/home">
          <div className="brand-nav">Ekrili</div>
        </Link>
        <div className="filter-nav">
          <div className="autocomplet">
            <input
              value={this.state.city}
              type="text"
              className="ou"
              id="city"
              onChange={e => this.autocomplet(e.target)}
              placeholder="Ou ?"
            />
            <ul className="city-menu">
              {this.state.autocomplet.map(x => {
                return (
                  <li className="city-item" onClick={() => this.selectCity(x)}>
                    {x}
                  </li>
                );
              })}
            </ul>
          </div>
          <input
            className="input-search"
            value={this.state.search}
            id="search"
            onChange={e => this.autocomplet(e.target)}
            type="text"
            placeholder="Qu'est ce que vous  recherches"
          />
          <button className="btn-search"
          onClick={()=> this.search()}
          >
            {" "}
            <i className="fa fa-search" />{" "}
          </button>
        </div>
        <div className="dispose-nav">
          <Link to="/dashboard/ads">
            <button className="dispose-btn">déposer annonce</button>
          </Link>
          <div style={{ position: "relative" }}>
            <i className="fa fa-user usr-menu-icon d-d-u" />
            <UserMenu />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchByName: state.searchByName,
    searchByCity: state.searchByCity,
    category:state.category
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCity: city => {
      dispatch({
        type: "SET_ADSCITY",
        city
      });
    },
   setAds:(data)=>{
       dispatch({
           type:"SET_ADS_LIST",
           adList:data
       })
   }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
