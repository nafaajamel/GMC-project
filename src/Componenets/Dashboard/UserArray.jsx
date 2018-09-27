import React, { Component } from "react";

class UserArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrSave: "ajouter",
      toggleForm: false
    };
  }
  edit = () => {
    this.setState({
      toggleForm: true,
      addOrSave: "edit"
    });
  };
  render() {
    return (
      <div className="user-page">
        <div
          className={
            this.state.toggleForm ? "add-form show-form-user" : "add-form"
          }
        >
          <h3>
            {this.state.addOrSave === "ajouter"
              ? "ajouter utilisateur"
              : "modifier utilisateur"}
          </h3>

          {/* insert user */}

          <div className="insert-form ">
            <div className="row">
              <label for="fullname">nom & prénom :</label>
              <input type="text" id="fullname" />{" "}
            </div>
            <div className="row">
              <label for="phone">télephone :</label>
              <input type="text" id="phone" />{" "}
            </div>
            <div className="row">
              <label for="email">e-mail :</label>
              <input type="text" id="email" />{" "}
            </div>
            <div className="row">
              <label for="password">mot de passe:</label>
              <input type="text" id="password" />{" "}
            </div>
            <div className="row">
              <div>
                <button className="btn add">{this.state.addOrSave}</button>
                <button
                  className="btn cancel"
                  onClick={() =>
                    this.setState({
                      toggleForm: false
                    })
                  }
                >
                  annuler
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">
            List of Users
            <button
              className="btn btn-primary"
              onClick={() =>
                this.setState({
                  addOrSave: "ajouter",
                  toggleForm: true
                })
              }
            >
              ajouter
            </button>
          </div>
          <div class="panel-body">
            <div className="filter-tab">
              <div>
                voir :{" "}
                <select className="list-view">
                  <option value="20">20</option>
                  <option value="20">50</option>
                  <option value="20">100</option>
                </select>{" "}
                elements
              </div>
              <div>
                recherche : <input type="text" className="search-user" />{" "}
              </div>
            </div>
            <table>
              <tr class="table-head">
                
                <td>nom & prénom</td>
                <td>télephone</td>
                <td>e-mail</td>
                <td>actions</td>
              </tr>
              <tr>
                <td>klklfd</td>
                <td>lkkfkfkf</td>
                <td>jhfdf</td>
                
                <td>
                  <button class="edit">
                    {" "}
                    <i
                      onClick={() => this.edit()}
                      className="fa fa-edit"
                    />{" "}
                  </button>
                  <button class="remove">
                    {" "}
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserArray;
