
// Write a function called 'findInArray' that takes in two parameters,
// the first representing the array to be searched and the second representing the value to be searched for. Return true

function findInArray(arr,value) {
    var index = arr.indexOf(value);
    if (index >= 0) {
        return true
    }
}



//Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.

function maker() {
    var numbers = []
    for(var i =0; i <= 25; i++) {
        numbers.push(i);
    }
    return numbers
}


//Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array.
// For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]

function looper(arr) {
    var updatedArray = [];
    for(var i = 0; i < arr.length; i++) {
        updatedArray.push(arr[i] + 5)
    }
    return updatedArray
}



// This problem is the same as the above problem except they will need to parse the int if the value is a string

//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

var numbers = [5, '9', 16, 19, '25', '34', 48];

function addTen(arr) {
    newArr = [];

    for(var i = 0; i < arr.length; i++) {
        var newItem = parseInt(arr[i]) + 10;

        newArr.push(newItem);
    }

    return newArr;
}

addTen(numbers);



//Write a function called removeItem that is given two arguments,
// the first is an array called myGroceryList, and the second is an item to remove from myGroceryList.
// If the second argument (the item to remove) matches an item in myGroceryList,
// remove that item from your grocery list and return the new,updated grocery list.

var myGroceryList = ['orange', 'peach', 'apple', 'bread']

function removeItem(arr, item ) {
    var index = arr.indexOf(item);
    if (index >= 0) {
        arr.splice(index, 1);
        console.log('the new array' + arr);
    }
}



//Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list.
// If the item is already in the grocery list, do not add it a second time. If it's not in the list, then add it and return the new list.

function addItem(arr, item ) {
    var index = arr.indexOf(item);
    if (index >= 0) {
       return
    }
    arr.push(item);
    console.log('the new array' + arr);

}



// For loops are especially useful when combined with arrays.
// Create an empty array called myArray, then create a function called arrayFiller that takes one parameter (the parameter will be a number).
// Then fill myArray with the string "item" the number of times indicated by the parameter.
// Return the filled array. For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] .


myArray = [];
function arrayFilter(num) {
    for(var i = 0; i < num; i++) {
        myArray.push('item')
    }
  return myArray;
}


//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.

var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.


function oddsAndEvens(nums) {
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else if(nums[i] % 2 !== 0){
            odds.push(nums[i]);
        }
    }
}





////Create a function that will loop through an array in reverse order.


 function backWards(arr) {
     for (var i = arr.length - 1; i >= 0; i--) {
         console.log(arr[i]);
     }
 }




var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
    arr1.push(i);
}
for(var i = 0; i < num2; i++){
    arr2.push(i);
}


////Above is some code that adds a set of random numbers to both arr1 and arr2.
// Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.

function longer(arr1, arr2) {
    if(arr1.length > arr2.length) {
        console.log('arr1 is longer');
        return arr1;
    } else if(arr1.length < arr2.length) {
        console.log('arr2 is longer');
        return arr2;
    }
}

var longerArray = longer(arr1, arr2);



// Create a function called evenFinder that takes an array as an argument and returns an array with all of the odd numbers removed.


// In javascript it is very common to store multiple related objects in an array:

var itunesData = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];






/* This format is a very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) */

//Create an empty array called users.

var users = [

]


/* Create three user objects to be added to the users array. Each user object should contain the
 following properties: name, email, password, username.*/

var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniteLoop'
};
var user2 = {
    name: 'Jeremy Robertson',
    email: 'jeremy@devmounta.in',
    password: 'somethingAboutCats',
    username: 'JR-4Life'
};

var user3 = {
    name: 'Ben Callis',
    email: 'bencallis1@gmail.com',
    password: 'loveFrontEnd23',
    username: 'bencallis1'
};


users.push(user1,user2,user3)

// Now Fill the array with the four objects

// Code Here


/*Now you have a very common data structure. Twitter is a good use case.
 It's easy to imagine that your followers list on Twitter is an Array full or objects
 and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
 objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
 Once you find the particular indice he's located in, delete him from the array.*/

//Code Here

//This is very much how data works in 'the real world'.







var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

//Above you're given an empty array with four objects. Create a function called 'fillArray' that adds those four objects to the devMountainEmployees array in the same order that they are listed above.

//Code Here

//Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'. Create a function called 'removeCahlan' that loops through the array until it finds Cahlan and then removes that object from the array.

//Code Here


// Finish the function missingNo so that it takes in a sorted array of integers which contains all integers between 0 and N except one value, and returns the missing integer in that array. Example: if you are passed [0,1,2,3,5],
// this is an array between 0 and 5, it is sorted. However, the number 4 is missing. Your function needs to return 4.