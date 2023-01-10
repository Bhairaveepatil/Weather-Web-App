const { error } = require('firebase-functions/logger');
const request = require('request');
const constants = require('../config');


const weatherData = (address, callback) => {
    const url = constants.Urldetails.url + encodeURIComponent(address) + '&appid=' + constants.Urldetails.apiKey;
    // console.log(url)
    request({
        url,
        json: true
    },
        (error, { body }) => {
            // console.log(body);
            if (error) {
                callback("cant fetch data", undefined)
            } else {
                callback(undefined, {
                    temperature: body.main.temp,
                    description: body.weather[0].description,
                    cityName: body.name,
                    humidity: body.main.temp,
                    windSpeed: body.wind.speed,
                    icon: body.weather[0].icon,
                })
            }
        }
    )
};
module.exports = weatherData;