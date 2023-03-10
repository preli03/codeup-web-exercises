"use strict";
/**

console.log('Hello from external Javascript');

alert("Boo Welcome to my Website!");

var favColor = prompt( 'What is your favorite color?');

console.log(favColor);

alert( 'Great, ' + favColor + ' is my favorite color also!');

//.....
 */



var littleMermaid = Number(prompt('How many days do you want to rent littleMermaid?'));
console.log(littleMermaid)

var brotherBear = Number(prompt( 'How many days do you want to rent bortherBear?'));
console.log(brotherBear)

var hercules = Number(prompt('How many days do you want to rent hercules?'));
console.log(hercules)


var pricePerDay = 3;

var totalPrice = ( littleMermaid + brotherBear + hercules) * pricePerDay
console.log("You will have to pay " + totalPrice + " to rent the movies")


function priceForMovies(x, y, z){
  return littleMermaid + brotherBear + hercules;
}

console.log(priceForMovies(littleMermaid, brotherBear, hercules));

alert( "totalPrice )

// var days = ["littleMermaid" + "brotherBear" + "hercules"];

var google = 400;
var amazon = 380;
var facebook = 350;

var gHours =  6;
var aHours = 4;
var fbHours = 10;

var gHours = Number(prompt('How many hrs did you work for google?'));
consol.log(gHours)

var aHours = Number(prompt('How many hrs did you work for aHours?'));
consol.log(aHours)

var fbHours = Number(prompt('How many hrs did you work for fbHours?'));
consol.log(fbHours)


var paycheck = (google * gHours) + ( amazon * aHours ) + ( facebook * fbHours )
console.log("Your paycheck will be " + paycheck + "!")

//A student can be enrolled to a class only if the class is not full and
// the class schedule does not conflict with her current schedule.
if ((cClass.students.length < cClass.maxEnrolled) && (student.classSchedule.indexOf(cClass.startTime) == -1))
{
  student.enroll();
}

// A product offer can be applied only if a person buys more than 2 items,
// and the offer has not expired. Premium members do not need to buy a specific amount of products.
if ((customer.boughtItems.length > 2 && !customer.isPremium) && (offer.expiryDate > new Date().toLocaleString())){
  offer.applyTo(customer.boughtItems)
}

var username = 'codeup';
var password = 'notastrongpassword';

var pwLengthAcceptable = password.length >= 5;
var pwNotIncludesUsername = password.indexOf(username) == -1;
var unLengthAcceptable = username.length <= 20;
var noWhiteSpace = !((username.startsWith(' ') || username.endsWith(' ')) || (password.startsWith(' ') || password.endsWith(' ')));

if (pwLengthAcceptable && pwNotIncludesUsername && unLengthAcceptable && noWhiteSpace) {
  console.log("Your Username and Password are good!")
}
//pw means password, un means username, isPremium means they are a part of the club
//

prompt("Enter passcode");

theNumber = Number(prompt("Pick a number")); console.log("Your number is the square root of " +
  theNumber * theNumber);

var theNumber = Number(prompt("Pick a number")); if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

var theNumber = Number(prompt("Pick a number")); if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {

  alert( "Your number is the square root of")


  console.log("Hey. Why didn't you give me a number?");

  alert("Hey, why didnt you give me a number?")

}


