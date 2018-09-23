import React, { Component } from 'react';

class TopHEader extends Component {

    render() {
        return (

            <div className="top-nav">

                <div className="brand-nav">LOGO</div>
                <ul className="nav-menu">
                    <li className="nav-menu-item"> <a href="#">mes favoris ( 0 )</a></li>
                    <li className="nav-menu-item"> |</li>
                    <li className="nav-menu-item"> <a href="#">login / sign in</a></li>

                </ul>

            </div>

        );
    }
}

export default TopHEader;