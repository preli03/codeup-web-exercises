"use strict";

/*$(document).ready(function() {
    $("#my_audio").get(0).play();
});*/

$(document).keyup(function(event){
    console.log(event.keyCode);
});


// Konami code sequence
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;
// Event listener for keyup events
$(document).keyup(function(event) {
// Check if the key pressed matches the next key in the konami code sequence
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
// If the whole sequence is entered correctly, show the cheat button
        if (konamiIndex === konamiCode.length) {
            alert('You are a winner and have 30 extra lives!')

            // let $cheatButton = $("<button>").text("Click for your prize").attr("id", "cheat-button");
            // $("body").append($cheatButton);
        }
    } else {
// If a wrong key is pressed, reset code index
        konamiIndex = 0;
    }
});
// Click event listener for the cheat button
// $(document).on("click", "#cheat-button", function() {
//     alert("You are a winner and have another 30 lives!");
// });

/*
$(document).on("keydown' function (event) {
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
}
});

*/


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
