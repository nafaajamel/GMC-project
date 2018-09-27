import React, { Component } from "react";
import Ad from "./Ad";
import { connect } from "react-redux";
import axios from 'axios'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAds: []
    };
  }


componentDidMount() {

  axios.get('/ads').then(res=>{
    this.setState({
      listAds:res.data
  })
  
  })
   
    
}

componentDidUpdate(prevProps) {
 
  if (this.props.adList.length !== prevProps.adList.length) {
    this.setState({
         listAds:[...this.props.adList]
        })
  }
}

// componentWillReceiveProps(){
  
//  this.setState({
//     listAds:[...this.props.adList]
//   })


// }
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
      key={x._id}
       ad={x}
      
      />
  })}
          
       
        </div>
      </div>
    );
  }
}
const state = ({AdList, searchByCity, category }) => {
  console.log('redux',AdList)
  return {
    searchByCity: searchByCity ? searchByCity : "toutes la tunisie",
    category: category.filter(x => x.selected),
    adList:[...AdList]
    
  };
  
};

export default connect(state)(List);
