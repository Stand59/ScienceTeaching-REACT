import React, { Component } from 'react';
import { Jumbotron, button, img} from 'reactstrap';


class BuildJumbotron extends Component {
    render(){
        return (
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <h1>Science</h1>
                            <h2>Activities for Your Classroom</h2>
                        </div>
                        <div className="col-2">
                            <div class="topnav">
                                <input type="text" placeholder="Search.."/>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default BuildJumbotron; 