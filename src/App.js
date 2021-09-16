import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/Page/About';
import Footer from "./components/Page/Footer";
import Main from './components/Page/Main';
import Navbar from './components/Page/Navbar';
import PageNotFound404 from "./components/Page/PageNotFound404";
import Search from "./components/Utility/Search";


class App extends Component {

    // Initial state
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
        search: false,
        forecast_3_days: [],
        fetching: false,
        cancelFetch: false,
    }

    // After a location search is made from the input, the call will be made to the Api with the input text
    searchCity = async (text) => {

        // State updates as soon as the call is made, this is the phase before the response, the modal with the spinner are activated
        this.setState({
            weatherInfo: [],
            weatherCondition: [],
            airQuality: [],
            location: [],
            astronomy: [],
            spinner: true,
            text: text,
            modal: true,
            search: true,
            fetching: true
        });

        try {
            // Three calls are made and requested with Axios: current weather data, astronomy data, and forecast data;
            // with a timeout delay for the request of 3sec, since the Api is too fast in fetching the data
            const response = await axios.all
            ([
                axios.get(`https://api.weatherapi.com/v1/current.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                &aqi=yes`),
                axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                `),
                axios.get(`https://api.weatherapi.com/v1/forecast.json?key=
                ${process.env.REACT_APP_WEATHER_API_KEY}
                &q=${text}
                &days=3
                `), {}
            ]).then(x => new Promise(resolve => setTimeout(() => resolve(x), 3000)));

            // If fetching is active the state is updated once the response is back, the data is populating the various states
            this.state.fetching && this.setState({
                weatherInfo: response[0].data.current,
                weatherCondition: response[0].data.current.condition,
                airQuality: response[0].data.current.air_quality,
                location: response[0].data.location,
                astronomy: response[1].data.astronomy.astro,
                modal: false,
                spinner: false,
                search: false,
                forecast_3_days: response[2].data.forecast
            });

            // In case the request cannot be made, the error will be caught
        } catch(err) {

            // In case of an error, the state updates: all the information beside the errorCode is reset to the initial state,
            // the modal with the spinner are activated
            this.setState({
                weatherInfo: [],
                location: [],
                errorCode: Object.entries(err.response.data.error)[0][1],
                spinner: true,
                modal: true,
                search: true
            });

            // Two timeouts on the state:
            // One of 2sec for disabling the spinner before the error box displays on screen
            // The second to close the modal after exactly 10 seconds after the box is opened
            setTimeout(() => this.setState({ errorMessage: err.response.data.error.message, spinner: false, search: false}), 2000);
            setTimeout(() => this.setState({ errorMessage: null, modal: false }), 13000);
        }

        // The view slides smoothly to the main container which is activated only with the Api response;
        // If the modal is present, the scroll doesn't happen
        // - leave this to avoid a Typescript error that scrollIntoView is missing when a request error is present
        // - added window location pathname to avoid error on window not scrolling if you switch to the About page just after making the search

        if(!this.state.modal && window.location.pathname === '/') {
            document.querySelector('.scrollToMain').scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Removes all the content and resets the state back to the origin
    clearContent = () => {
        this.setState({
            weatherInfo: [],
            weatherCondition: [],
            location: []
        });
    }

    // Closes the error modal
    clearError = () => {
        this.setState({
            errorMessage: null,
            spinner: false,
            modal: false
        });
    }

    // Interrupts the search and closes the modal window
    abortSearch = () => {
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
            search: false,
            forecast_3_days: [],
            fetching: false,
            cancelFetch: true
        });
    }

    // toggleDarkMode = (mode) => {
    //     this.setState({ darkMode: mode });
    // }



    render () {

        const { text, weatherInfo, weatherCondition, airQuality, location, astronomy,
            spinner, errorMessage, errorCode, modal, search, forecast_3_days, darkMode } = this.state;
        const { searchCity, clearContent, clearError, abortSearch, toggleDarkMode  } = this;

        const locationResponseSize = _.size(location);
        const weatherResponseSize = _.size(weatherInfo);

        // If the data from Location and Weather have been fetched, the content is present (displayed on screen)
        const contentIsPresent = locationResponseSize > 0 && weatherResponseSize > 0;

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
                                       abortSearch={ abortSearch }
                                       toggleDarkMode={ toggleDarkMode }
                                       darkMode={ darkMode }
                                   />
                                   <Search
                                       searchCity={ searchCity }
                                       clearContent={ clearContent }
                                       showClearButton={ locationResponseSize > 0 && weatherResponseSize > 0 && !spinner }
                                       spinner={ spinner }
                                       darkMode={ darkMode }
                                   />
                                   <div className='scrollToMain'>
                                       <Main
                                           weatherInfo={ weatherInfo }
                                           weatherCondition={ weatherCondition }
                                           airQuality={ airQuality }
                                           location={ location }
                                           astronomy={ astronomy }
                                           spinner={ spinner }
                                           locationResponseSize={ locationResponseSize }
                                           weatherResponseSize={ weatherResponseSize }
                                           forecast_3_days={ forecast_3_days }
                                       />
                                   </div>
                                   { contentIsPresent && <Footer/> }
                               </Fragment>
                           )}
                    />

                    <Route exact path="/about" render={ () => (
                        <Fragment>
                            <Navbar/>
                            <About />
                            <Footer />
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
