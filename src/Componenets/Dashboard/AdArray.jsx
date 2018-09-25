import React, { Component } from "react";
import {category} from '../Constants/data'
class AdArray extends Component {
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
            this.state.toggleForm ? "add-form show-form-ad" : "add-form"
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
              <label for="img">images  :</label>
              <input type="file" id="img" multiple />{" "}
              <span className="tooltip">max 5 images </span>
            </div>
            <div className="row">
              <label for="title">titre  :</label>
              <input type="text" id="title" />{" "}
            </div>
            <div className="row">
              <label for="price">prix :</label>
              <input type="number" id="price" />{" "}
            </div>
            <div className="row">
              <label for="category">categorie :</label>
              <select id="category"> 
              <option>selectionnez une categorie</option>
              {category().map(x=> {
                  return <option value={x.name}>{x.name}</option>
              } )}
              </select>
              
            </div>
            <div className="row">
              <label for="unity">unité :</label>
              <select id="unity">
              <option>par :</option>
              <option> heure</option>
              <option> ans</option>
              <option> mois</option>
              <option> semaine</option>
              <option> jour</option>
              </select>
            </div>
            <div className="row">
              <label for="avaible">disponible :</label>
              <select id="avaible">
              <option value='1'>oui</option>
              <option value="0">non</option>
             
              </select>
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
               
                <td>titre</td>
                <td>images</td>
                <td>categorie</td>
                <td>prix</td>
                <td>unité</td>
                <td>disponible</td>
                <td>action</td>
              </tr>
              <tr>
              <td>images</td>
                <td>categorie</td>
                <td>prix</td>
                <td>unité</td>
                <td>disponible</td>
                <td>action</td>
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

export default AdArray;
