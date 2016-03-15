
// If statements are all about making decisions based on certain parameters.
// Let's decide what you should wear today based on the temperature outside and the weather.
// Create a function called myOutfit that takes in a temperature and a weather parameter.
// <ul><li>If the temperature is greater than or equal to 72 and weather is "rainy" return "shorts and t-shirt, bring umbrella".
// </li><li>If the temperature is greater than or equal to 72 and the weather is "sunny" return "shorts and t-shirt".</li><li>
// If the temperature is less than 72 and the weather is "rainy" return "long pants and rain coat".
// </li><li>If the temperature is less than 72 and the weather is "sunny" return "long pants and sweater".</li>





// Create a function called myLoop that takes in two parameters,
// the first parameter should represent a starting number and the second is how many times the starting number should be incremented.



//Create a function called exponent that takes in two parameters,
// the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many
// times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8




// Create a function that returns all the prime number up to 150




// Write a function that accepts 1 paremter and then checks if that parameter is a prime number
function isPrime(n)
{

    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(37));




// Write a function called 'reverse' that takes is given str as it's only argument and returns that string after it's been reversed

function reverse(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse(32243));


// Have the function exOh(str) take the str parameter being passed and return
// true if there is an equal number of x's and o's, otherwise return false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.








// Have the function letterCapitalize(str) take the str parameter being passed,
// capitalize the first letter of each word, and return the altered string. Words will be separated by only one space.
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


function letterCapitalize(str)
{
    var array1 = str.split(' ');
    var newarray1 = [];

    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join(' ');
}
console.log(letterCapitalize("i want to be bigger"));



// Write a function called longestWord that will find the the longest word in a string

function longestWord(str)
{
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for(var i = 1 ; i < array1.length ; i++)
    {
        if(result.length < array1[i].length)
        {
            result = array1[i];
        }
    }
    return result;
}

console.log(longestWord('Dev Mountain is full of Functions'));







//Write a JavaScript function that generates all combinations of a string.

function substrings(str1)
{
    var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++)
    {
        array1[x]=str1.substring(x, y);
    }
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent ; i++)
    {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("dog");
