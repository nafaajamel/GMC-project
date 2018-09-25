import React, { Component } from "react";
import Ad from "./Ad";
import { connect } from "react-redux";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAds: []
    };
  }
list = [
    {name:'motor', city:'tataouine', price:'150',pu:'mois',dispo:true ,img:'http://www.moto-journal.fr/wp-content/uploads/2018/09/template-facebook-21-672x440.jpg'},
    {name:'motor2', city:'dfldf', price:'10',pu:'an',dispo:false,img:'https://img1.leboncoin.fr/ad-image/5dc20b718203f8afdce515a3f6bdead2165decb0.jpg'},
    {name:'motor3', city:'jdfd', price:'1560',pu:'mois',dispo:false ,img:'https://www.moto-plaisir.fr/487-tm_thickbox_default/f750gs-location-moto-bmw-.jpg'},
    {name:'motor4', city:'tataone', price:'350',pu:'mois',dispo:true ,img: 'http://www.moto-net.com/sites/default/files/sbk-mondial-moto_s.jpg'}
    
]

componentDidMount() {
    this.setState({
        listAds:this.list
    })
}

  render() {
    return (
      <div className="home">
        <div className="home-top">
          <h4 className="home-title">
           <b style={{color:'rgba(0,0,0,0.8)'}}>{this.state.listAds.length}</b> annonces de location de :{" "}
            <span>
              {this.props.category.length > 0
                ? this.props.category.map((x, i) => {
                    return i > 0 ? " | " + x.name : x.name;
                  })
                : "tous les categories"}
            </span>{" "}
            à : <span>{this.props.searchByCity}</span>{" "}
          </h4>
          <div className="sort">
            <b>Trier par :</b>
            <select className="sort-list">
              <option className="sort-item">les plus récente</option>
              <option className="sort-item">Prix plus élevé</option>
              <option className="sort-item">Prix plus bas</option>
            </select>
          </div>
        </div>

        <div className="ad-list">
  {this.state.listAds.map(x=>{
      return <Ad
      key={x.name}
       ad={x}
      
      />
  })}
          
       
        </div>
      </div>
    );
  }
}
const state = ({ searchByCity, category }) => {
  return {
    searchByCity: searchByCity ? searchByCity : "toutes la tunisie",
    category: category.filter(x => x.selected)
  };
};

export default connect(state)(List);
