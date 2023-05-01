"use strict";

import { MAPBOX_KEY, OPEN_WEATHER_KEY } from './keys.js';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJlbGkwMyIsImEiOiJjbGd5MXNoMW4wMGphM2dzdTlyb2F5dmhkIn0.ZtkHZdMzPk8vvoJuLvfU5Q';    //starting map marker location
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-97.7430608,30.267153], // starting position [lng, lat] austin,tx
        zoom: 12, // starting zoom
        doubleClickzoom: true,
    });




$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${30.267153}&lon=${-97.7430608}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function(data){
        $('#temperature').text('Current Weather in: '+ data.name + ' ' + data.main.temp + '\u00b0 F');
        $('#cloud-condition').text('Cloud Condition: '+ data.weather[0].description);
        $('#location').text('Current Weather in: '+ data.name + ' ' + data.main.temp + '\u00b0 F');
        $('#temperature').text('Current Weather in: '+ data.name + ' ' + data.main.temp + '\u00b0 F');
        console.log(data);
    })
    .fail(function (jqXHR,testStatus,errorThrow){
        console.error(errorThrow);
    });
