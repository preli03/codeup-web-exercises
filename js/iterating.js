'use strict';


/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */

    var names = ["Alice", "Bob", "Tiff", "Bruce"];
    console.log(names)


/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */

    console.log(names.length);

/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */
//names.forEach(element => console.log(element)); <<<EXAMPLE ALSO WORKS
//console.log(names [0])
//console.log(names [1])
//console.log(names [2])
//console.log(names [3])
//});
/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */
for (var i = 0; i < names.length; i++) {
    console.log('' + i + ' is: ' + names[i]);
}


/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */
//names.forEach(element => console.log(element))
names.forEach(function(element, index, array) {
});


/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *names...forEach(function(name)[
 * console.log(names)
 * });
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5

 */
function first([arr]) {
        var anyNumber = [arr]
        return arr[1];
    }
    console.log(first([arr]));

       function second([arr]){
        return arr[2]
    }
    console.log(second([arr]));
function last([arr]){
    return arr[5]
}
console.log(last([arr]));

    function anyNumber(arr) {
        return arr[arr.length - 1]
    function second(arr) {
        return arr[arr.length - 2]
    function last(arr) {
        return arr[arr.length - 5]
    }}}