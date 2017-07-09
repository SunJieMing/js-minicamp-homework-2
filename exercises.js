//Do not change any of the function names
function getBiggest(x, y) {
  if (x > y){
        return x;
    } else if (x === y){
        return x;
    } else {
        return y;
    }
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
}

function greeting(language) {
  if (language === 'German'){
        return 'Guten Tag!';
    } else if (language === 'English'){
        return 'Hello!';
    } else if (language === 'Spanish'){
        return 'Hola!';
    } else {
        return 'Hello!';
    }
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  if (num === 5 || num === 10){
        return true;
    } else{
        return false;
    }
  //return true if num is 10 or 5
  //otherwise return false
}

function isInRange(num) {
  if (num > 20 && num < 50){
        return true;
    } else{
        return false;
    }
  //return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  if(num % 1 === 0) {
    return true;
} else{
    return false;
}
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzbuzz';
} else if (num % 5 === 0){
    return 'buzz';
}else if (num % 3 === 0){
    return 'fizz';
} else {
    return num;
}
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
}
//I'm not working
function isPrime(num) {
  for(var i = 0; i < 5; i++){
    while (i < 2){
        i++;
    }
    if (num === 0 || num === 1){
      return false;
    }
    else if (num % i != 0){
        return true;
    }else {
        return false;
    }
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
}
}

function returnFirst(arr) {
  var retFirst = arr[0];
  return retFirst;
  //return the first item from the array
}

function returnLast(arr) {
  var retLast = arr[arr.length-1];
  return retLast;
  //return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  //return the length of the array
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; i++){
    arr[i]++;
  }
  return arr;
  //arr is an array of integers
  //increase each integer by one
  //return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  //add the item to the end of the array
  //return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
}
//im not working
function wordsToSentence(words) {
  return words.join(' ');
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
}
//I'm not working
function contains(arr, item) {
  if (arr.indexOf(item) != -1) {
    return true;
  } else {
    return false;
  }
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
}

function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum += (numbers[i]);
  }
  return sum;
  //numbers is an array of integers.
  //add all of the integers and return the value
}

function averageTestScore(testScores) {
  var average = 0;
  var sum = 0;
  for (var i = 0; i < testScores.length; i++){
  sum += testScores[i];
  average = sum / testScores.length;
  }
  return average;
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
}

function largestNumber(numbers) {
  var max = Math.max.apply(null, numbers);
  return max;
  //numbers is an array of integers
  //return the largest integer
}

//Do not modify code below this line.
////--------------------------------

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
