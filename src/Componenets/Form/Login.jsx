import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-form">
        <div className="form-row">
          <input type="text" placeholder="télephone" className="form-input" />
          <i id="phone" className="fa fa-phone" />
        </div>
        <div className="form-row">
          <input
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
        <button className="form-btn">connecter</button>
      </div>
    );
  }
}

export default Login;
