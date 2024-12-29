const getTheTitles = function(books) {
    const titles = [];
    for (const book of books) {
        titles.push(book.title);
    }
    return titles;
    // return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
