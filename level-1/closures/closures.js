
// Problem #1

// Inside the return add a name property that is a function that will console.log(personObj.name)

var outerFunction = (function() {
    var personObj = {
        name: "Bob",
        age: 28,
        gender: "male"
    };

    return {
       // Code here
    }

})();



var name = outerFunction.name();
console.log("Problem 1.  You should see 'Bob' right here -> " + name );



// Problem #2

// Inside the publicObject object add a property called innerFunction1 that is a function that invokes publicObject.innerFunction2

var closureFunc = (function(){

    var publicObject = {
       //code here

        innerFunction2: function(){
            console.log('this is the innerFunction2')
        }

    };
    return publicObject;

})();

closureFunc.innerFunction1();




// Problem #3

// Inside the motivation function create another function called message that will return welcomeText + firstname + lastname

function motivation(firstname, lastname){
    var welcomeText = 'Your doing awesome keep it up    ';

   // code message function here

    return message()

}

motivation('Billy', 'Bob');



// Problem #4

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        console.log('this is the private metod' + person.name + person.age + person.location)
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope
    return {
      // Code here
    };

})();

module.publicMethod();


// Problem #5

// Use closure to console.log the numbers 1 - 5. You will need to use a javascript IFFE

for(var i = 1; i<=5; i++) {

}












