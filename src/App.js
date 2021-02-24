import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/About';
import MainInfo from './components/MainInfo';
import Navbar from './components/Navbar';
import Search from "./components/Search";


class App extends Component {

    state = {
        cityInfo: [],
        weatherInfo: [],
        weatherInfoCondition: [],
        spinner: false
    }

    searchCity = async (text) => {

        this.setState({ spinner: true })

        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${text}`
            ).then(x => new Promise(resolve => setTimeout(() => resolve(x), 1500)));

            this.setState({
                cityInfo: response.data.location,
                weatherInfo: response.data.current,
                weatherInfoCondition: response.data.current.condition,
                spinner: false
            });

        } catch(err) {
            if (err.response.status === 400) {
                // alert(err.message);
                this.setState({
                    cityInfo: [],
                    weatherInfo: [],
                    spinner: false
                })
            }
        }
        /*console.log(response.data);*/
        /*console.log(this.state.cityInfo);*/
    }

    clearContent = () => {
        this.setState({
            cityInfo: [],
            weatherInfo: [],
            weatherInfoCondition: []
        });
    }

    render () {
        return (
            <BrowserRouter>
                <Navbar/>
                <div className="container text-center">
                    <Switch>
                        <Route exact path="/"
                               render={ () => (
                                   <Fragment>
                                       <Search
                                           searchCity={this.searchCity}
                                           clearContent={this.clearContent}
                                           showClearButton={_.size(this.state.cityInfo) > 0 && _.size(this.state.weatherInfo) > 0}
                                       />
                                       <MainInfo
                                           cityInfoProp={this.state.cityInfo}
                                           weatherInfoProp={this.state.weatherInfo}
                                           weatherInfoCondition={this.state.weatherInfoCondition}
                                           clearContent={this.clearContent}
                                           spinner={this.state.spinner}
                                       />
                                   </Fragment>
                               )}
                        />
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
