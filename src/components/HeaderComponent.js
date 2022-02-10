import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class BuildHeader extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                <h1>Science Activities</h1>
                                <h2>for Your Classroom</h2>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md" style={{backgroundColor: '#A9A9A9'}}>
                        <div className="container">
                            <div className='row'>
                                <NavbarBrand className="mr-auto" href="/home"><img src="assets/images/DNA.jpg" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <i className="fa fa-home fa-lg" /> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/8th">
                                                <i className="fa fa-flask fa-lg" /> 8th
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/biology">
                                                <i className="fa fa-globe fa-lg" /> Biology
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contactus">
                                                <i className="fa fa-address-card fa-lg" /> Contact Us
                                            </NavLink>
                                        </NavItem>
                                        <div className="col-4">
                                            <div className="topnav">
                                                <input type="text" placeholder="Search.."/>
                                            </div>
                                        </div>
                                    </Nav>
                                </Collapse>
                            </div>
                        </div>
                    </Navbar>
            </React.Fragment>
        );
    }
}

export default BuildHeader;