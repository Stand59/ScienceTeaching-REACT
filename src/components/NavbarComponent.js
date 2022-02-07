import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Navlink } from 'reactstrap';

class BuildNav extends Component {
    
    render(){
        return(
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <i className="fa fa-home fa-lg" /> Home
                            <i className="fa fa-home fa-lg" /> 8th
                            <i className="fa fa-home fa-lg" /> Biology
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default BuildNav;