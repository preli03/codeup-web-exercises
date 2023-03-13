"use strict";

//conditionals exercise//

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

// function analyzeColor(color) {
//     if(color.toLowerCase() === 'red') {
//         return color + ' is the color of roses'
//     } else if (color.toLowerCase() === 'blue') {
//         return color + ' is the color of the sky'
//     } else {
//         return 'I don\'t know anything about ' + color
//     }
// }

// console.log(analyzeColor('Yellow'))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(color) {
//     var colorLower = color.toLowerCase()
//     switch(colorLower) {
//         case 'red':
//             return color + ' is the color of roses'
//             break;
//         case 'blue':
//             return color + ' is the color of the sky'
//             break;
//         default:
//         return 'I don\'t know anything about ' + color
//     }
// }
//
// console.log(analyzeColor(randomColor))


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(num, total) {
    switch(num) {
        case 0:
            return total
        case 1: return total -= total * .1
        case 2: return total -= total * .25
        case 3: return total -= total * .35
        case 4: return total -= total * .5
        case 5: return total -= total * 1

    }
}
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// // Ask user for bill input
// var billTotal = prompt('What is your total bill')
// // running the function on our variables
// var discountTotal = calculateTotal(luckyNumber, billTotal)
// Alert the user of the calculation
// alert('Your lucky number was: ' +luckyNumber+ '. Your total before the discount is: $' +billTotal+ '. And your total after the discount is: $' +discountTotal)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//Check if number is even or odd and alerts user
var isEven = function(num) {
    if(num % 2 === 0) {
        alert('The number ' +num+ ' is even!')
    } else {
        alert('The number ' +num+ ' is odd!')
    }
}
//Adds 100 to number and alerts user
var plusHundred = function(num) {
    var added = num + 100
    alert('Adding 100 to ' +num+ ' is ' +added)
}
//Checks if number is positive or negative and alerts user
var isPositive = function(num) {
    if (num > 0) {
        alert('The number ' +num+ ' is positive')
    } else {
        alert('The number ' +num+ ' is negative')
    }
}

//Ask user if they want to enter a number and save boolean based on response
var confirmNumber = confirm('Would you like to enter a number?')
// console.log(confirmNumber)
//If they click ok then trigger a prompt
if (confirmNumber) {
    var numberInput = +prompt('Please enter a number')
    // use 3 separate alerts to tell the user
    isEven(numberInput)
    plusHundred(numberInput)
    isPositive(numberInput)
} else {
    alert('Please refresh the page to enter a number')
}
