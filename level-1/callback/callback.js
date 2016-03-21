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
    console.log("My name is " + firstName + " " + lastName);
    callback(lastName);
}

fullName("Ben", "Callis", function(ln) {
    console.log('Welcome Mr. ' + ln);
});




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
var thePersonName = '';

function first(arr,cb) {
    cb(arr[0]);
}

var firstName = function(firstName){
    thePersonName = firstName;

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



// Write the contain function so that it returns true if 'Colt' is found in the names array
// and false if it is not. Save the response to the message variable


// Code Here for contains

contains(names, 'Colt', function(result){
    var message;
    if(result === true){
        return 'Colt is in the array';
    } else {
        return 'Colt is not in the array';
    }
});




//Write the getUserById function so completes the message in the function call with the information from the correct use in the user array
// and saves the result to the variable sentence.


//Code Here for getUserById

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

getUserById(someUsers, '16t', function(user){
    var sentence;
    return 'The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address;
});



// Write the unique function so that it removes all duplicate strings from the names array,
// invokes the callback function and saves the result to the variable sentence.


// Code here for unique

var moreNames = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
unique(moreNames, function(uniqArr){
    var sentence;
    return 'The new names array with all the duplicate items removed is ' + uniqArr;
});


