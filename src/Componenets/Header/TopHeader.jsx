import React, { Component } from 'react';

class TopHEader extends Component {
 
    render() { 
        return (  

            <div className="top-nav">
            <div className="nav-desc">Toutes les annonces de location dans votre région</div>
            
            <ul className="nav-menu">
                <li className="nav-menu-item"> <a href="#">login</a></li>
                <li className="nav-menu-item"> |</li>
                <li className="nav-menu-item"><a href="#">sign up</a></li>
            </ul>
           
               </div>

        );
    }
}
 
export default TopHEader;