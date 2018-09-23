import React, { Component } from 'react';
import TopHeader from './TopHeader'
import Search from './Search'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                {/* <TopHeader /> */}
                <Search />

            </header>
        )
    }
}

export default Header;