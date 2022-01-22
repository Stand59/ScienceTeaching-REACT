import React, { Component } from 'react';
import './App.css';

import BuildNav from './components/NavbarComponent';
import BuildJumbotron from './components/JumbotronComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BuildJumbotron />
                <BuildNav/>
            </div>
        );
    }
}

export default App;
