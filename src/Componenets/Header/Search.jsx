import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { getCity } from '../Constants/data';
import UserMenu from './UserMenu';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

            autocomplet: [],
        }
    }
    autocomplet = (value) => {
        this.props.setCity(value)
        this.setState({

            autocomplet: getCity().filter(x => {
                return value.trim() && x.toLowerCase().includes(value.toLowerCase().trim())
            })
        })
    }

    selectCity = (city) => {
        this.props.setCity(city)
        this.setState({
            autocomplet: []
        })
    }


    render() {
        return (
            <div className="navbar">
            <Link to="/home">
                <div className="brand-nav">LOGO</div>
                </Link>
                <div className="filter-nav">

                    <div className="autocomplet">
                        <input value={this.props.searchByCity} type="text" className="ou"
                            onChange={(e) => this.autocomplet(e.target.value)} placeholder="Ou ?" />
                        <ul className="city-menu">
                            {this.state.autocomplet.map(x => {
                                return <li className="city-item" onClick={() => this.selectCity(x)}>{x}</li>
                            })}


                        </ul>
                    </div>
                    <input className="input-search"
                        value={this.props.searchByName}
                        onChange={(e) => this.props.setName(e.target.value)}
                        type="text"
                        placeholder="Qu'est ce que vous  recherches" />
                    <button className="btn-search"> <i className="fa fa-search"></i> </button>
                </div>
                <div className="dispose-nav">
                         <Link to="/dashboard/ads">
                    <button className="dispose-btn"  >déposer annonce</button>
                         </Link>
                    <div style={{ position: "relative" }}>
                        <i className="fa fa-user usr-menu-icon d-d-u"></i>
                        <UserMenu />
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        searchByName: state.searchByName,
        searchByCity: state.searchByCity,
        
    }

}
const mapDispatchToProps = dispatch => {
    return {
        setCity: (city) => {
            dispatch({
                type: "SET_ADSCITY",
                city,
            })
        },
        setName: (name) => {
            dispatch({
                type: "SET_ADSNAME",
                name,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);