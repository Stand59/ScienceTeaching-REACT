import Home from './HomeComponent';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RESOURCES } from '../shared/resources'

import EighthGrade from './EighthGradeComponent';
import BuildFooter from './FooterComponent';
import BuildHeader from './HeaderComponent';
import Biology from './BiologyComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: RESOURCES
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
                    <Route exact path='/8th' render={() => <EighthGrade resources={this.state.resources} />} />
                    <Route exact path='/biology' render={() => <Biology resources={this.state.resources} />} />
                    <Redirect to='/home' />
                </Switch>
                <BuildFooter />
            </div>
        );
    }
}
        

export default Main;