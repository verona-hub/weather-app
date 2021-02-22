import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import About from './components/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';



class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
