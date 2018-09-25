import React, { Component } from 'react';
import Ad from '../ads/Ad'
import {connect} from 'react-redux'
class Favoris extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (  
<div className="ad-list">
{this.props.adsList.length===0? <div style={{textAlign:'center',width:'100%',height:'40vh'}}><h1 >vous n'avez pas des favoris !</h1></div>:
this.props.adsList.map(x=>{
    return <Ad ad={x} />
})}


</div>

        );
    }
}
const  state = ({Fav})=>{
     return{
  adsList:Fav
     }
 }
export default connect(state)(Favoris);