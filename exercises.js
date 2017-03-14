//Do not change any of the function names


function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isWholeNumber: isWholeNumber,
  fizzBuzz: fizzBuzz
};
