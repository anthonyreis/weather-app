const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW50aG9ueXJlaXMiLCJhIjoiY2tqMWw5N2U5MXJwcTJwbXl2OHI4ZHp1ZiJ9.5Wn4zjJSeSXkuB9eEKsJhA'
    
    axios.get(url)
    .then(function ({ data }) {
        callback(undefined, {
            latitude: data.features[0].center[1],
            longitude: data.features[0].center[0],
            location: data.features[0].place_name
        })
    })
    .catch(function (error) {
        if (!error.errno){
            callback('Unable to find location', undefined)
        }else {
            callback('Unable to connect to the Geocoding API', undefined)
        }
        
    })
}

module.exports = geocode