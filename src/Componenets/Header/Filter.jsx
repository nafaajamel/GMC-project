import React, { Component } from 'react';
import {category} from '../Constants/data'

const list =  category()

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div className="category-filter">
            <ul className="category-menu">
            {list.map(x=>{
                <li className="category-item"></li>
                    })}
                
            </ul>
            
            </div>
         );
    }
}
 
export default Filter;