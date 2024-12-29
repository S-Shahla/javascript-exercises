const fibonacci = function(num) {
    num = Number(num);
    let result = (num > 0) ? 1: ((num < 0) ? "OOPS" : 0);
    let last = 0;
    for (; num > 1; num--) {
        const newLast = result;
        result += last;
        last = newLast;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
