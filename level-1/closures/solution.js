// Problem #1




// We are creating the motivation function that takes in 2 parameters firstname and lastname. Inside the motivation function we
// have a message function that returns the welcome tex plus the firstname and the last name the '  ' are just being used for spacing

function motivation(firstname, lastname){
    var welcomeText = 'Your doing awesome keep it up ';

    function message() {
        return welcomeText + firstname  + lastname;
    }

    return message()

}



// This is a great example of using closure to only make the things public that we want public.
// This is an example of the classic module pattern.

var outerFunction = (function() {
    var personObj = {
        name: "Bob",
        age: 28,
        gender: "male"
    };

    return {
        name: function () {
            return personObj.name;
        }
    }
})();

outerFunction.name();






var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        return person.name + ' ' + person.age + ' ' + person.location
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
        publicMethod: function () {
           return privateMethod()
        }
    };

})();

 module.publicMethod();



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


























 //pass in a argument to the private function




// Problem #5


// At first glance you might think that this would work, but it doesn't because we haven't given each iteration a scope

//THIS WILL NOT WORK

for(var i =1; i<=5; i++) {
    setTimeout(function() {
        console.log('i: ' + i);
    },i*1000)
}

//
//
//
//
////THIS WILL WORK
//
//// this will work because of closure.
//// Inside our for loop we have function that takes in i and then an IIFE at the end to invoke the function with the argument of i
//// The reason that we did this was because we needed to create a new scope for every iteration
//
//
//
//for(var i = 1; i<=5; i++) {
//    (function(i) {
//        setTimeout(function() {
//            console.log('i: ' + i);
//        },i*1000)
//    })(i)
//}



