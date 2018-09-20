import React, { Component } from 'react';
import {connect} from 'react-redux';
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div className="category-filter">
            
            <ul className="category-menu">
            {this.props.category.map(x=>{
               return <li
                className={x.selected?"category-item selected-category":"category-item"}
                onClick={()=>this.props.setCategory(x)} >
                {x.name}
                
                </li>
                    })}
                
            </ul>
            
            </div>
         );
    }
}
 

const mapStateToProps = ({category}) =>{
    return{
category,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        setCategory: ({name,selected})=>{
           selected = ! selected
            dispatch({
                type:'UPDATE_ON_CATEGORY',
                category:{name,selected}
            })
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter);