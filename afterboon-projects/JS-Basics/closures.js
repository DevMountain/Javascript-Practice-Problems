//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer()

//Once you do that, invoke inner.

inner()



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var calling = callFriend();

calling(4352159248);

//Next Problem



/*

  Write a function called makeCounter that makes the following code work properly.

*/

var makeCounter = (function () {
  var counter = 0;
  return function () {
    return counter += 1;
  }
})();

  var count = makeCounter;
      count(); // 1
      count(); // 2
      count(); // 3
      count(); // 4



// Next Problem


/*

 Write a function called numberFactory that takes a number as the parameter. The numberFactory should return a anonymous function
 that takes another number as the parameter and then returns num1 multiplied by num2

*/

// Code Here



var times5 = numberFactory(5);

times5(3)  // Should return 15









// Write a function called counterFactory that takes a value as the parameter and
// returns two functions that implement up/down counter.
// You will need to use the module pattern to achieve this.

function counterFactory(value) {
    return {
        inc: function() {
            value += 1;
            return value;
        },
        dec: function() {
            value -= 1;
            return value;
        }
    }

}


counter = counterFactory(10);
counter.inc(); //11
counter.dec(); // 10




//Next Problem








/*
   Write a function called 'fnCounter' that accepts two parameters.
   The first parameter, 'func', will be a function and the second parameter, 'N', will be a number.
   Now, in 'fnCounter', return an anonymous function that allows the parameter function to be invoked 'N'
   number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

 function theCount(howMany){
   console.log(howMany);
 }

function fnCounter(func, num) {
  var count = 0;
  return (function() {
    for(count = 0; count <= num; count++) {
     func(count)
    }
  }())
}


fnCounter(theCount, 5);



//Next Problem



// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 1 then 2 then 3, etc). Run this code in your console to see what the output is.


for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000)
}


// To make this code work you will need to create a new scope for every iteration.

    //Code Here



var funcArray = [];
for( var i = 0; i < 3; i++ ){
    (function(i){
        funcArray.push(
            function(){
                console.log(i);
            }
        );
    })(i);
}



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


