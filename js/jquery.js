"use strict";

$(document).on("keydown' function(event){
    if (event.keyCode == 37) {
        console.log('left arrow pressed');
    }
    if (event.keyCode == 38) {
        console.log('up arrow pressed');
    }
    if (event.keyCode == 39) {
        console.log('right arrow pressed');
    }
    if (event.keyCode == 40) {
        console.log('down arrow pressed');
    }
});




/*

which event is doing the listening?
    which event is it listening for...hover, click...?
    what happens after the event?
    which element is being affected
what about that element is being affected
to what is it being changed/manipulated to?

    click on paragraph, alert that its been clicked
1paragraph:
    2click method....
3write our function-->
*/
