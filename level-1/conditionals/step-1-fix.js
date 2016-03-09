
// Problem #1

// Write a  for loop that will console.log the numbers 1 to 100.

for (var i = 0; i <= 100; i++) {
    console.log([i]);

}


// Problem #2

// Write a for loop that loops over the numbers array and console logs each number in the array.
// Remember arrays have a .length that you can use to get the length of the array

var numbers = [1, 5, 7, 3, 8, 0, 12, 212, 435, 875, 55, 23, 22];

for (var i = 0; i < numbers.length; i++) {
    console.log([i]);
}


// Problem #3

// write a for loop that loops over the numbers array and checks if the number is even or odd.
// IF the number is even console.log('even') if the number IS NOT  even then console.log('odd')

for (var i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        console.log('even' + '  ' + [i]);
    } else {
        console.log('odd' + '  ' + [i]);
    }
}








