import React, { Component } from 'react';
import {connect} from 'react-redux'
import Element from './Element';
import './style.css'
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div className="category-container">
<Element />
</div>
         );
    }
}
 
export default Category;