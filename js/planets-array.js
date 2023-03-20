
'use strict';

(function(){
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];



     //
     //Read each console log below, and write some javascript code to perform
     //the step that it describes
     //
    // add the sun
    planets.unshift('Sun');
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);
    //add pluto to the end

    planets.shift('Pluto');
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets)

    planets.shift('Sun');
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets)

    planets.shift('Pluto');
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets)

    var index = planets.indexOf('Earth');
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(index); console.log(planets)


        planets.reverse();
    console.log("Reversing the order of the planets array.");
        console.log(planets);

        planets.sort();
    console.log("Sorting the planets array.");
        console.log(planets)
})();