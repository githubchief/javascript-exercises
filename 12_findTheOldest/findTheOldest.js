const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        // If the current person doesn't have a year of death, calculate their age as of today
        if (!(person.yearOfDeath)) {
       
          person.yearOfDeath = new Date().getFullYear();
         
        }
        // If the current person is older than the currently stored oldest person, return the current person
        if (person.yearOfDeath - person.yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
          return person;
        }
        // Otherwise, return the currently stored oldest person
        return oldestPerson;
      });
};

// Do not edit below this line
module.exports = findTheOldest;