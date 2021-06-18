# Weather App made with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Api
WeatherApi was used for this project

https://www.weatherapi.com/

## Hosted on:
### Vercel: 
https://app-weather-app.vercel.app/

### Netlify 
https://weather-app-veronahub.netlify.app/

![](https://github.com/verona-hub/weather-app/blob/master/src/img/screenshot.png)


#### Implementations: 

- [ ] AirQualityData to be checked what is exported
- [ ] refactor AirQuality component and move the logic to a new Component, use props to access it ( or remove AirQualityData.js)
- [ ] different props => to be done inside Forecast.js component
- [ ] started Context folder => continue or remove from project
- [ ] comment all the functions and code 


#### Css:

- [ ] fix hourly forecast subtitle (time, weather forecast, temperature)
- [ ] create a menu navigation, to display which sections of the landing page you are on (vertical loader bar?)
- [ ] move scroll to top to be dynamic on the lower right side
- [ ] test on mobile and tablet


#### Additions:

- [ ] add fahrenheit converter ( add toggle celsius -> fahrenheit at the top)
- [ ] refactor Navbar to be used with props (header 70, 100 -- add switch case for all the options?)
- [ ] 127.0.0.1/?react_perf   ==> then Chrome Performance tab inside inspector
- [ ] move axios inside useEffect() ?
- [ ] add Dark Mode: #2f2f2f as bgc, marine blue as color ?
- [ ] translate website to croatian and italian


#### Fixes

- [ ] fix process.env for development and production (hide Api key to back end ?)
- [ ] fix Modal cannot cancel the fetching once started
- [ ] fix detect click outside of modal