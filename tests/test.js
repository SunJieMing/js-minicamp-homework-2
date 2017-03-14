var exercises = require('../exercises');

describe('greeting(language)', function() {
  it('should return \'Guten Tag!\' for German', function() {
    expect(exercises.greeting('German')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for Spanish', function() {
    expect(exercises.greeting('Spanish')).toBe('Hola!');
  });
  it('should return \'Hello!\' for English', function() {
    expect(exercises.greeting('English')).toBe('Hello!');
  });
  it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', function() {
    expect(exercises.greeting('French')).toBe('Hello!');
    expect(exercises.greeting()).toBe('Hello!');
  });
});

describe('isTenOrFive(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(exercises.isTenOrFive(10)).toBe(true);
    expect(exercises.isTenOrFive(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(exercises.isTenOrFive(11)).toBe(false);
    expect(exercises.isTenOrFive(6)).toBe(false);
    expect(exercises.isTenOrFive(0)).toBe(false);
    expect(exercises.isTenOrFive(5.01)).toBe(false);
  });
});

describe('isInRange(num)', function() {
  it('should return true if num is inside range', function() {
    expect(exercises.isInRange(35.5)).toBe(true);
    expect(exercises.isInRange(40)).toBe(true);
    expect(exercises.isInRange(49)).toBe(true);
    expect(exercises.isInRange(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(exercises.isInRange(10)).toBe(false);
    expect(exercises.isInRange(20)).toBe(false);
    expect(exercises.isInRange(50)).toBe(false);
    expect(exercises.isInRange(100)).toBe(false);
  });
});

describe('isInteger(num)', function() {
  it('should return true if num is 5', function() {
    expect(exercises.isWholeNumber(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(exercises.isWholeNumber(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(exercises.isWholeNumber(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(exercises.isWholeNumber(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(exercises.fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(exercises.fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(exercises.fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(exercises.fizzBuzz(4)).toBe(4);
  });
});
