import React, {Component} from 'react';

// Modules
import axios from "axios";
import * as _ from 'underscore';

// Components
import CityInfo from './CityInfo';
import Search from "./Search";


class Homepage extends Component {

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

    render() {
        return (
            <div className='container text-center'>
                <Search
                    searchCity={this.searchCity}
                    showClearButton={_.size(this.state.cityInfo) > 0}
                    clearContent={this.clearContent}
                />
                <CityInfo
                    cityInfoProp={this.state.cityInfo}
                    spinner={this.state.spinner}
                />
            </div>
        );

    }
}

export default Homepage;