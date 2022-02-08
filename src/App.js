import React, { Component} from 'react';
import './App.css';
import background from "./images/background.jpg";

import BuildNav from './components/NavbarComponent';
import BuildJumbotron from './components/JumbotronComponent';
import BuildFooter from './components/FooterComponent';
import EighthGrade from './components/EighthGradeComponent';

class App extends Component {

    render() {

        return (
            <div className="App">
                <BuildJumbotron />
                <BuildNav/>
                <div style={{ backgroundImage: `url(${background})` }}>
                    <EighthGrade/>
                </div>
                <BuildFooter />
            </div>
        );
    }
}

export default App;
