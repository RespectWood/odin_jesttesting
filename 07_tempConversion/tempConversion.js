const ftoc = function (farenheit) {
  const celsius = (farenheit - 32) * 0.5556;
  const rounded = Math.round(celsius * 10) / 10;

  return rounded;
};

const ctof = function (celsius) {
  const farenheit = celsius * 1.8 + 32;
  const rounded = Math.round(farenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
