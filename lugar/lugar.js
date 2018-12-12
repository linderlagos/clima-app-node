const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la cuidad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    /*console.log('Direccions: ', location.formatted_address);
    console.log('Lat: ', coors.lat);
    console.log('lng: ', coors.lng);*/
    //console.log(JSON.stringify(resp.data, undefined, 2));

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}


module.exports = {
    getLugarLatLng
}