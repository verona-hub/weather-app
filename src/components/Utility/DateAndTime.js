
function timeLocation (localtime) {

    const oldDateAndTime = localtime.split('-');
    const oldTime = oldDateAndTime[2];
    const oldDay = oldTime.split(' ');
    const time = oldDay[1];

    return `${time}h`;
}



function timeForecast (forecast) {
    return forecast.date.split('-').reverse().join('-');
}



function date (localtime) {

    const oldDateAndTime = localtime.split('-');
    const oldTime = oldDateAndTime[2];
    const oldDay = oldTime.split(' ');
    const year = oldDateAndTime[0];
    const month = oldDateAndTime[1];
    const day = oldDay[0];

    return `${day}-${month}-${year}`;
}


export { timeLocation, timeForecast, date };
