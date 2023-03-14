"use strict";

/* ########################################################################## */

/** TODO:
    * Prompt the user for a color when the page loads, and pass the input from the
* user to your `analyzeColor` function. Alert the return value from your
* function to show it to the user.
*/
    var colorInput = prompt('Please enter a color')
    alert(analyzeColor(colorInput))

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color.toLowerCase() == "red") {
        return color + ' is the color of roses'
    } else if (color.toLowerCase() == "blue") {
        return color + "is the color of the sky"
    } else {
        return 'I don\'t know anything about ' + color
    }

}

console.log(analyzeColor("Yellow"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'burgundy'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

    console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    var colorLower = color.toLowerCase()
    switch(colorLower) {
        case "red":
            return color + ' is the color of roses'
        case "blue":
            return color + ' is the color of the sky'
        default:
            return 'I don\'t know anything about ' + color
    }
}

    console.log(analyzeColor(randomColor))

