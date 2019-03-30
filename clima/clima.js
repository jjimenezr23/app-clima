const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9fa1050d6fd9c07958fa272495342824&units=metric`)

    return resp.data.main.temp;

}










module.exports = {

    getClima

}