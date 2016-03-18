
// Inside the return create a  property called publicMethod with a value that is a function that has 3 parameters a name, age and location,
// this function returns privateMethod which also has 3 parameters a name, age and location.
var module2 = (function() {

    var privateMethod = function(name, age, location){
        return name + ' ' + age + ' ' + location
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
        publicMethod: function (name,age,location) {
            return privateMethod(name,age,location)
        }
    };

})();

module2.publicMethod('ben', 29, 'UTAH');




// Wrtie a functionFactory that takes a number parameter and then retrurns another function
var functionFactory = function(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

//
//Write a function, saySomething that takes an parameter  `string`.
//This function contains another function, `words` which returns string and is immediately called inside the function `saySomething`.



function saySomething(string){
    var words = function(){
	  alert(string);
	 };
    words(string)
}

saySomething('what is this')





// Write a function that takes a name parameter that has a innerFunction that takes a name2 parameter

var nameTester = function(name1) {

    function innerFunction(name2) {
        return name1 + " " +  name2;

    };

    return innerFunction
};


var newName = nameTester('Billy');
newName('Bob');

firstNameFarmer('sally')






// Use closure to console.log the numbers 1 - 5. You will need to use a javascript IFFE

for(var i = 1; i<=5; i++) {

}




var numberFactory = function(num1) {
    return function(num2) {
        return num1 * num2;
    }

}


var times5 = numberFactory(5);

times5(3) // this would return 1
/* Make the following code work:

 funcArray[0]() //returns 0
 funcArray[1]() //returns 1
 funcArray[2]() //returns 2
 funcArray[3]() //returns 3

 * Hint: Don't let this fool you. Break down what's really happening here. */

// Below is the solution Code. Try testing yourself in the console and then you can look here to check your work. - UNDER CONSTRUCTION. sorry...

var thefunc = function(number){
    return function() {
        //console.log(number);
        return number;
    }
}

funcArray = [thefunc(0), thefunc(1), thefunc(2), thefunc(3)];


function add(num1){
    if (arguments.length === 1) {
        var num1 = arguments[0];
        return function(num2) {
            return num1 + num2;
        }
    } else if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    }
}



var sumFunc = add(9);
var sumMulti = sumFunc(2);






function add () {
    if (arguments.length === 1) {
        var num1 = arguments[0];
        return function (num2) {
            return num1 + num2;
        }
    }
    else if (arguments.length > 1) {
        var i;
        var sumInfinite = 0;
        for (i = 0; i < arguments.length; i = i + 1){
            sumInfinite += arguments[i];

        }
        return sumInfinite;
    }
}


var bunchOfArguments = add(1,2,3,4,5,6,7);



// Fun example of closure, this function would fade the background of a element id thats passed to it

function fade(id) {
    var dom = document.getElementById(id),
        level = 1
    function step() {
        var h = level.toString(16);
        dom.style.backgroundColor = '#FFFFFF' + h + h;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    }
    setTimeout(step, 100)
}





