"use strict";


$(function () {
    $('h1').click(() => {
        $('h1').css('background-color', 'red')
    })

    $('p').dblclick(() => {
        $('p').css('font-size', '18px')
    })

    $('li').hover(() => {
        $('li').css('color', 'red')
    }, () => {
        $('li').css('color', 'black')

    })
    $('li').css('font-size', '18px')

    $('h5').css('background-color', 'orange')

    $('h3').css('background-color', 'red')

    $('p').css('background-color', 'yellow')

    /*
        $('h1, p, li').css('background-color', 'yellow')
    */
    $('#codeup').click(function () {
        alert('h1 with id "codeup" was clicked');

    });

});


/*$('.codeup').css('background-color', '#FF0');
$('p').css('font-size', '14px');*/
