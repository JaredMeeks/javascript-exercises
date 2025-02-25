const getAge = function (birth, death) {
    if(!death) { 
        death = new Date().getFullYear();
        // if there is no death year, meaning the person is still alive, get the current year to use in its place.
    }
    return death - birth;
}

const findTheOldest = function(array) {
    return array.reduce((a, b) => {
        const age = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return age < nextAge ? b : a;
    })
};

// Do not edit below this line
module.exports = findTheOldest;