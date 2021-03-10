import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/Page/About';
import Errors from './components/Error/Errors';
import Main from './components/Page/Main';
import Navbar from './components/Page/Navbar';
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
        weatherInfo: [],
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
            ]).then(x => new Promise(resolve => setTimeout(() => resolve(x), 3000)));

            this.setState({
                weatherInfo: response[0].data.current,
                weatherCondition: response[0].data.current.condition,
                airQuality: response[0].data.current.air_quality,
                location: response[0].data.location,
                spinner: false,
                astronomy: response[1].data.astronomy.astro,
                errorMessage: null
            });

        } catch(err) {

            this.setState({
                weatherInfo: [],
                location: [],
                errorCode: Object.entries(err.response.data.error)[0][1]
            });

            setTimeout(() => this.setState({ errorMessage: err.response.data.error.message, spinner: false }), 2000);
            setTimeout(() => this.setState({ errorMessage: null }), 4500);
        }
    }

    clearContent = () => {
        this.setState({
            weatherInfo: [],
            weatherCondition: [],
            location: []
        });
    }


    render () {

        const { weatherInfo, weatherCondition, airQuality, location, astronomy,
            spinner, errorMessage, errorCode} = this.state;
        const { searchCity, clearContent } = this;

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
                                       errorIsPresent={ errorCode && errorMessage}
                                       spinner={ spinner }
                                   />
                                   <Errors
                                       errorMessage={ errorMessage }
                                       errorCode={ errorCode }
                                   />
                                   <Search
                                       searchCity={ searchCity }
                                       clearContent={ clearContent }
                                       showClearButton={ locationResponseSize > 0 && weatherResponseSize > 0 && !spinner }
                                       spinner={ spinner }
                                   />
                                   <div className="container">

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
                    <Route path="/about" render={ () => (
                        <Fragment>
                            <Navbar/>
                            <div className="container">
                                <About/>
                            </div>
                        </Fragment>
                    )} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
