import React, { Component } from 'react';
import {connect} from 'react-redux'


class Modal extends Component {
    constructor(props) {
        super(props);
       
    }
    render() { 
        return ( 
           <div className={this.props.isOpen===true?"modal":"modal modal-hide"} >
           <div className="modal-content">
           <div className="modal-header">
           {this.props.modalHeader}
           <span
           onClick={()=>this.props.close()}
           >close</span>
           </div>
           <div className="modal-body">
           {this.props.children}
           </div>
           
           </div>
           </div>  
         );
    }
}
 
const state = ({isOpen}) =>{
    return{
isOpen,
    }
}
const dispatch = dispatch =>{
    return{
     close: ()=>{ dispatch({
         type:"SET_MODAL"

     }) }
    }
}


export default  connect(state,dispatch)(Modal);