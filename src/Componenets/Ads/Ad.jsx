import React, { Component } from "react";
import { connect } from "react-redux";

class Ad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ads">
        <div className="img-container">
          <i
            className={this.props.class(this.props.product)}
            onClick={() => {
              this.props.addFav(this.props.product);
            }}
          />
          <img
            className="ads-img"
            src="https://cdn-images.schibsted.com/rocket-pro/progressive/52/5202e4ac-3422-4c52-9058-f5925aaf56cb"
            alt=""
          />
        </div>
        <div className="ad-foot">
          <div className="ad-foot-left">
            <b className="ad-name">motor 103 ynik</b>
            <p className="ad-city">tatouine</p>
          </div>
          <div className="ad-foot-right">
            <b className="ad-price">
              200 dt /<span> mois</span>
            </b>
            <p className="ad-dispo enable">
              <i className="fa fa-check" /> disponible{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const state = ({ Fav }) => {
  return {
    class: id => {
      return Fav.includes(id) ? "fa fa-heart red fav-icon " : "fa fa-heart fav-icon ";
    }
  };
};
const dispatch = dispatch => {
  return {
    addFav: fav => {
      dispatch({
        type: "ADD_FAV",
        fav
      });
    }
  };
};
export default connect(
  state,
  dispatch
)(Ad);
