// Multiple Choice Questions

// What is a binary function
// What is a unary function




// Create a function called makeBigger that takes in two parameters,
// the first parameter should represent a starting number and the second is how many times the starting number should be incremented.

function makeBigger(num1, num2) {
    var newNum = 0;
    for(var i = 0; i <= num2; i++) {
        newNum = i;

    }
    return newNum + num1
}




// If statements are all about making decisions based on certain parameters.
// Let's decide what you should wear today based on the temperature outside and the weather.
// Create a function called myOutfit that takes in a temperature and a weather parameter.
// <ul><li>If the temperature is greater than or equal to 72 and weather is "rainy" return "shorts and t-shirt, bring umbrella".
// </li><li>If the temperature is greater than or equal to 72 and the weather is "sunny" return "shorts and t-shirt".</li><li>
// If the temperature is less than 72 and the weather is "rainy" return "long pants and rain coat".
// </li><li>If the temperature is less than 72 and the weather is "sunny" return "long pants and sweater".</li>




// Create a function called exponent that takes in two parameters,
// the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many
// times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8

function exponent(num, times) {
   return Math.pow(num, times);
}





// Write a function that accepts 1 parameter and then checks if that parameter is a prime number

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}


// Using the isPrime function write another function that take a number as a parameter, this number represents how far we need to check
// for prime numbers. If the number is prime then push it to the primeNumbers array


 function howManyPrimes(max) {
     var primeNumbers = []
     for(var i = 0; i < max; i++){
         if(isPrime(i)) primeNumbers.push(i);
     }
     return primeNumbers
 }




// Write a function called 'reverse' that takes is given str as it's only argument and returns that string after it's been reversed

function reverse(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(reverse(32243));


// Have the function exOh(str) take the str parameter being passed and return
// true if there is an equal number of x's and o's, otherwise return false.
// Only these two letters will be entered in the string, no punctuation or numbers.
// For example: if str is "oxooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function exOh(str) {
    var  arrayX = [],
        arrayO = [];

    for(var i = 0; i < str.length; i++){
        if(str[i] === 'x') arrayX.push(i);
        if(str[i] === 'o') arrayO.push(i);
    }
    if(arrayX.length === arrayO.length) return true;
    return false

}



// Write a function that takes a string parameter and counts how many vowels the string has

function vowelCount(str1)
{
    var vowels = 'aeiouAEIOU';
    var count = 0;

    for(var i = 0; i < str1.length ; i++)
    {
        if (vowels.indexOf(str1[i]) !== -1)
        {
            count += 1;
        }

    }
    return count;
}
console.log(vowelCount("Devmountain is the Best place to learn how to code"));



// Have the function letterCapitalize(str) take the str parameter being passed,
// capitalize the first letter of each word, and return the altered string. Words will be separated by only one space.
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


