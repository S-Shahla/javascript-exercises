const add = function(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (const num of array) {
    product *= num;
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  return (num <= 1) ? 1 : num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
