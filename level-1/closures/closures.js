
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



// Problem #2

// Inside the motivation function create another function called message that will return welcomeText + firstname + lastname

function motivation(firstname, lastname){
    var welcomeText = 'Your doing awesome keep it up    ';

   // code message function here

    return message()

}

motivation('Billy', 'Bob');



// Problem #3

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        return welcomeText + firstname + '  ' + lastname;
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope
    return {
      // Code here
    };

})();

module.publicMethod();






















