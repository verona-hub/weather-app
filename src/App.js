import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/About';
import Errors from './components/Error/Errors';
import Main from './components/Info/Main';
import Navbar from './components/Navbar';
import Search from "./components/Search";


class App extends Component {

    state = {
        weather: [],
        weatherCondition: [],
        airQuality: [],
        location: [],
        astronomy: [],
        spinner: false,
        errorMessage: null,
        errorCode: null
    }

    searchCity = async (text) => {

        this.setState({ spinner: true })

        try {
            const response = await axios.all([
                axios.get(`https://api.weatherapi.com/v1/current.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                &aqi=yes`),
                axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                `)
            ]).then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));

            this.setState({
                weather: response[0].data.current,
                weatherCondition: response[0].data.current.condition,
                airQuality: response[0].data.current.air_quality,
                location: response[0].data.location,
                astronomy: response[1].data.astronomy.astro,
                spinner: false,
                errorMessage: null
            });

        } catch(err) {
            this.setState({
                weather: [],
                location: [],
                spinner: false,
                errorMessage: err.response.data.error.message,
                errorCode: Object.entries(err.response.data.error)[0][1]
            });

            setTimeout(() => this.setState({ errorMessage: null }), 2500);
        }
    }


    clearContent = () => {
        this.setState({
            weather: [],
            weatherCondition: [],
            location: []
        });
    }
    render () {

        const { weather, weatherCondition, location, spinner,
            errorMessage, errorCode} = this.state;
        const { searchCity, clearContent } = this;

        return (
            <BrowserRouter>
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/"
                               render={ () => (
                                   <Fragment>
                                       <Search
                                           searchCity={ searchCity }
                                           clearContent={ clearContent }
                                           showClearButton={ _.size(location) > 0 && _.size(weather) > 0 && !spinner }
                                       />
                                       <Errors
                                           errorMessage={ errorMessage }
                                           errorCode={ errorCode }
                                       />
                                       <Main
                                           weatherProp={ weather }
                                           weatherCondition={ weatherCondition }
                                           location={ location }
                                           airQuality={ this.state.airQuality }
                                           astronomy={ this.state.astronomy }
                                           spinner={ spinner }
                                       />
                                   </Fragment>
                               )}
                        />
                        <Route path="/about" component={ About }/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
