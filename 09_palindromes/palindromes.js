const palindromes = function (incomingString = "") {
  const cased = incomingString
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~ ()]/g, "");
  const split = cased.split("");
  const reversed = split.reverse();
  const joined = reversed.join("");
  return cased === joined;
  let a = 0;
};

// Do not edit below this line
module.exports = palindromes;
