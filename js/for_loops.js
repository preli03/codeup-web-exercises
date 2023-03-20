'use strict';


var i = 5;
while (i <4) {
    console.log('while loop iterations #' + i);
    i++;
    console.log("we have broken out of our loop")

}

var z = 0;
do {
    console.log('z is: ', z)
    z += 2;
}  while (z < 5);
        console.log('z outside of the loop: ' , z)


//for loop
//for(1; starting point, 2: condition to be checked, 3: how we iterate through items)
    //for(let i = 0; i < 5; i++) {
       // console.log('loop');
  //  }


    //var school = 'codeup';
   // for(var i = 0; i < school.length; i++){
     //   console.log('iteration is: ', i)

   // }
// i stand for iterator
//for(var i = 10; i >=0; i--){
  //  console.log("iterating backwards: ", i);
//}

//syntax matters
//console.log is your best friend
//console.log("string describing what your logging: ", value that your logging
//

//#2
//function showMultiplicationTable(input) {
    //for(var i = 1; i <= 10; i++){
//console.log(input + 'x' + i + ' = ' + (input * 1))
   // }
//}
//showMultiplicationTable()

//#3
//BREAK IT DOWN
//generate random numbers
//random should be between 20 - 200
//console.log  even or odd
//if / else
// if even -> 'even'
//else if odd -> 'odd'
//function tenRandomNum(){
    //for (var i = 1; i <=10; i++);
    //if (randomNum % 2 ==! 0) {
        //console.log(randomNum + ' is odd ');
//    }
    //console.log(randomNum + ' is even');
//}


//#4 creat a for loop that uses console.log to create the output shown
//
for (var i = 1; i < 10; i++){
    var car = ''
    for (var g = 0; g < i; g++){
        car += i;
    }
    console.log('all items will be placed inside the car '  +car)
}

//#5 Create a for loop that uses console.log. to create the output shown below
for ( i = 100; i >= 5; i-=5){
    console.log(''+ i);
}


let text = '';

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text = text + i;
}

console.log(text);
// Expected output: "012456789"

//Break and Continue // i-- 1-1
// i ++
// i -- // i = 1-1
//

var number = prompt('enter number between 1-50');
    while(true) {
        if (number % 2==0)
            alert('TRY AGAIN:)');
        var num = prompt('enter number between 1-50')
    break


//TODO-increment-a / decrement /b--) console.log(b--); console.log(a++)
   // if ( {
     //   if (i = num){

     //   },
      //  console.log(i),
      ///  console.log('skip number:  '+ i ),
      //  console.log('odd number input: ' + i--);

   // }
    }


