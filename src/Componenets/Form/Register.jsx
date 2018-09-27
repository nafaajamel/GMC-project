import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fullName:"",
          phone:"",
          password:"",
          mail:"",
          success:false
           }
    }

    hundleChange=(e)=>{
      this.setState({
        [e.id] :e.value
      })
      
    }

    register = () =>{
      
const {fullName,phone,password,mail} = this.state
if(fullName.length>5 && !isNaN(phone) && phone.length === 8 && password.length>5){

    axios.post("/users/add",{"user":this.state}).then(res=>{
       this.setState({
         success:true
       })
   this.props.setUser(res.data)
  
       })
    
      }else{
alert('error !')
      }
    }

    render() { 
        return ( 
            <div className="login-form" id="register">
            {this.state.success? <Redirect to="/dashboard" />:false}
             <div className="form-row">
              <input
              value={this.state.fullName}
              id="fullName"
              onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="nom & prenom" className="form-input" />
              <i id="phone" className="fa fa-user" />
            </div>
            <div className="form-row">
              <input
              value={this.state.phone}
             
              id="phone"
              onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="télephone" className="form-input" />
              <i id="phone" className="fa fa-phone" />
            </div>
            <div className="form-row">
              <input
                value={this.state.password}
                id="password"
                onChange={(e)=>this.hundleChange(e.target)}
                type="text"
                placeholder="mot de passe"
                className="form-input"
              />
              <i className="fa fa-key" />
            </div>
            <div className="form-row">
              <input 
                value={this.state.mail}
                id="mail"
                onChange={(e)=>this.hundleChange(e.target)}
              type="text" placeholder="e-mail" className="form-input" />
              <i id="phone" className="fa fa-envelope" />
            </div>
            <button
            onClick={()=>this.register()}
            className="form-btn">enregister</button>
          </div>
         );
    }
}
 
const state =state =>{
  return{

  }
}
const dispatch= dispatch =>{
  return{
    setUser: ({fullName,email,password,phone})=>{
        dispatch({
          type:'SET_LOGIN',
          user:{fullName,email,password,phone}
        })
        dispatch({type:'SET_MODAL'})
        

    }
  }
}
export default connect(state,dispatch)(Register);