









//Add 10 to numbers and strings of numbers in an array.

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
// If the second argument (the item to remove) matches an item in myGroceryList, remove that item from your grocery list and return the new,updated grocery list.

//Code Here

//Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. If the item is already in the grocery list, do not add it a second time. If it's not in the list, then add it and return the new list.

//Code Here





//For loops are especially useful when combined with arrays.
// Create an empty array called myArray, then create a function called arrayFiller that takes one parameter (the parameter will be a number).
// Then fill myArray with the string "item" the number of times indicated by the parameter.
// Return the filled array. For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] .



//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.

var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.




//Write a function called 'findInArray' that takes in two parameters, the first representing the array to be searched and the second representing the value to be searched for. Return true




//Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.




//Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array.
// For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]





////Create a function that will loop through an array in reverse order.
//
//var num1 = Math.floor(Math.random() * (30 - 0) + 0);
//var num2 = Math.floor(Math.random() * (30 - 0) + 0);
//var arr1 = [];
//var arr2 = [];
//for(var i = 0; i < num1; i++){
//    arr1.push(i);
//}
//for(var i = 0; i < num2; i++){
//    arr2.push(i);
//}
////Above is some code that adds a set of random numbers to both arr1 and arr2.
////Write a function called 'longer' that is given arr1 and arr2 as its only arguments and returns the array that is longer.
//
//// Code Here
//
//var longerArray = longer(arr1, arr2); // This is for testing purposes. Do not change.








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

// Code Here

/* Create three user objects to be added to the users array. Each user object should contain the
 following properties: name, email, password, username.*/

// Code Here

//include this as one of the objects in your array.

var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniteLoop'
}
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
