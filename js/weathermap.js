"use strict";


//MAPBOX MAP--
import { MAPBOX_KEY, OPEN_WEATHER_KEY } from './keys.js';



mapboxgl.accessToken = MAPBOX_KEY;
/*navigator.geolocation.getCurrentPosition(function
    (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longtitude;*/

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




//FORECAST API CALL
map.on('click', function(e) {
    const lat = e.lngLat.lat;
    const lon = e.lngLat.lng;

    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
        .done(function(data) {
            $('#temperature').text('Currently: ' + data.name + ' ' + data.main.temp + '\u00b0 F');
            $('#cloud-condition').text('Cloud Condition: ' + data.weather[0].description);
            $('#feels_like').text('Feels like: ' + data.name + ' ' + data.main.feels_like + '\u00b0 F');
            $('#humidity').text('Low Humidity ' + ' ' + data.main.humidity + '%');

            console.log(data);
        })
        .fail(function(jqXHR, testStatus, errorThrow) {
            console.error(errorThrow);
        });

    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
        .done(function(data) {
            const forecast = data.list.filter(function(f) {
                // filter out forecasts that are not at noon
                return f.dt_txt.includes('12:00:00');
            });

            // show forecast for the next 5 days
            for (let i = 0; i < 5; i++) {
                const day = forecast[i];
                const date = new Date(day.dt_txt);

                $('#forecast-day-' + i).text(date.toLocaleDateString('en-US', { weekday: 'short' }));
                $('#forecast-icon-' + i).attr('src', `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`);
                $('#forecast-temp-' + i).text(Math.round(day.main.temp) + '\u00b0 F');
                console.log(data);
            }
        })
        .fail(function(jqXHR, testStatus, errorThrow) {
            console.error(errorThrow);
        });
});

