import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import AdInfo from './AdsInfo'
class Ad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ads">
        <div className="img-container">
          <i
            className={this.props.class(this.props.ad.name)}
            onClick={() => {
              this.props.addFav(this.props.ad);
            }}
          />
          <img
            className="ads-img"
            src={this.props.ad.img}
            alt=""
          />
        </div>
        <div className="ad-foot">
        
          <div className="ad-foot-left">
          <Link className="link" to={`./info/${this.props.ad.name}`}>
            <b className="ad-name">{this.props.ad.name}</b></Link>
            <p className="ad-city">{this.props.ad.city}</p>
          </div>
          <div className="ad-foot-right">
            <b className="ad-price">
              {this.props.ad.price} dt /<span> {this.props.ad.pu}</span>
            </b>
           
             {this.props.ad.dispo? <p className="ad-dispo enable">
            <i className="fa fa-check" /> disponible
            </p> :
             <p className="ad-dispo disable">
             <b>X</b> &nbsp;non disponible
             </p> }
          </div>
         
        </div>
       
      </div>
    );
  }
}

const state = ({ Fav }) => {
  let exist = (v)=>Fav.find(x=>x.name===v)

  return {
    class: (name) => {
     
      return exist(name)!==undefined ? "fa fa-heart red fav-icon " : "fa fa-heart fav-icon ";
    }
  };
};
const dispatch = dispatch => {
  return {
    addFav: ({name,img,pu,price,city}) => {
      dispatch({
        type: "ADD_FAV",
        fav:{name,img,pu,price,city}
      });
    }
  };
};
export default connect(
  state,
  dispatch
)(Ad);
