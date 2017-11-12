// Do not change any of the function names

/*
For loops are bit of code that repeat themselves. They have three parts that tell you 
where to start, where to stop, and what to in between re-runs. 
It looks like this:

for (i = 0 *start*; i < 5 *stop*; i++ *step*){
	*and this is where you'd explain what you want to happen 
	each time it loops around*
}

&& means 'and' and is used when you want more than one thing on a 
list to be true before the code moves on. If your friend says they
want pepperoni pizza and BBQ chicken pizza, and you come back with
only one of those two, they won't be so happy.

|| means or. It only requires at least one thing to be true. Back to
the pizza case, having only one of the two pizza options is fine.

! goes in front of something to say 'not'. Just like in real life, if you say 
this is not not true, the two 'not's cancel each other out. Likewise, 
!false is the same thing as true, and !true is the same thing as false.

Arrays are basically lists that you keep in brackets. 
array = ['this', 'is', 'an', 'array'].

Git - is a tool that helps control different versions of coding 
projects.
GitHub - is a website that allows people to share and work on 
their git projects online. Sort of like how Google Drive can 
be used to share and edit text documents online. 
*/

function getBiggest(x, y) {
	if ( x >= y ) {
		return x;
	
	} else { return y;
	}
// x and y are integers.  Return the larger integer
// if they are the same return either one
}

function greeting(language) {
	if (language === 'German'){
		return 'Guten Tag!';
	} else if (language === 'English'){
		return 'Hello!';
	} else if (language === 'Spanish'){
		return 'Hola!';
	} else {return 'Hello!';}
// return a greeting for three different languages:
// language: 'German' -> 'Guten Tag!'
// language: 'English' -> 'Hello!'
// language: 'Spanish' -> 'Hola!'
// if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
	if (num === 10 || num === 5){
		return true;
	} else { return false;}
// return true if num is 10 or 5
// otherwise return false
}

function isInRange(num) {
	if (num < 50 && num > 20){
		return true;
	} else {return false;}
// return true if num is less than 50 and greater than 20
}

function isInteger(num){
	if (Math.floor(num) === num){
		return true;
	} else {return false;}
// return true if num is an integer
// 0.8 -> false
// 1 -> true
// -10 -> true
// otherwise return false
// hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {  //if num is divisible by 3 & 5 return 'fizzbuzz'
		return 'fizzbuzz';
	} else if (num % 3 === 0) {  //if num is divisible by 3 return 'fizz'
		return 'fizz';
	} else if (num % 5 === 0)  { //if num is divisible by 5 return 'buzz'
		return 'buzz';
	} else {   //otherwise return num
		return num;
  }
}

function isPrime(num) {
	if (num < 2) return false; //if the test number is less than 2, return 'false'
		for (var i = 2; i <= num; i++) { // hint2: you can solve this using a for loop
            if (num % i === 0) return false; // hint: a prime number is only evenly divisible by itself and 1
		return num !==1; // note: 0 and 1 are NOT considered prime numbers
 }
}
   
   isPrime(7695); // test



function returnFirst(arr) {
	return arr[0];// return the first item from the array
}

function returnLast(arr) {
	return arr[arr.length-1];// return the last item of the array
}

function getArrayLength(arr) {
	return arr.length;// return the length of the array
}

function incrementByOne(arr) {
	for (var i = 0; i < arr.length; i++){// arr is an array of integers  
	arr[i] += 1;// increase each integer by one
	} return arr;// return the array
}

function addItemToArray(arr, item) {
	arr.push(item);// add the item to the end of the array
	return arr;// return the array
}

function addItemToFront(arr, item) {
	arr.unshift(item);// add the item to the front of the array
	return arr;// return the array
// hint: use the array method .unshift
}

function wordsToSentence(words) {
	return words.join(' ');  // words is an array of strings
		// return a string that is all of the words concatenated together
	
// example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
	return arr.indexOf(item) != -1;// check to see if item is inside of arr
// return true if it is, otherwise return false
}

function addNumbers(numbers) { // numbers is an array of integers.
	var sum = numbers.reduce(function (prev, curr) {
        return prev + curr; // add all of the integers
    });
    return sum; //and return the value
}

function averageTestScore(testScores) { // testScores is an array.  
	var sum = testScores.reduce(function (prev, curr) {
		return prev + curr;//Iterate over testScores and compute the average.
	});
	return sum / testScores.length; // return the average
}

function largestNumber(numbers) { // numbers is an array of integers
	numbers.sort(function (x, y){
		return x - y;
	});
	return numbers.pop(); // return the largest integer
} 
// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
