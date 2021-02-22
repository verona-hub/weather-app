import React, {Component} from 'react';
import axios from "axios";

// Components
import Container from './Container';
import Search from "./Search";


class Homepage extends Component {

    state = {
        cityInfo: [],
        weatherInfo: [],
        spinner: false
    }

    searchCity = async (text) => {
        this.setState({ loading: true })

        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${text}`
        );

        this.setState({
            cityInfo: response.data.location,
            loading: false
        });

        /*console.log(response.data);*/
        /*console.log(this.state.cityInfo);*/
    }

    render() {
        return (
            <div className='container text-center'>
                <Search
                    searchCity={this.searchCity} />
                <Container
                    cityInfoProp={this.state.cityInfo}
                    spinner={this.state.spinner}
                />
            </div>
        );

    }
}

export default Homepage;