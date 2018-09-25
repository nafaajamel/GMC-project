import React, { Component } from "react";
import {Link,Route} from 'react-router-dom'
import UserArray from './UserArray';
import AdArray from './AdArray'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="dashboard">
        <div className="dash-side">
          <div className="side-brand">
          <Link to="./home"> 
          Logo
          </Link>
        
          </div>
          
          <ul className="side-menu">
          <Link to="/dashboard" >
            <li className="side-item">
              <i class="fas fa-tachometer-alt" /> dashboard{" "}
              <i class="fas fa-angle-right" />
            </li>
            </Link>
            <li className="side-item">
              <i className="fa fa-envelope" /> messages{" "}
              <i class="fas fa-angle-right" />
            </li>
            <Link to="/dashboard/users" >
            <li className="side-item">
            
              <i className="fa fa-user" /> utilisateurs
              <i class="fas fa-angle-right" />
             
            </li>
            </Link>
            <Link to="/dashboard/ads" >
            <li className="side-item">
              <i className="fa fa-tasks" /> annonces{" "}
              <i class="fas fa-angle-right" />
            </li>
            </Link>
          </ul>
        </div>
        <div className="dash-body">
          <div className="dash-header">
          <div className="dash-header-left">
        <i className="fa fa-bars" id="toggle-side"></i>
          <i className="fa fa-bell"></i>
        <i className="fa fa-search"></i>
          </div>
          <div className="dash-header-right">
           <i className="fa fa-user d-u-m d-d-u"></i>
           <u className="user-menu">
               <li className="user-item "> <b className="u-i-d">mon compte</b></li>
               <li className="user-item"><b className="u-i-d">déconnecter</b></li>
           </u>
          </div>
          </div>
          <div className="dashboard-main" >
        {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
