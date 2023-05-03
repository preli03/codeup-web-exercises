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
        doubleClickzoom: true,
    });

var geocoder = new MapboxGeocoder({accessToken: MAPBOX_KEY});
map.addControl(geocoder);

    /*
            draggable: true // make the marker draggable
    */
let marker = new mapboxgl.Marker({
    draggable: true // make the marker draggable

})

    // Add marker on click and remove previous marker
map.on("click", function (e) {
    if (marker) {
        marker.remove();
    }
//FORECAST API CALL

    const lat = e.lngLat.lat;
    const lon = e.lngLat.lng;
//FORECAST API CALL
    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
        .done(function (data) {
            $('#temperature').text('Currently: ' + data.name + ' ' + data.main.temp + '\u00b0 F');
            $('#cloud-condition').text('Cloud Condition: ' + data.weather[0].description);
            $('#feels_like').text('Feels like: ' + data.name + ' ' + data.main.feels_like + '\u00b0 F');
            $('#humidity').text('Amazing ' + ' ' + data.main.humidity + '%');

            console.log(data);
        })
        .fail(function (jqXHR, testStatus, errorThrow) {
            console.error(errorThrow);
        });

    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
        .done(function (data) {
            const forecast = data.list.filter(function (f) {
                // filter out forecasts that are not at noon
                return f.dt_txt.includes('12:00:00');
            });

            // show forecast for the next 5 days
            for (let i = 0; i < 5; i++) {
                const day = forecast[i];
                const date = new Date(day.dt_txt);

                $('#forecast-day-' + i).text(date.toLocaleDateString('en-US', {weekday: 'short'}));
                $('#forecast-icon-' + i).attr('src', `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`);
                $('#forecast-temp-' + i).text(Math.round(day.main.temp) + '\u00b0 F');
            }
        });

    $('#search-form').on('submit', function (event) {
        event.preventDefault();
        const query = $('#search').val();
        // Extract the latitude and longitude from the API response
        const latitude = data.features[0].center;
        const longitude = data.features[0].center[0];
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    })
            // add a popup to the marker with the current temperature

            // Do something with the latitude and longitude, such as update the map
            // or make another API request for weather data
});



