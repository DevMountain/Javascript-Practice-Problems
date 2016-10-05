
// Problem #1

// Inside the return add a name property that is a function that will console.log(personObj.name)


// Basic Module pattern

var outerFunction = (function() {
    var personObj = {
        name: "Bob",
        age: 28,
        gender: "male"
    };

    return {
       name: function() {
           console.log(personObj.name)
       }
    }

})();

outerFunction.name();


// Problem #2

// Inside the motivation function create another function called message that will return welcomeText + firstname + lastname


function motivation(firstname, lastname){
    var welcomeText = 'Your doing awesome keep it up    ';

   function message() {
       return welcomeText + '' + firstname + '' + lastname
   }

    return message()

}

motivation('Billy', 'Bob');



// Problem #3

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope


// Module Pattern

var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        return person.name;
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope
    return {
      publicMethod : function() {
          return privateMethod()
      }
    };

})();

module.publicMethod();





// Module Pattern

var anotherModule = (function () {

    var privateMethod = function (name) {
        console.log("this is the private method being called from anotherMethod")
        console.log(name);
    };

    var someMethod = function () {
        console.log('someMethod');
    };

    var anotherMethod = function (name) {
        privateMethod(name)
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();


anotherModule.someMethod();
anotherModule.anotherMethod("Chris");













var count = 0;

function countNum() {
    return console.log(count += 1)
}

countNum();






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






var counter = counterFactory(100);

counter.dec();












