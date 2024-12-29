const findTheOldest = function(people) {
    const date = new Date();
    let ages = people.map((person) => (person.yearOfDeath || date.getFullYear()) - person.yearOfBirth);
    const maxValue = Math.max(...ages);
    return people[ages.indexOf(maxValue)];
};

// Do not edit below this line
module.exports = findTheOldest;
