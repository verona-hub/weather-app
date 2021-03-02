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
        spinner: false,
        errorMessage: null,
        errorCode: null
    }

    searchCity = async (text) => {

        this.setState({ spinner: true })

        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}`)
                .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));

            this.setState({
                cityInfo: response.data.location,
                weatherInfo: response.data.current,
                weatherInfoCondition: response.data.current.condition,
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
                                           cityInfoProp={ cityInfo }
                                           weatherInfoProp={ weatherInfo }
                                           weatherInfoCondition={ weatherInfoCondition }
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
