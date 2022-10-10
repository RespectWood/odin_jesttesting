const repeatString = function() {
    let inComingString = arguments[0]
    let multiplyNumber = arguments[1]
        if (arguments[1] < 0) {
            return "ERROR"
        }

    return inComingString.repeat(multiplyNumber)
};
// Do not edit below this line
module.exports = repeatString;
