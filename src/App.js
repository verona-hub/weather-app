import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/About';
import Errors from './components/Error/Errors';
import MainInfo from './components/Info/MainInfo';
import Navbar from './components/Navbar';
import Search from "./components/Search";


class App extends Component {

    state = {
        cityInfo: [],
        weatherInfo: [],
        weatherInfoCondition: [],
        airQuality: [],
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
                axios.get(`http://api.weatherapi.com/v1/astronomy.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                `)
            ]).then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));

            this.setState({
                cityInfo: response[0].data.location,
                weatherInfo: response[0].data.current,
                weatherInfoCondition: response[0].data.current.condition,
                airQuality: response[0].data.current.air_quality,
                astronomy: response[1].data.astronomy.astro,
                spinner: false,
                errorMessage: null
            });

        } catch(err) {
            this.setState({
                cityInfo: [],
                weatherInfo: [],
                spinner: false,
                errorMessage: err.response.data.error.message,
                errorCode: Object.entries(err.response.data.error)[0][1]
            });

            setTimeout(() => this.setState({ errorMessage: null }), 2500);
        }
    }


    clearContent = () => {
        this.setState({
            cityInfo: [],
            weatherInfo: [],
            weatherInfoCondition: []
        });
    }

    render () {
        const {cityInfo, weatherInfo, weatherInfoCondition, spinner,
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
                                           showClearButton={ _.size(cityInfo) > 0 && _.size(weatherInfo) > 0 && !spinner }
                                       />
                                       <Errors
                                           errorMessage={ errorMessage }
                                           errorCode={ errorCode }
                                       />
                                       <MainInfo
                                           weatherInfoProp={ weatherInfo }
                                           weatherInfoCondition={ weatherInfoCondition }
                                           cityInfoProp={ cityInfo }
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
