import React, { Component } from 'react';
import { Jumbotron, button, img} from 'reactstrap';


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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="input-group">
                                <div className="form-outline">
                                    <input type="search" id="form1" className="form-control" />
                                    <label className="form-label" for="form1">Search</label>
                                </div>
                                <button type="button" className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default BuildJumbotron; 