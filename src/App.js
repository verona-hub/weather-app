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

        try {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${text}`
            ).then(x => new Promise(resolve => setTimeout(() => resolve(x), 1500)));

            this.setState({
                cityInfo: response.data.location,
                spinner: false
            });

        } catch(err) {
            if(err.response){
                console.log(`Error response data:  ${JSON.stringify(err.response.data.error.message)}`);
                console.log(`Error response status: ${err.response.status}`);
                console.log(`Error response header: ${JSON.stringify(err.response.headers)}`);
            }
            else if(err.request){
                console.log(err.request);
            }
            else {
                console.log(err.message);
            }
            console.log(err.config);
        }

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
                                           clearText={this.clearContent}
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
