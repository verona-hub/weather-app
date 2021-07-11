import { imageSeparatorFunc } from './ImageSeparatorFunction';


const ImageSeparatorWeatherForecast = ({ forecast_3_days }) => {
    // Destructured the fetched forecastday into 1 day forecast
    const { forecastday } = forecast_3_days;
    const [forecast1day] = forecastday;
    // Destructured the fetched weather forecast text
    const { text } = forecast1day.day.condition;
    // Return the image that matches the forecast text
    return imageSeparatorFunc(text);
};


export default ImageSeparatorWeatherForecast;
