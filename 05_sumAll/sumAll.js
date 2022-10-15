
// @param defines the argument as numbers (x, y) for easier readability when invoking the function
/** 
 * @param {number} x
 * @param {number} y
*/
const sumAll = function (x, y) {
  
  const isNumber 
    = typeof x === "number" 
    && typeof y === "number"
  
  const isPositive
    = x > 0 
    && y > 0


  if (!isPositive || !isNumber) {
      return "ERROR";
  } 

  const start = Math.min(x, y);
  const end = Math.max(x, y);
  
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
