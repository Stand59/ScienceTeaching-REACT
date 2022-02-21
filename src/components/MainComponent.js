import Home from './HomeComponent';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EIGHTHRESOURCES } from '../shared/EighthResources'

import EighthGrade from './EighthGradeComponent';
import BuildFooter from './FooterComponent';
import BuildHeader from './HeaderComponent';
import Biology from './BiologyComponent';
import { BIOLOGYRESOURCES } from '../shared/BiologyResources';
import  ActivityComponent from './ActivityComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eighthResources: EIGHTHRESOURCES,
            biologyResources: BIOLOGYRESOURCES
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <BuildHeader />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/8th' render={() => <EighthGrade eighthResources={this.state.eighthResources} />} />
                        <Route exact path='/biology' render={() => <Biology biologyResources={this.state.biologyResources} />} />
                        <Redirect to='/home' />
                    </Switch>
                <BuildFooter />
            </div>
        );
    }
}
        

export default Main;   