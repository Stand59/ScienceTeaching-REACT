import React, { Component} from 'react';
import './App.css';
import background from "./images/background.jpg";

import BuildNav from './components/HeaderComponent';
import BuildJumbotron from './components/JumbotronComponent';
import BuildFooter from './components/FooterComponent';
import EighthGrade from './components/EighthGradeComponent';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
