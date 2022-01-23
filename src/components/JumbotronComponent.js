import React, { Component } from 'react';
import { Jumbotron, button } from 'reactstrap';


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
                                <div class="form-outline">
                                    <input type="search" id="form1" class="form-control" />
                                    <label class="form-label" for="form1">Search</label>
                                </div>
                                <button type="button" class="btn btn-primary">
                                    <i class="fas fa-search"></i>
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