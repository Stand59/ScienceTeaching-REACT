import React, { Component } from 'react';
import { Footer } from 'reactstrap';

class BuildFooter extends Component {
    render(){
        return (
            <footer style={{backgroundColor: 'blue'}}>
                <div className='container'>
                    <div className='row'>
                        <div clasName="col">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default BuildFooter;