// Problem #1

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

//
//
//// Problem #2
//
//// Here is another example of the classic module pattern the difference here is that I am putting my objects inside
//// a variable called publicApi
//// This is a great way to organize your code
//
//
//var closureFunc = (function(){
//
//    var publicApi = {
//        innerObj1 : function(){
//            publicApi.innerObj2();
//        },
//        innerObj2: function(){
//            console.log('this is the innerObj2')
//        }
//
//    };
//    return publicApi;
//
//})();
//
//closureFunc.innerObj1()
//
//
//
//// Problem #3
//
//// We are creating the motivation function that takes in 2 parameters firstname and lastname. Inside the motivation function we
//// have a message function that returns the welcome tex plus the firstname and the last name the '  ' are just being used for spacing
//
//function motivation(firstname, lastname){
//    var welcomeText = 'Your doing awesome keep it up    ';
//
//    function message() {
//        return welcomeText + firstname + '  ' + lastname;
//    }
//
//    return message()
//
//}
//
//motivation('Ben', 'Callis');
//
//
//
//// Problem #4
//
//// Here is an example of the modern module pattern. You'll see this type of pattern a lot with module library's
//
//var module = (function() {
//    var person = {
//        name: "phillip",
//        age: 29,
//        location: 'Utah'
//    };
//
//    var privateMethod = function(){
//        console.log('this is the private metod' + person.name + person.age + person.location)
//    };
//
//    // Anything that is being returned is made public and can be invoked from outside our lexical scope
//    return {
//        publicMethod: function () {
//            privateMethod()
//        }
//    };
//
//})();
//// pass in a argument to the pivate function
//
//module.publicMethod();
//
//
//
//
//// Problem #5
//
//
//// At first glance you might think that this would work, but it doesn't because we haven't given each iteration a scope
//
////THIS WILL NOT WORK
//
//for(var i =1; i<=5; i++) {
//    setTimeout(function() {
//        console.log('i: ' + i);
//    },i*1000)
//}
//
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
//for(var i = 1; i<=5; i++) {
//    (function(i) {
//        setTimeout(function() {
//            console.log('i: ' + i);
//        },i*1000)
//    })(i)
//}
//
//


