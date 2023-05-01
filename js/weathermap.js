"use strict";


//MAPBOX MAP--
import { MAPBOX_KEY, OPEN_WEATHER_KEY } from './keys.js';



mapboxgl.accessToken = MAPBOX_KEY;
navigator.geolocation.getCurrentPosition(function
    (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longtitude;

//starting map marker location
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-97.7430608, 30.267153], // starting position [lng, lat] austin,tx
        zoom: 12, // starting zoom for pin field selected
/*
        doubleClickzoom: true,

*/
    });
    });




//FORECAST API CALL
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${30.267153}&lon=${-97.7430608}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function(data){

        $('#temperature').text('Currently: '+ data.name + ' ' + data.main.temp + '\u00b0 F');
        $('#cloud-condition').text('Cloud Condition: '+ data.weather[0].description);
        $('#feels_like').text('Feels like: '+ data.name + ' ' + data.main.feels_like + '\u00b0 F');
        $('#humidity').text('Low Humidity '+ ' ' + data.main.humidity + '%');


        console.log(data);
    })

    .fail(function (jqXHR,testStatus,errorThrow){
        console.error(errorThrow);
    });
