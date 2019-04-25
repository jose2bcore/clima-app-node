/**
 * 
 */
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/lugar.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtner el clima',
        demand: true
    }
}).argv;

//argv.direccion


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pude determinar el clima de ${direccion}`;
    }


}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);