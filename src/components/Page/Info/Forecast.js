import React from 'react';

// Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';


// Components
import ForecastSlider from './ForecastData/ForecastSlider';


const Weather = ({ location, forecast_3_days }) => {

    const { forecastday } = forecast_3_days;

    const forecast1day = forecastday[0];
    const forecast2days = forecastday[1];
    const forecast3days = forecastday[2];

    return (
        <div>
            <div className="card Forecast_wrapper">
                <AwesomeSlider
                    className="slider "
                    animation="fallAnimation"
                >
                    <div>
                        <ForecastSlider
                            forecast={ forecast1day }
                            title='Weather Forecast: Day 1'
                            when=' Today: '
                            location={ location }
                        />
                    </div>

                    <div>
                        <ForecastSlider
                            forecast={ forecast2days }
                            title='Weather Forecast: Day 2'
                            when=' Tomorrow: '
                            location={ location }
                        />
                    </div>

                    <div>
                        <ForecastSlider
                            forecast={ forecast3days }
                            title='Weather Forecast: Day 3'
                            when=' The day after tomorrow: '
                            location={ location }
                        />
                    </div>

                </AwesomeSlider>
            </div>
            <div className="bullets-text">
                <p> Day 1</p>
                <p> Day 2 </p>
                <p> Day 3 </p>
            </div>
        </div>
    );
};


export default Weather;
