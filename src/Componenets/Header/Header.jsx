import React, { Component } from 'react';
import TopHeader from './TopHeader'
import Search from './Search'
import Filter from './Filter';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <header>
     <TopHeader />
     <Search />
      <Filter />
        </header>
         ) }
}
 
export default Header;