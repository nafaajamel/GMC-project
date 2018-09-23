import React, { Component } from 'react';
import Ad from './Ad';
import {connect} from 'react-redux'


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div className="home">
    <div className="home-top">
<h4 className="home-title">annonces de location de : <span>{this.props.category.length>0? this.props.category.map((x,i)=>{
    return i>0 ? " | "+ x.name : x.name
}):"tous les categories" }
</span>   à : <span>{this.props.searchByCity}</span>    </h4>
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
         
            <Ad product="klklkl"  />
            <Ad  product="klmlmkl" />
            <Ad product="klkkl"  />
            <Ad product="klkl"  />
            <Ad  product="klkl5kl" />
            <Ad  product="kkl" />
            </div>
            </div>
         );
    }
}
const state = ({searchByCity,category}) =>{
    return{
     searchByCity:searchByCity?searchByCity:"toutes la tunisie",
     category:category.filter(x=>x.selected)
    }
}

 
export default connect(state)(List);