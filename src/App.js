import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/About';
import Alert from './components/Errors+Alerts/Alert';
import MainInfo from './components/Info/MainInfo';
import Navbar from './components/Navbar';
import Search from "./components/Search";


class App extends Component {

    state = {
        cityInfo: [],
        weatherInfo: [],
        weatherInfoCondition: [],
        spinner: false,
        alert: null,
        errorResponse: null,
        errorMessage: null,
        errorData: []
    }

    searchCity = async (text) => {

        this.setState({ spinner: true })

        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${text}`
            ).then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));

            const autocomplete = await axios.get(
                `http://api.weatherapi.com/v1/search.json?key=011e53609c2a4350aed01926212002&q=mia`
            );
            // console.log(autocomplete);

            this.setState({
                cityInfo: response.data.location,
                weatherInfo: response.data.current,
                weatherInfoCondition: response.data.current.condition,
                spinner: false,
                alert: null,
                errorMessage: []
            });
            // console.log(response.data);

        } catch(err) {
            // console.log(err.response);
            this.setState({
                cityInfo: [],
                weatherInfo: [],
                spinner: false,
                errorResponse: err.response,
                errorMessage: err.response.data.error.message,
                errorData: [err.response.data.error]
            });

            /*
             if (err.response.status === 400) {
                 this.setState({
                     cityInfo: [],
                     weatherInfo: [],
                     spinner: false,
                     errorMessage: err.response.data.error.message
                 });
             } else if (err.response.data.error.code === 1003) {
                 alert('yee');
             }
             setTimeout(() => this.setState({ errorMessage: [] }), 2500);
             */

        }

        // console.log(this.state.errorMessage);
        // console.log(this.state.cityInfo);
    }

    clearContent = () => {
        this.setState({
            cityInfo: [],
            weatherInfo: [],
            weatherInfoCondition: []
        });
    }

    setAlert = (message) => {
        this.setState({ alert: { message } });
        setTimeout(() => this.setState({ alert: null }), 2500);
    }


    render () {
        const {cityInfo, weatherInfo, weatherInfoCondition, spinner,
               errorMessage, errorResponse, errorData, alert} = this.state;
        const { searchCity, clearContent, setAlert } = this;

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
                                           setAlert={ setAlert }
                                       />
                                       <Alert
                                           alert={ alert }
                                           // errorMessageVisibility={_.size(errorMessage) > 0}
                                           errorMessage={ errorMessage }
                                           errorResponse={ errorResponse }
                                           errorData={ errorData }
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
