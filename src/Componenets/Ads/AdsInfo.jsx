import React, { Component } from "react";
import Carousel from "./Carousel";
class AdInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ad-info">
        <div className="ad-title">
          <div>
            <b>motor 103 </b>
            <p className="ad-city">tataouine</p>
          </div>
          <div className="ad-title-right">
            <p>véhicule / tataouine</p>
          </div>
        </div>
        <div className="add-main">
          <div className="ad-data">
            <Carousel />
          </div>
          <div className="ad-owner">
            <div className="info-card-user">
              <i className="fa fa-user-circle user-img"> </i>
              <b>jamel nafaa</b>
              <button className="btn-phone">
                <i className="fa fa-phone" />
                <b>96 152 475 </b>{" "}
              </button>
              <button className="btn-msg">
                <i className="fa fa-paper-plane" />
                <b>contacter</b>{" "}
              </button>
            </div>
            <div className="info-card">
              <div className="info-row">
                <b>Prix :</b>{" "}
                <p className="price">
                  220 / <span>mois</span>
                </p>
              </div>
              <div className="info-row">
                <b>status :</b> <p className="enable">disponible</p>
              </div>

              <div className="info-row">
                <b>ajouter le :</b>
                <p> 17 / 05 / 2016</p>
              </div>
              <div className="info-row">
                <b>description:</b>
                <p>
                  {" "}
                  motor jdid ydfdsf ksdlmdkfl mdskflmdkflms dkflmdkf  klkflds{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdInfo;
