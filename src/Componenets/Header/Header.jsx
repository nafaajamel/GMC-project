import React, { Component } from 'react';
import TopHeader from './TopHeader'
import Search from './Search'
import Form from '../Form/Form'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <Form />
                <Search />

            </header>
        )
    }
}

export default Header;