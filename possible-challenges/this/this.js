/*****************************

 ** IMPLICIT BINDING - left of the dot at call time
 ** EXPLICIT BINDING
 ** new BINDING
 ** window BINDING


*****************************/




/*******

 IMPLICIT BINDING - left of the dot at call time

 *******/

var whoAmI = {
    firwstName: 'Ben',
    lastName: 'Callis',
    age: 28,
    sayName: function() {
        console.log(this.name);
    }
}


whoAmI.sayName(); // This is Implicit binding the this keyword is looking to the left to know its context



var sayNameMixin = function(obj) {
    obj.sayName = function() {
        console.log(this.name)
    }
}

var myName = {
    name: 'sally',
    age: '27'
}

var yourName = {
    name: 'Bob',
    age: '24'
}

sayNameMixin(myName);
sayNameMixin(yourName);

myName.sayName()
yourName.sayName()






function Person(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },
        mother: {
            name: 'Robin',
            sayName: function() {
                console.log(this.name)
            }
        }

    };
};

var sally = Person('Sally', 27);
sally.sayName() // sally
sally.mother.sayName() // Robin





/*******

 EXPLICIT BINDING

 call,apply, bind

 *******/



var myName = function() {
    console.log('Hi My Name is ' + this.name);
}

var languages = ['javascritpt', 'c#' , 'Ruby'];
var chris = {
    name: 'chris',
    age: 36
}

myName.call(chris)



function myNameWithArgs(lang1,lang2, lang3) {
    console.log('Hi My Name is ' + this.name + 'I like to code in these languages' + '  '+ lang1 + ', ' +  lang2 + '  and  ' +  lang3);
}

myNameWithArgs.call(chris,languages[0], languages[1], languages[2]); // This is painful good thing javascript has .apply


myNameWithArgs.apply(chris,languages) // We can jsut pass in the arguments here as an array

myNameWithArgs.bind(chris,languages[0], languages[1], languages[2]); // Same thing as call but it returns us a function











// Create an object called 'user' which has the following properties:
// username --> which is a string
// email --> which is a string
// getUsername --> which is a function that returns the current object's username property.
// *Don't use 'user' instead use the 'this' keyword in this method.*


var user = {
    username: 'bencallis1',
    email: 'bencallis1@gmail.com',
    getUserName: function(){
        return this.username;

}
};



//Now, invoke the getUsername method on the user object and save the username that is returned to the variable 'result';

var result = user.getUserName();






// Write the function called Car that will make the following function invocations work properly.
// Object keys should be: make, model, year, move, and moveCar

function Car (make,model,year, moveCar) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function() {
       this.move += 10;
    }

}

// These are the function invocations that need to work:

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);


prius.moveCar();  //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

// Hint, you'll need to write a moveCar function (method) which is added to every object that is being returned from the Car function.
// You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the correct object (prius vs mustang).





// Below you're given an object, a function, and a function invocation.
// Currently the object on which getUsername should be called has not been specified.
// Therefore getUsername is not accessing the user object but instead is accessing the window object.

var user = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com',
    getUsername : function(){
        return this.user;
    }


};



var finalUsername = user.getUsername();

//Fix the getUsername invocation using .bind so that the user object will be the focal object when getUsername is called. *Hint: .bind returns a function.*








/// Using Call

// functionname.call(obj, functionArguments)
// The first argument must be the object


var user1 = {
    username: 'BillyBob',
    age: 19,
    email: 'billybob21@gmail.com'


};
var user2 = {
    username: 'iliketurtles',
    age: 13,
    email: 'iliketurtles@gmail.com'


};

getUsername = function(){
    return this.username;
}


var getUser = getUsername.call(user1);
var getUser2 = getUsername.call(user2);







// APPLY

var obj = {num:5};
var obj2 = {num:10};

var nums = [1,2,3];

function addThis(a,b,c) {
    return this.num + a + b + c;
}


console.log(addThis.apply(obj,nums));
console.log(addThis.apply(obj2,nums));





// Bind

var bound = addThis.bind(obj);


console.dir(bound(1,2,3));



// This isn't working I'm not sure why
// Still need to figure out why when I bind cars nothing happens I just get undefined

var myMethods = {
    showName: function() {
        console.log(this.name);
    }
}



var cars = {
    data:[
        {name: 'Honda Accord', age: 14},
        {name: 'Tesla Model S', age:2}
    ]
}

cars.showData = myMethods.showName.bind(cars)
cars.showData();





function greet(gender,age,name) {
    var salutation = gender === 'male' ? 'Mr. ' : 'Ms. ';

    if(age > 25) {
        return 'Hello ' + salutation + name + ".";
    }
    else{
        return 'Hey, ' + name + ".";
    }
}

var greetAnAdultMale = greet.bind(null, "male", 45)

greetAnAdultMale('ben callis');