import React, { Component } from 'react';
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
                :<li className="user-item"><i className="fa fa-lock"></i>se connecter</li>
                   
                }
                <li className="user-item"><i className="fa fa-heart fav-icon"></i> favoris ({this.props.fav})</li>
            </ul>
          );
    }
}
 
const state = ({Fav})=>{
    return{
        fav:Fav.length
    }
}

export default connect(state)(UserMenu);