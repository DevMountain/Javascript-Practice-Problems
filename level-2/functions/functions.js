// Write a function called sum  that will return the sum of an unknown number of argumanets

function sum() {
    var i,
        n = arguments.length,
        total = 0;
    for(i = 0; i < n; i++) {
        total += arguments[i];
    }
    return total

}

var ten = sum(1,2,3,4);



// Square root function

var increment = function(n){ return n + 1; };

var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

doMathSoIDontHaveTo(5, square);

doMathSoIDontHaveTo(4, increment);
