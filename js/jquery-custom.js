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


    $('h3').css('background-color', 'red')

    $('p').css('background-color', 'yellow')

    /*
        $('h1, p, li').css('background-color', 'yellow')
    */



});


/*$('.codeup').css('background-color', '#FF0');
$('p').css('font-size', '14px');*/
