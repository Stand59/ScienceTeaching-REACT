import React, { Component } from 'react';
import './App.css';

import BuildNav from './components/NavbarComponent'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BuildNav/>
            </div>
        );
    }
}

export default App;
