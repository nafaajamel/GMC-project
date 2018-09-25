import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from '../modal/Modal'
import Login from './Login'
import Register from './Register'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    active:"login"

    };
  }
  render() {
    return (
      <Modal>
      <div className="form">
        <div className="form-header">
          <button className = {this.state.active==="login"?"active":''}
          onClick={()=>this.setState({active:"login"})}
          >se connecter</button>
          <button className = {this.state.active==="register"?"active":''}
          onClick={()=>this.setState({active:'register'})}
          >inscrez-vous</button>
        </div>
        <div className="form-content">
           {this.state.active==="login"?<Login />:<Register />}
        </div>
      </div>
      </Modal>
    );
  }
}

export default Form;
