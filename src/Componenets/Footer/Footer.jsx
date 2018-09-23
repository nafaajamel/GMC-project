import React, { Component } from 'react';
import Bfooter from './Bfooter'
import Sfooter from './SFooter'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div className="footer">
<Bfooter />
<Sfooter />
</div>        

         );
    }
}
 
export default Footer;