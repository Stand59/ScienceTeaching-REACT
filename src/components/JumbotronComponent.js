import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class BuildJumbotron extends Component {
    render(){
        return (
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Science</h1>
                            <h2>Activities for Your Classroom</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default BuildJumbotron;