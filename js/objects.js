"use strict";
var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

(function () {

    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a honk method on the car object
    car.honk = function () {
        alert("Honk! Honk!");
    };

// honk the horn
    car.honk();


    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a logMakeModel method on the car object
    car.logMakeModel = function () {
        console.log("Car make/model is: " + this.make + " " + this.model);
    };

// log the make/model
    car.logMakeModel();


    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: 'Patrick',
        lastName: 'Mahomes',
    }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //var sayHello = function () {
    //return "Hello Patrick Mahomes!"
    //}
    //console.log(person.sayHello)
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //for (var C = 180; R = 250; G = 320){
        //     var car = ''
        //     for (var g = 0; g < i; g++){
        //         car += i;
        //     }
        //     console.log('all items will be placed inside the car '  +car)
        // }
    var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    //shoppers.forEach(function (shoppers){
    //console.log(shoppers.name)
    // })

    shoppers.forEach(function(shoppers) {
        if (shopper.amount <= 200) {
            var discountAmount = shopper.amount * 12;
            var newTotal = shopper.amount - discountAmount;
            console.log("Name: " + shopper.name + ", Amount: " + shopper.amount + ',Discount:' + discountAmount + ", New Total: " + newTotal);
        } else{
            console.log('Sorry you do not recieve a discount')
        }
    });



    //shoppers.forEach((name,) => {
    //console.log(shoppers.name);
    //console.log(shoppers.amount)


    // })
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */ //starship titanic terry jones, gareth roberts-doctor who:Shada, disenchanted - kelley armstrong
        //realms of Tolkien -JRR tolkien, star wars - alan dean foster
    var books = [
            {
                title: 'The Salmon of Doubt',
                author: {
                    firstName: 'Douglas',
                    lastName: 'Adams'
                },
            }, {
                title: 'Doctor Who:Shada',
                author: {
                    firstName: 'Gareth',
                    lastName: 'Roberts'
                },
            }, {
                title: "Disenchanted",
                author: {
                    firstName: 'Kelley',
                    lastName: 'Armstrong',
                }
            }, {
                title: 'Realms of Tolkien',
                author: {
                    firstName: 'JRR',
                    lastName: 'Tolkien'
                },
            }, {
                title: 'Star Wars',
                author: {
                    firstName: 'Alan Dean',
                    lastName: 'Foster'
                },
            }];
    //books.forEach(book[2])
    console.log(books[0].author.lastName + ' ' + books[0].title)
    console.log(books[1].author.lastName + ' ' + books[1].title)
    console.log(books[2].author.lastName + ' ' + books[2].title)
    console.log(books[3].author.lastName + ' ' + books[3].title)
    console.log(books[4].author.lastName + ' ' + books[4].title)
    //console.log(books[0].author.firstName)
    // console.log(books[0].author.lastName)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *
     */
        //for(var i = 0; i < books.length; i ++){
           // console.log()
    //showBookInfo(books[i]);}
   // }
    //books.title.forEach(function(m)

    // {console.log(books)
    //});
    //console.log(book('the index' + 'the book title' + 'fullName');
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
                function createBook(title,author){
                return {
                    title: 'Star Wars',
                    author: {firstName: 'Alan Dean',
                        lastName: 'Foster'}
                }

    }
    //forEach(function(element, index, array)
    //createBook = function (title first name lastname){
    //  return as object
    //}
        //console.log(createBook)": " + this.index + " " + this.author);
    //showBookInfo = function ( title first name lastname){
    //}
   // };
    //console.log(showBookInfo)
    //function createBook(title + '' + author.lastNAme)
})();