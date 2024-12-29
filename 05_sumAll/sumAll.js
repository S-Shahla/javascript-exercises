const sumAll = function(num1, num2) {
    let number = 0;
    startNum = Math.min(num1, num2);
    endNum = Math.max(num1, num2);
    if (startNum < 0 || !Number.isInteger(num1) || !Number.isInteger (num2)) return "ERROR";
    for (let i = startNum; i <= endNum; i++) {
        number += i;
    }
    return number
};

// Do not edit below this line
module.exports = sumAll;
