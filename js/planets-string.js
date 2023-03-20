(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

        var planetsBreak = planetsArray.join("<br/>")
          console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet...>>>IDKIDKIDKIDKIDKIDK....
     */
    var listPlanets = planetsString.split("|");
    var brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
    console.log(listPlanets);
    console.log(brlistPlanets);


       // document.getElementById('planets').innerHTML=planetsBreak

        //console.log(planetsBreak)


})();