import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/Page/About';
import Main from './components/Page/Main';
import Navbar from './components/Page/Navbar';
import PageNotFound404 from "./components/Page/PageNotFound404";
import Search from "./components/Utility/Search";


// let weatherApiKey;
//
// if (process.env.NODE_ENV !== 'production') {
//     weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
// } else {
//     weatherApiKey = process.env.WEATHER_API_KEY;
// }
// console.log(process.env);


class App extends Component {

    state = {
        text: '',
        weatherInfo: [],
        weatherCondition: [],
        airQuality: [],
        location: [],
        astronomy: [],
        spinner: false,
        errorMessage: null,
        errorCode: null,
        modal: false,
        search: false
    }

    searchCity = async (text) => {

        this.setState({
            spinner: true,
            text: text,
            weatherInfo: [],
            weatherCondition: [],
            airQuality: [],
            location: [],
            astronomy: [],
            modal: true,
            search: true
        });

        try {
            const response = await axios.all
            ([
                axios.get(`https://api.weatherapi.com/v1/current.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                &aqi=yes`),
                axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                `), {}
            ]).then(x => new Promise(resolve => setTimeout(() => resolve(x), 2500)));

            this.setState({
                weatherInfo: response[0].data.current,
                weatherCondition: response[0].data.current.condition,
                airQuality: response[0].data.current.air_quality,
                location: response[0].data.location,
                spinner: false,
                astronomy: response[1].data.astronomy.astro,
                modal: false,
                search: false
            });

        } catch(err) {

            this.setState({
                weatherInfo: [],
                location: [],
                errorCode: Object.entries(err.response.data.error)[0][1],
                spinner: true,
                modal: true,
                search: true
            });

            setTimeout(() => this.setState({ errorMessage: err.response.data.error.message, spinner: false, search: false}), 2000);
            setTimeout(() => this.setState({ errorMessage: null, modal: false }), 10000);
        }

        document.querySelector('.container').scrollIntoView({
            behavior: 'smooth'
        });

    }

    clearContent = () => {
        this.setState({
            weatherInfo: [],
            weatherCondition: [],
            location: []
        });
    }

    clearError = () => {
        this.setState({
            errorMessage: null,
            spinner: false,
            modal: false
        });
    }

    cancelSearch = () => {
        this.setState({
            text: '',
            weatherInfo: [],
            weatherCondition: [],
            airQuality: [],
            location: [],
            astronomy: [],
            spinner: false,
            errorMessage: null,
            errorCode: null,
            modal: false,
            search: false
        });
    }

    render () {

        const { text, weatherInfo, weatherCondition, airQuality, location, astronomy,
            spinner, errorMessage, errorCode, modal, search } = this.state;
        const { searchCity, clearContent, clearError, cancelSearch } = this;

        const locationResponseSize = _.size(location);
        const weatherResponseSize = _.size(weatherInfo);

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"
                           render={ () => (
                               <Fragment>
                                   <Navbar
                                       emptyContent={ locationResponseSize <= 0 && weatherResponseSize <= 0 }
                                       spinner={ spinner }
                                       text={ text }
                                       errorMessage={ errorMessage }
                                       errorCode={ errorCode }
                                       clearError={ clearError }
                                       modal={ modal }
                                       search={ search }
                                       cancelSearch={ cancelSearch }
                                   />
                                   <Search
                                       searchCity={ searchCity }
                                       clearContent={ clearContent }
                                       showClearButton={ locationResponseSize > 0 && weatherResponseSize > 0 && !spinner }
                                       spinner={ spinner }
                                   />
                                   <div id="container" className="container">
                                       <Main
                                           weatherInfo={ weatherInfo }
                                           weatherCondition={ weatherCondition }
                                           airQuality={ airQuality }
                                           location={ location }
                                           astronomy={ astronomy }
                                           spinner={ spinner }
                                           locationResponseSize={ locationResponseSize }
                                           weatherResponseSize={ weatherResponseSize }
                                       />
                                   </div>
                               </Fragment>
                           )}
                    />

                    <Route exact path="/about" render={ () => (
                        <Fragment>
                            <Navbar/>
                            <div className="container">
                                <About/>
                            </div>
                        </Fragment>
                    )} />

                    <Route render={ () => (
                        <Fragment>
                            <Navbar />
                            <PageNotFound404 />
                        </Fragment>
                    )} />

                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
