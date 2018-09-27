import React, { Component } from "react";
import axios from 'axios'
import {connect} from 'react-redux'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    login:"",
    password:"",
    error:false
    };
  }
  hundleChange = (e)=>{

    this.setState({
      [e.id] : e.value
    })
    
  }

  login = ()=>{
  const {login,password} = this.state
    axios.post('/login',{login,password} ).then(res=>{
      if(! res.data){
        this.setState({
          error: true
        })
      }else{
        
        this.props.log(res.data)
        
        this.props.toggle()
      }
    })

  }

  render() {
    return (
      <div className="login-form">
      {this.state.error?
      <div className="form-row" style={{color:"red"}}>login ou mot de passe incorrect ! </div>:""}
        <div className="form-row">
          <input type="text" placeholder="télephone" className="form-input"
          value={this.state.login}
          onChange={(e)=>this.hundleChange(e.target)}
          id='login'
          />
          <i id="phone" className="fa fa-phone" />
        </div>
        <div className="form-row">
          <input
          id='password'
          onChange={(e)=>this.hundleChange(e.target)}
          value={this.state.password}
            type="password"
            placeholder="mot de passe"
            className="form-input"
          />
          <i className="fa fa-key" />
        </div>
        <div>
          <input id="rest" type="checkbox" />
          <label for="rest">restez connecté</label>
        </div>
        <button className="form-btn"
        onClick={()=>this.login()}
        >connecter</button>
      </div>
    );
  }
}


const state = state =>{
  return{

  }
}
const dispatch = dispatch => {
  return{
    log : (user)=>{
       dispatch({
         type:'SET_LOGIN',
         user,
       })
    },
    toggle:()=>{
      dispatch({
        type:"SET_MODAL",

      })
    }
  }
}

export default connect(state,dispatch)(Login);
