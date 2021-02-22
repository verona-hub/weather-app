import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components
import About from './components/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';



function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    );
}

export default App;
