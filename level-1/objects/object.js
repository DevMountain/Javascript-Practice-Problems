
// return person.firstname
function personName() {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    }
    return person.firstname

}


function personName() {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    }
    return person.firstname

}

// Using bracket notation change the firstname from sally to cooper

function changeName() {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    }
    person['firstname'] = 'cooper'
    return person.firstname



}


function checkName(name) {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    }

    if(name === person['firstname'])

    return true



}



var backpack = {

}

var item = 'firstPocket'

backpack.firstpocket = item;

backpack['firstpocket'] = 'chapstick'


console.log(backpack)

/* Create an empty Object called backPack.

Now, create a variable called 'item' and set it equal to the string 'firstPocket'.
Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.

Set the value of that key to 'chapstick'.
Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack. */

// Code Here

//After you do the above, console.log your entire backPack object.

// Code Here




//Using bracket notation change the firstname from sally to cooper

function changeName() {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    }
    // Code here to change the firstname
    return person.firstname



}



// Inside the if block check if name is equal to person firstname

function checkName(name) {
    var person = {
        firstname: 'sally',
        lastname: 'smith',
        age: 29,
        location: 'Orem, UT'
    }

    if(// Code Here ) {
        return true
}

}

