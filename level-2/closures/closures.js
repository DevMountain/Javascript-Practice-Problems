// Here is another example of teh modern module pattern,
// But this time we are passing arguments to our private method through our public method

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





// Problem #4

// Use closure to console.log the numbers 1 - 5. You will need to use a javascript IFFE

for(var i = 1; i<=5; i++) {

}
