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
{this.props.category.map(x=>{
    return <Element 
    click={this.props.addCategory}
    category={x}
    />
})}
</div>
         );
    }
}

const state = ({category})=>{
return{
category,
}
}
const dispatch = dispatch =>{
return{
addCategory:({name,selected,img})=>{
    selected = ! selected
   
dispatch({
    type:"UPDATE_ON_CATEGORY",
    category:{name,selected,img}
})
}
}
}
 
export default  connect(state,dispatch)(Category);