import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

class Ad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ads">
        <div className="img-container">
          <i
            className={this.props.class(this.props.ad.title)}
            onClick={() => {
              this.props.addFav(this.props.ad);
            }}
          />
          <img
            className="ads-img"
            src={'http://localhost:5000/upload/'+ this.props.ad.img[0] }
            alt={this.props.ad.title}
          />
        </div>
        <div className="ad-foot">
        
          <div className="ad-foot-left">
          <Link className="link" to={`./info/${this.props.ad._id}`}>
            <b className="ad-name">{this.props.ad.title.slice(0,15)+'...'}</b></Link>
            <p className="ad-city">{this.props.ad.city}</p>
          </div>
          <div className="ad-foot-right">
            <b className="ad-price">
              {this.props.ad.price} dt /<span> {this.props.ad.unity}</span>
            </b>
           
             {this.props.ad.isAvaible? <p className="ad-dispo enable">
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
  let exist = (v)=>Fav.find(x=>x.title===v)

  return {
    class: (title) => {
     
      return exist(title)!==undefined ? "fa fa-heart red fav-icon " : "fa fa-heart fav-icon ";
    }
  };
};
const dispatch = dispatch => {
  return {
    addFav: ({isAvaible,title,img,unity,price,city}) => {
      dispatch({
        type: "ADD_FAV",
        fav:{isAvaible,title,img,unity,price,city}
      });
    }
  };
};
export default connect(
  state,
  dispatch
)(Ad);
