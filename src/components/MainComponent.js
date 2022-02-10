import Home from './HomeComponent';
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RESOURCES } from '../shared/resources'

import EighthGrade from './EighthGradeComponent';
import BuildFooter from './FooterComponent';
import BuildNav from './NavbarComponent';
import BuildJumbotron from './JumbotronComponent';


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
                <BuildJumbotron />
                <BuildNav />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/eighthGrade' render={() => <EighthGrade resources={this.state.resources} />} />
                    <Redirect to='/home' />
                </Switch>
                <BuildFooter />
            </div>
        );
    }
}
        

export default Main;