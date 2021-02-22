import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import About from './components/About';
import CityInfo from './components/CityInfo';
import Navbar from './components/Navbar';
import Search from "./components/Search";



class App extends Component {
    state = {
        cityInfo: [],
        weatherInfo: [],
        spinner: false
    }

    searchCity = async (text) => {
        this.setState({ spinner: true })

        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${text}`
        ).then(x => new Promise(resolve => setTimeout(() => resolve(x), 1500)));

        this.setState({
            cityInfo: response.data.location,
            spinner: false
        });

        /*console.log(response.data);*/
        /*console.log(this.state.cityInfo);*/
    }

    clearContent = () => {
        this.setState({
            cityInfo: []
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
                                           showClearButton={_.size(this.state.cityInfo) > 0}
                                           clearContent={this.clearContent}
                                       />
                                       <CityInfo
                                           cityInfoProp={this.state.cityInfo}
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
