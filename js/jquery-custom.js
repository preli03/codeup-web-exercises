"use strict";

$( "body" ).scrollTop( 300 );
$(function () {
    $('li').css('font-size', '20px')
    const h1 = $('h1').html()

    $('h1').css('background-color', 'green')


    $('h3').css('background-color', 'red')


    $('p').css('background-color', 'yellow')

    alert(h1)
/*
    $('h1, p, li').css('background-color', 'yellow')
*/


});



var url = "https://code.jquery.com/color/jquery.color-2.1.2.js";
$.getScript( url, function() {
    $( "#go" ).click(function() {
        $( ".block" )
            .animate({
                backgroundColor: "rgb(255, 180, 180)"
            }, 1000 )
            .delay( 500 )
            .animate({
                backgroundColor: "olive"
            }, 1000 )
            .delay( 500 )
            .animate({
                backgroundColor: "#00f"
            }, 1000 );
    });

});


/*$('.codeup').css('background-color', '#FF0');
$('p').css('font-size', '14px');*/
