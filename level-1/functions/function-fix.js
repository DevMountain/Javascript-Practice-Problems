// Write a function that returns the string hi
// Write a function that takes two numbers and checks to see if those two numbers are equal
// Write a function called addNums that takes 2 numbers as parameters and then returns the total of the two numbers



// Intro to functions 1.1

//function sayHi() {
//    return 'hi'
//}

// Intro to functions 1.2
//function sayHi(msg) {
//    return msg
//}


//sayHi('hello how are you')

function addNums(num1, num2) {
    var total =  num1 + num2;
    return total;
}

addNums(10, 20); //returns 30



function multiply(num1, num2) {
    var total = num1 * num2;
    return total;
}


function isEqual(num1,num2) {
    var isEqual = false;
    if(num1 === num2) {
        isEqual = true;
        return isEqual
    }
}