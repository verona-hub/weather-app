// Functions for date and time

function timeLocation (arg) {
    const oldDateAndTime = arg.split('-');
    let oldTime = oldDateAndTime[2];
    oldTime = oldTime.split(' ');
    const time = oldTime[1];

    return `${time}h`;
}


function date (date) {
    const oldDateAndTime = date.split('-');
    let oldTime = oldDateAndTime[2];
    oldTime = oldTime.split(' ');

    const year = oldDateAndTime[0];
    const month = oldDateAndTime[1];
    const day = oldTime[0];

    return `${day}-${month}-${year}`;
}


function timeForecast (forecast) {
    return forecast.date.split('-').reverse().join('-');
}


function timeForecastHourly (time) {
    const oldDateAndTime = time.split('-');
    let oldTime = oldDateAndTime[2];
    oldTime = oldTime.split(' ');
    const timeNow = oldTime[1];

    return `${timeNow}h`;
}


export { timeLocation, timeForecast, date, timeForecastHourly };
