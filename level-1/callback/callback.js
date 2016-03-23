function loadScript(param1, param2, callback) {
    if(param1 === 'mobile') {
        callback();
    }

    return
}


loadScript('mobile', 'desktop', function() {
    alert('loaded the the mobile script');
});



var  newItems = [];
function addItems(items){
    newItems.push(items);
    return newItems
}

function getInput(options,callback) {
    if(options) {
       callback(options)
        return result
    }
}


getInput(['option1','option2', 'option3'], addItems);



// Make callback optional

function mySandwich(param1, param2, callback) {
    alert('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    if (callback) {
        callback();
    }
}

mySandwich('ham', 'cheese');





var user = {
    id: 1945323,
    fullName: 'null',
    setUserName: function(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
};

// Write a funciton called getUserInfo that take a firstName, lastName, callback and callbackObj as parameters
// Inside the getUserInfo function invoke the callback with the javascrit apply method the first parameter should be the callbackObj
// and the second parameter is a array with firstName and lastName

function getUserInfo(firstName, lastName, callback, callbackObj ) {
    callback.apply(callbackObj, [firstName, lastName]);
}

getUserInfo("Sally", "Rally", user.setUserName, user);




// Here we have a function that will load a script file if the user is on a mobile device
var scriptLoaded = false;

function loadMobileScript(isMobile, callback1) {
    if (isMobile) {
        setTimeout(function () {
            return callback1();
        }, 3000);
    }
}

loadMobileScript(true, function() {
    scriptLoaded = true;
} );



// Here is an axample of using callbacks and event listerns
// This would be used on a button click

function showMessageOnButtonClick(){
    alert('Woohoo!');
}

var el = document.getElementById("btn");
el.addEventListener("click", showMessageOnButtonClick);
​



// Create a function called fullname that takes a first and last name and a callback as parameters
// Inside the setTimeout return the callback invoked, then invoke the loadMobileScript with two parameters true and loadScript

function fullName(firstName, lastName, callback){
    return callback(firstName, lastName);
}


function welcomeMessage(fn,ln) {
    return 'Welcome To DevMountain ' + fn + ' ' + ln;
}

fullName("Ben", "Callis", welcomeMessage);




var callbackString;

//Write code here that will make the variable 'sum' the string of "callback".
setTimeout(function(){
    callbackString += "back";
    done();
}, 2000)
callbackString = "call";






// A function called first is being invoked and passed the names array and an anonymous callback function.
//  Write the body of the function called first so that it invokes the callback while passing in the correct name from the array.


var names = ['Cahlan', 'Jeremy', 'Colt', 'Jeff', 'Tyler', 'Ben'];

function first(arr,cb) {
    return cb(arr[2]);
}

var firstName = function(firstName){
    return firstName;

};

first(names, firstName);


// Write a function called last that correctly invokes the callback function and saves the result to the sentence variable.

//Code Here for last


last(names, function(lastName){
    var sentence;
    return 'The last name in names is ' + lastName;
});




// Write the multiply function so that it invokes the callback function and saves the correct result to the sentence variable.

//Code Here for multiply

multiply(4, 3, function(answer){
    var sentence;
    return 'The answer is ' + answer; //answer should be 12
})



// Write the contains function so that it returns true if 'Colt' is found in the names array
// and false if it is not. Save the response to the message variable


// Code Here for contains


var foundUser = false;

function contains(arr,name,cb) {
    for(var i = 0; i < arr.length; i++ ) {
        if(arr[i] === name) {
            cb(true)
        }
    }
}


contains(names, 'Colt', function(result){
    if(result === true){
        foundUser = true ;
    } else {
        foundUser = false ;
    }
});




// Write the getUserById function so completes the message in the function call with the information from the correct user in the user array
// and saves the result to the variable sentence.

var email = '';
var someUsers = [
    {
        id: '12d',
        email: 'tyler@gmail.com',
        name: 'Tyler',
        address: '167 East 500 North'
    },
    {
        id: '15a',
        email: 'cahlan@gmail.com',
        name: 'Cahlan',
        address: '135 East 320 North'
    },
    {
        id: '16t',
        email: 'ryan@gmail.com',
        name: 'Ryan',
        address: '192 East 32 North'
    },
];


function getUserById(array, value, cb) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i].id === value) {
           cb(array[i])

        }

    }
}

getUserById(someUsers, '16t', function(user){
  email =  user.email

});


// Write the unique function so that it removes all duplicate strings from the names array,
// invokes the callback function and saves the result to the variable sentence.

var someNames = ['Tyler','Jeremy', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Ben', 'Cahlan'];

function unique(arr,cb) {
    var out = [],
        obj = {};

    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 0;
    }

    for (key in obj) {
        out.push(key);
    }
    return cb(out);
}



unique(someNames, function(uniqArr){

    return uniqArr;
});



// CALLBACK HELL

// continuation of code
// Inversion of control

function one(cb) {
    console.log("one")
    setTimeout(cb, 1000)
}

function two(cb) {
    console.log("one")
    setTimeout(cb, 1000)
}

function three(cb) {
    console.log("one")
}

one(function() {
    two(three);
});