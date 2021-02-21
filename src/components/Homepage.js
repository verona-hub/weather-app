import React, {Component} from 'react';
import Search from "./Search";
import Container from './Container';
import axios from "axios";


class Homepage extends Component {

    state = {
        cityInfo: [],
        weatherInfo: []
    }

    searchCity = async (text) => {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${text}`
        );

        this.setState({ cityInfo: response.data.location });
        /*console.log(response.data);*/
        console.log(this.state.cityInfo);
    }

    render() {
        return (
            <div className='container text-center'>
                <Search
                    searchCity={this.searchCity} />
                <Container
                    cityInfoProp={this.state.cityInfo} />
            </div>
        );
    }
}

export default Homepage;