function letterCapitalize(str)
{
    var array1 = str.split(' ');
    var newarray1 = [];

    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(letterCapitalize("i want to be bigger"));



// Write a function called longestWord that will find the the longest word in a string

function longestWord(str)
{
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for(var i = 1 ; i < array1.length ; i++)
    {
        if(result.length < array1[i].length)
        {
            result = array1[i];
        }
    }
    return result;
}

console.log(longestWord('Dev Mountain is full of Functions'));





// HIGHER ORDER FUNCTIONS

// Write a function that adds from two invocations
// addTwo(3)(4) would equal 7

function addTwo(x) {
    return function(y) {
        return x + y;
    }

}
addTwo(3)(4);




function add(x, y) {
    return x + y;
}


function mul(x,y) {
    return x * y;
}
// ADVANCED CLOSURE
// write a function that takes a binary function like add or multipy and then make that function callable


function callFunction(binary) {
    return function(x) {
        return function(y) {
            return binary(x,y);
        };
    };
}

var addAnother = callFunction(add);
addAnother(3)(4);



// CURRY UP!!!


// Write a function that takes an argument and a function, and returns a function that
// can supply a second argument.
// This is known as currying

//add3 = curryFunc(add,3)
//add3(4) // 7

function curryFunc(func,firstArg) {
    return function(secondArg) {
        return func(firstArg, secondArg)
    };
}

add3 = curryFunc(add,3)
add3(4)


// OR

function curry(func,firstArg) {
    return callFunction(func)(firstArg)
}



// If you wanted to do the same thing but with any number of arguments then
// I wouldn't suggest this because it's ugly and we are forcing args to be an array

function aBunchOfCurry(func) {
    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
    return function() {
        return func.apply(
            null, args.concat(slice.call(arguments,0))
        )
    };
}


// ES6

//function curryES6(func, ...first){
//    return function (...second) {
//        return func(...first, ...second);
//    };
//}



// Thinking in terms of functional programming

var inc1 = add(1);
var inc2 = callFunction(add)(1);
var inc3 = curryFunc(add,1);






// Write a methodize, a function that converts a binary function to a method
// This is a great way to reuse a function
//Lets say we have a function that is only slightly different than a previous function we have written
// We could use this approach to solve that propblem instaed of rewriting a another function



function methodize(func) {
    return function(y) {
        return func(this, y);
    };
}

Number.prototype.add = methodize(add);
(3).add(4) // 7





// Write demethodize, a function that converts a method to a binary function
// You will need to use call

//demethodize(Number.prototype.add)(5,6) //11

function demethodize(func) {
    return function(that, y) {
        return func.call(that, y);
    };
}
demethodize(Number.prototype.add)(5,6)


/// If you wanted to do this in ES6 you would just use the spread operator






// Write a function called twice that takes a binary function 'add, multiply'
// and returns a unary function 'a function with only on argument' that passes it's argument to the binary function twice

function twice(binaryFunc) {
    // Returns a function with only 1 argument
    return function(a) {
        // Here we are calling the binaryFunc with our argument twice
        return binaryFunc(a,a);
    };
}


var double = twice(add);
double(11) // Should output 22

var square = twice(mul);
square(11) // Should out put 121



/// Write a function called composeu that takes two unary functions and returns
// a unary function that calls them both

function composeu(unary1, unary2) {
    return function(a) {
        return unary2(unary1(a));
    }
}

composeu(double,square)(3);  // Should output  36



// Write a function called composeb that takes two binary functions
// and returns a function that calls them both

function composeb(binary1, binary2) {
    return function(a,b,c) {
        // We are passing in the result of binary1(a,b) and then passing in c to binary 2 as arguments
        return binary2(binary1(a,b), c);
    }

}

composeb(add, mul)(2,3,5) // Should output 25





// Write a function that allows another function to only be called once

// This is a good way to make sure a function is only called once
// Think banking or security applications
// The nice thing about composing this function with the add function we already wrote is we dont have to rewrite the add the function again


function once(func) {
    return function(){
        var f = func;
        func = null; // Here we are nulling out the func after we set the func to f that way if we try to call the func again it's null so it will not work
        return f.apply(
            this,
            arguments
        );
    };
}

// You could also do the same thing using a count variable or a true/false variable



addOnce = once(add);
addOnce(3,4);  // 7
addOnce(3,4);  // throws error





/// CLOSURE PROBLEM

// Write a factory function that returns two functions that implement up/down counter

function counterFactory(value) {
    return {
        inc: function() {
            value += 1;
            return value;
        },
        dec: function() {
            value -= 1;
            return value;
        }
    }

}


counter = counterFactory(10);
counter.inc(); //11
counter.dec(); // 10

//Write a JavaScript function that generates all combinations of a string.



// Make a revocable function that takes a function
// and returns a revoke function that denies access to the nice function
// and an invoke function that can invoke the function  until it is revoked


// An example of using something like this would be if you wanted to timeout a function
// Where when the time ran out the function would no longer work and would throw a error
// Use the module pattern

function revocable(func) {
    return {
        invoke: function() {
            return func.apply(
                this,
                arguments
            );
        },
        revoke: function() {
            nice = null;
        }
     };
}

temp = revocable(alert);
temp.invoke(7); // alert 7
temp.revoke();
temp.invoke(8) // throw





function substrings(str1)
{
    var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++)
    {
        array1[x]=str1.substring(x, y);
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("Dev");










// ADVANCED JAVASRIPT/INTRO TO FUNCTIONAL


// The unit function will create objects that contain the bind method
// The bind method takes a function and receives the value that was used to initialize the unit
// and passes that value to the function.

//// Identity MONAD
//
//function MONAD() {
//    return function unit(value) {
//        var monad = Object.create(null);
//        monad.bind = function (func) {
//            return func(value);
//        };
//        return monad;
//    };
//}
//
//// To call it
//
//var unit = MONAD();
//var monad = unit('Hello world.');
//monad.bind(alert)




function MONAD() {
    var prototype = Object.create(null);
    function unit(value) {
        var monad = Object.create(prototype);
        monad.bind = function (func) {
            return func(value);
        };
        return monad;
    }
    unit.method = function(name, func) {
        prototype[name] = func;
        return unit;
    };
    return unit
}


































