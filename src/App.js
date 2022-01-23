import React, { Component } from 'react';
import './App.css';

import BuildNav from './components/NavbarComponent';
import BuildJumbotron from './components/JumbotronComponent';
import BuildFooter from './components/FooterComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BuildJumbotron />
                <BuildNav/>
                <BuildFooter/>
            </div>
        );
    }
}

export default App;
