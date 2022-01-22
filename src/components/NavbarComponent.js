import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class BuildNav extends Component {
    
    render(){
        return(
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Science</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}

export default BuildNav;