const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6a6428996d2d66a86edd8f12b6f69863&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}