const palindromes = function (string) {
    const regex = /\w/
    let back = string.length - 1;
    for (let front = 0; front < string.length && back >= front; front++, back--) {
        while (!regex.test(string[back])) back--;
        while (!regex.test(string[front])) front++;
        if (!(string[back].toLowerCase() === string[front].toLowerCase())) return false;
    }
    return true;

    // const cleanedString = string
    //     .toLowerCase()
    //     .split('')
    //     .filter((character) => regex.test(character))
    //     .join('');

    // const reversedString = cleanedString.split('').reverse().join('');

    // return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
