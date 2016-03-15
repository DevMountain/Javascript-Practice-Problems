// Create a 'numbers' object with the following properties age, score, length, and year.
// Set the age property to 30, the score property to 100, the length property to 12, and the year property to 2015.

var number = {
    age: 30,
    score: 100,
    length: 12,
    year: 2016
};


// Create a function called objectLooper that when called will loop through your object and change all of the values to be 20.

function objectLooper(obj) {
    for(key in obj) {
        obj[key] = 20;
        console.log(key + obj[key] );
    }

}


//Create a constructor function that creates a person object. This person object should have a firstname, lastname, age property

function person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

}

var user1 = new person("John", "Doe", 50);
var user2 = new person("Sally", "Rally", 48);



// Create a function called statesLooper that when invoked will loop through your states object and if the states
// value is greater than 3000000, set it to 0.

var state = {
    utah: 2942902,
    texas: 26956958,
    california: 38802500
};


function stateLooper(arr) {
    for(key in arr) {
        if(arr[key] > 3000000 ) {
            arr[key] = 0;

        }
    }
}



// Loop through an object and remove any properties whose values are falsy. Then update the object with new information.

var user = {
    name: 'Sally Rally',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'SallyRally801',
    age: 0

}


/*Above you're given a user object. Create a function called removeFalsy that loops through the user object and checks to make sure that each value is truthy.
If it's not truthy, remove it from the object, then return the revised object. */

function removeFalsy(arr) {
    for(key in arr) {
        if(arr[key] == false || arr[key] == null || arr[key] == undefined ) {
            delete arr[key];
        }
    }
    return arr
}

//Invoke the removeFalsy function. and save the result to a variable called cleanUser.
 var cleanUser= removeFalsy(user)



// Code Here

//Once you get your truthy object, create a function called personalize that changes the remaining values in
// cleanUser to be: name: 'Ryan', pwHash: '43df90w_h', username: 'ryanleeeallred'.

function personalize(obj) {
         for(key in obj) {
             if(key === 'name') {
                 obj[key] = 'Ryan';
             } else if(key === 'pwHash') {
                 obj[key] = '43df90w_h';
             }else if(key === 'username') {
                 obj[key] = 'ryanleeeallred';
             }
         }
    return obj
}




//OBJECTS + FUNCTIONS

//// Constructor functions
//
//function Rabbit(type) {
//    this.type = type;
//}
//
//var killerRabbit = new Rabbit("killer");
//var blackRabbit = new Rabbit("black");
//console.log(blackRabbit.type);
//// → black




// Create a function called getPerson. Inside that function create a person object with a name property (string) and an age property (number) and return it.

// Create a newCar function that takes in two parameters: make and model. Using those parameters create a car object with make and model properties and return it from the newCar function

// Create a function called canDrive that takes in a person object that has a name and an age property.




    var user1 = {
        name: 'ben callis',
        gender: 'male',
        username: 'perfectStorm1',
        email: 'perfectStorm1@gmail.com',
        pwHash: 'U+Ldlngx2BYQk',
        age: 22

    }




// Create a function called updateEmail that takes in a user object and a newEmail string.
// Replace the user's current email address (assigned to the email property) with the newEmail string, then return the updated user object.


function updateEmail(obj, str) {
    for(key in obj) {
        if(key === 'email') {
            obj[key] = str
        }
    }
    return obj
}




// Write a function that takes a person obj and checks if the person is old enough to enter the club.
// If they are 21 or older return true else return false


function isOldEnough(obj) {
    for(key in obj) {
        if(key === 'age' && obj[key] >= 21) {
            return true;

        }
        return false
    }

}



// Create a function called addRole that takes in a user object and a string. This string will represent the user's new role in the system (i.e. admin, creator, editor, visitor).
// Create a new property on the user object called "role" and assign the passed in string to it, then return the updated user object.

// Create a function called removeRole that takes in a user object. Delete the user's role property and return the updated user.

// Create a function called unknownPerson that takes in a person object.
// This person object will have properties such as name, age, gender, etc. Loop through all the properties of the object and set each value to "Unknown", then return the object.
// For example, if "person" is {name: "Dolph L.", age: 33} then the function would return {name: "Unknown", age: "Unknown"}.


// Create a function called truthyObject that takes in a user object.
// This function should loop through the user object checking to make sure that each of its values is truthy.
// If a value is not truthy then remove it from the object. Return the updated object after looping through it.