const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2bd5f1e07b1a09a96999f1f0295debc1&query=${latitude},${longitude}`
    
    axios.get(url)
    .then(function ({ data }) {
        callback(undefined, `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees, and it feels like ${data.current.feelslike} degrees.
         The humidity is ${data.current.humidity}%, and ${data.current.precip}% chance of rain.`)
    })
    .catch(function (error) {
        if (!error.errno){
            callback('Unable to find location', undefined)
        } else {
            callback('Unable to connect to the Weather API', undefined)
        }
    })
}

module.exports = forecast