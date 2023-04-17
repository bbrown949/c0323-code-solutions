/* exported calculator */

// add(x, y) - returns the sum of x and y
const calculator = {
  add: function (x, y) {
    return (x + y);
  },

  // subtract(x, y) - returns the difference of x and y
  subtract: function (x, y) {
    return (x - y);
  },

  // multiply(x, y) - returns the product of x and y

  multiply: function (x, y) {
    return (x * y);
  },

  // divide(x, y) - returns the quotient of x and y
  divide: function (x, y) {
    return (x / y);
  },
  // square(x) - returns the square of x
  square: function (x) {
    return (x * x);
  },

  // sumAll(numbers) - returns the sum of an array of numbers

  sumAll: function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += (numbers[i]);
    }
    return sum;
  },
  // getAverage(numbers) - returns the average of an array of numbers

  getAverage: function (numbers) {
    const average = (this.sumAll(numbers)) / numbers.length;

    return average;
  }
};
