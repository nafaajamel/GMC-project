import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Modal from '../modal/Modal'
import Form from '../Form/Form'

import {connect} from 'react-redux'
class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login:false
           
        }
    }
    render() { 
        return (

            <ul className="user-menu">
                
              

                {this.state.login ===true? 
                <li className="user-item"><i className="fa fa-cog"></i> mon compte</li>
                :<li className="user-item"
                onClick={()=> this.props.openModal()}
                ><i className="fa fa-lock"></i>se connecter</li>
                   
                }
                <li className="user-item">
                 <Link to="/favoris">
                 <i className="fa fa-heart fav-icon">
               </i> favoris ({this.props.fav})
                </Link> </li>
            </ul>
          );
    }
}
 
const state = ({Fav})=>{
    return{
        fav:Fav.length,

    }
}
const dispatch = dispatch =>{
    return{
        openModal:()=>{
            dispatch({
                type:'SET_MODAL'
            })
        }
    }
}

export default connect(state,dispatch)(UserMenu);