import React from 'react';


const Footer = () => {
    return (
        <div className="Footer">
            <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noreferrer">
                <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" className="api_img"/>
            </a>
            <p>Powered by
                <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noreferrer">
                    WeatherAPI.com
                </a>
            </p>
        </div>
    );
};

export default Footer;
