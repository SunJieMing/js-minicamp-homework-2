// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x>y) {
    return x;
  } else return y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  if (language === 'German') {
    return 'Guten Tag!';
  // language: 'English' -> 'Hello!'
  } else if (language === 'English') {
    return 'Hello!';
  // language: 'Spanish' -> 'Hola!'
  } else if (language === 'Spanish') {
    return 'Hola!';
  // if language is undefined return 'Hello!'
} else return 'Hello!';

}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5) {
    return true;
  } return false;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  if (num<50 && num>20) {
    return true;
  } return false;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (Math.floor(num) === num) {
    return true;
  } return false;
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for (var i=2; i < num; i++) 
  
  {if (num % i === 0) {
      return false;
    } return true;
  }  //Tests if num is divisible by any integers between i = 2 and i < n

  if (num === 0) {
  return false;//Must be included since 0 is NOT a prime number.
} else if (num === 1) {
  return false;//Must be included since 1 is NOT a prime number.
} 

}

function returnFirst(arr) {
  // return the first item from the array
  var first = arr[0];//This tripped me up.  I had "returnFirst[]" originally, instead of "arr[0]".  :/
  return first;
}
//Simply writing "return arr[0];" does not work because the arguement "arr" MUST be defined within a variable

function returnLast(arr) {
  // return the last item of the array
  var last = arr[arr.length -1];
  return last;
}

function getArrayLength(arr) {
  // return the length of the array
  var length = arr.length;
  return length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (var i=0 ; i<arr.length ; i++) {
    arr[i] = arr[i] + 1;
  } return arr; //Initially was not working b/c I was placing "return arr;" inside the brackets
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);//AHHH this took me forever LOL!  Found help on stackoverflow!
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return (words.join (' '));
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return (arr.includes(item));
}

function addNumbers(numbers) { // Very challenging!  Make sure you have this exact format memorized!!!
  // numbers is an array of integers.
  // add all of the integers and return the value
  
  var sum = 0;
  for (var i = 0 ; i < numbers.length ; i++) {

    sum = sum + numbers[i]; // sum += number[i]; works too!

    } return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var sum = 0;
  for (var i = 0 ; i < testScores.length ; i++) {

    sum += testScores[i];

  } return (sum/testScores.length);//Same as previous problem, except for this.
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var bigMama = 0;
  for (var i=0 ; i<=bigMama ; i++) 

  {if (numbers[i]>bigMama) {
      bigMama=numbers[i];
    } 
  } return bigMama;
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
