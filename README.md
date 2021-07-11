# Weather App made with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Api:
WeatherApi was used for this project

https://www.weatherapi.com/

## Carousel and Awesome Slider:
[pure-react-carousel](https://www.npmjs.com/package/pure-react-carousel) on [Npm](https://www.npmjs.com/)

[awesome-slider](https://www.npmjs.com/package/react-awesome-slider) on [Npm](https://www.npmjs.com/)

## Hosted on:
### Vercel
https://app-weather-app.vercel.app/

### Netlify 
https://weather-app-veronahub.netlify.app/

![](https://github.com/verona-hub/weather-app/blob/master/src/img/screenshot.png)


### Implementations: 

- [ ] refactor AirQuality component and move the logic to a new Component, use props to access it ( or remove AirQualityColors.js)
- [ ] different props => to be done inside Forecast.js component
- [ ] started Context folder => continue or remove from project
- [ ] comment all the functions and code 
- [x] ~~image optimization~~
- [x] ~~AirQualityData to be checked what is exported~~


#### Css:
- [ ] test on mobile and tablet
- [ ] create a menu navigation, to display which sections of the landing page you are on (vertical loader bar?, desktop only?)
- [ ] move scroll to top to be dynamic on the lower right side
- [x] ~~AirQualityItem fix white border on high value~~
- [x] ~~fixed hourly forecast subtitle (time, weather forecast, temperature)~~
- [x] ~~fixed slider height on max-width 380px~~
- [x] ~~move arrows up on mobile~~
- [x] ~~improve Daily Summary on tablet~~
- [x] ~~remove arrow icons on mobile~~
- [x] ~~fix ForecastHeader on mobile~~


#### Additions:

- [ ] add different pictures for image separators (sunny, cloudy, rainy, night sky) - switch cases or one function
- [ ] add fahrenheit converter ( add toggle celsius -> fahrenheit at the top)
- [ ] refactor Navbar to be used with props (header 70, 100 -- add switch case for all the options?)
- [ ] 127.0.0.1/?react_perf   ==> then Chrome Performance tab inside inspector
- [ ] add Dark Mode: #2f2f2f as bgc, marine blue as color ?
- [ ] translate website to croatian and italian


#### Fixes:
- [ ] fix blue arrows height on mobile
- [ ] scroll to top is not smooth on the homepage
- [ ] fix process.env for development and production (hide Api key to back end ?)
- [ ] fix after aborting a search and making a new one, the new search is buggy
- [ ] fix click outside of modal to leave modal on
- [x] ~~fix Modal cannot cancel the fetching once started~~
- [x] ~~fix detect click outside of modal~~
- [x] ~~fix scroll into view after a search is made~~
- [x] ~~fix footer is visible when modal is on~~