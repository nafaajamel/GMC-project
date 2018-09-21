import React, { Component } from 'react';
import './ads.css'
import Ads from './Ads'
class AdsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="ads-container">
            <Ads /> dsds
            </div>
         );
    }
}
 
export default AdsList;
