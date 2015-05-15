/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}




console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);



// /**
//  * PART 1
//  *
//  * Write a function that takes two numbers as
//  * arguments and computes the sum of those two numbers.
//  */

function sum(a, b) {
    // YOUR CODE HERE
    return a + b
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);


// /**
//  * PART 2
//  *
//  * write a function that finds the Greatest Common Denominator of two numbers
//  * - if no GCD exists, return 1
//  */

function GCD(a, b) {
    // 12, 9
    // YOUR CODE HERE
    var _a = []
    var _b = []

    // get an array of denominators for a and b
    for (var i = Math.max(a, b); i > 0; i--) {
        if (a % i === 0) {
            _a.push(a / i) // [1, 2, 3, 4, 6, 12]
        }
        if (b % i === 0) {
            _b.push(b / i) // [1, 3, 9]
        }
    }

    // one divides into every integer
    var gcd = 1

    // for each number x in a
    _a.forEach(function(x) {
        // does it also exist in b?
        if (_b.indexOf(x) !== -1) {
            // then it must be a CD
            gcd = x
        }
    })

    return gcd
}

console.assert(GCD(5, 1) === 1);
console.assert(GCD(15, 3) === 3);
console.assert(GCD(15, 5) === 5);
console.assert(GCD(50, 20) === 10);

// // In Class GCD approach //
// function GCD(a,b){
// 	var greater = a > b ? a : b;
// 	var lesser = a <= b ? a : b;
// for (var i = 1; i < 1; i++){
// 	if(greater % i === 0){
// 		var potential = greater/i
// 		if(lesser % potential) === 0){
// 			return potential
// 			}
// 		}
// 	}
// return 1
// }

// console.assert(GCD(5,1) === 1);
// console.assert(GCD(15,3) === 3);
// console.assert(GCD(15,5) === 5);
// console.assert(GCD(50,20) === 10);


// // /**
// //  * PART 3
// //  *
// //  * write a function that prints out the Least Common Multiple of two numbers
// //  */

function LCM(a, b) {
    var greater = a > b ? a : b;
    var lesser = a <= b ? a : b;
    for (var i = 1; i < 1; i++) {
        if (greater * i === 0) {
            var potential = greater * i
            if ((lesser * potential) === 0) {
            return potential
        }
    }
}
return 1
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);




// // /**
// //  * Part 4
// //  *
// //  * write a function the returns a FizzBuzz string for some number N (counting up from 1).
// //  * - for every number that isn't a multiple of 3 or 5, return a period "."
// //  * - for every number that is a multiple of 3 (but not 5), return "fizz"
// //  * - for every number that is a multiple of 5 (but not 3), return "buzz"
// //  * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
// //  */

function fizzbuzz(N) {
    //     // YOUR CODE HERE
    for (var i = 1; i <= 100; i++) {
        var string = '';
        if (i % 3 == 0) {
	        string += 'Fizz';
	    }
	    if (i % 5 == 0) {
	        string += 'Buzz';
	    }
	    if (string == '') {
	        string += '.';
	    }
    }

}


console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzfizzbuzz")
