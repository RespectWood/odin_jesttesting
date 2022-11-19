const add = function (a, b) {
  return a + b;
};

const subtract = function (a2, b2) {
  return a2 - b2;
};

const sum = function (numbers) {
  let sum = 0;
  // for (let i = 0; i < numbers.length; i++)
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function (multinumbers) {
  let sum2 = multinumbers[0];
  for (const number of multinumbers.slice(1)) {
    sum2 *= number;
  }
  return sum2;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
