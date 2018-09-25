import React, { Component } from 'react';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="login-form" id="register">
             <div className="form-row">
              <input type="text" placeholder="nom & prenom" className="form-input" />
              <i id="phone" className="fa fa-user" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="télephone" className="form-input" />
              <i id="phone" className="fa fa-phone" />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="mot de passe"
                className="form-input"
              />
              <i className="fa fa-key" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="e-mail" className="form-input" />
              <i id="phone" className="fa fa-envelope" />
            </div>
            <button className="form-btn">connecter</button>
          </div>
         );
    }
}
 
export default Register;