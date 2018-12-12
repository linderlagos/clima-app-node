const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7a856a5e6735ad847830ad89ac1525a6`)

    return resp.data.main.temp;
}




module.exports = {
    getClima
}