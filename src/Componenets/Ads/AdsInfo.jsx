import React, { Component } from "react";
import Carousel from "./Carousel";
import axios from 'axios'

class AdInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ad:{ owner:{fullNAme:'jamel'},img:[]}


    };
  }

  getData = ()=>{
    axios.get('/ad/'+this.props.id).then(res=>{
      this.setState({
        ad: Object.assign({},res.data)
      })
      console.log('zz',res.data.owner.fullName)
    })
  }
  
componentDidMount(){
  this.getData()
}

  
  render() {
    return (
      <div className="ad-info">
        <div className="ad-title">
          <div>
            <b>{this.state.ad.title}</b>
            <p className="ad-city">{this.state.ad.city}</p>
          </div>
          <div className="ad-title-right">
            <p>{this.state.ad.category} / {this.state.ad.city}</p>
          </div>
        </div>
        <div className="add-main">
          <div className="ad-data">
            <Carousel galery={this.state.ad.img} />
          </div>
          <div className="ad-owner">
            <div className="info-card-user">
              <i className="fa fa-user-circle user-img"> </i>
              <b>{this.state.ad.owner.fullName}</b>
              <button className="btn-phone">
                <i className="fa fa-phone" />
                <b>{this.state.ad.owner.phone}</b>{" "}
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
                  {this.state.ad.price}/ <span>{this.state.ad.unity}</span>
                </p>
              </div>
              <div className="info-row">
                <b>status :</b> {this.state.ad.isAvaible? <p className="enable"> disponible </p>: <p className="disable"> non disponible </p>}
              </div>

              <div className="info-row">
                <b>ajouter le :</b>
                <p> {this.state.ad.date}</p>
              </div>
              <div className="info-row">
                <b>description:</b>
                <p>
                  {this.state.ad.description}
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
