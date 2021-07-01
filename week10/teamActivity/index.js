// import QuakesController from './QuakesController.js';

// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.init();


import { getJSON, getLocation } from './utilities.js';
const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';


let latitude;
let longitude;


const locationPromise = getLocation();
locationPromise.then(result => {
    latitude = result.coords.latitude
    longitude = result.coords.longitude
}).then(() => {
    let url = `${baseUrl}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=1000`;
    getJSON(url)
})