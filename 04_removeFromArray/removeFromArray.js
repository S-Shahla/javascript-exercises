const removeFromArray = function(array, ...args) {
    function loopThroughArguments(num) {
        let matches = false;
        for (const arg of args) {
            if (arg === array[num]) matches = true;
        }
        return matches;
    }
    for (let i = 0; i < array.length; i++) {
        while (i < array.length && loopThroughArguments(i)) {
            array.splice(i, 1);
        }
    }
    return array;

    // const newArray = [];
    // array.forEach((item) => {
    //     if (!args.includes(item)) {
    //         newArray.push(item);
    //     }
    // });
    // return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
