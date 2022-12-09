// const findTheOldest = function(people) {
//     return people.reduce((oldestPerson, person) => {
//         // If the current person doesn't have a year of death, calculate their age as of today
//         if (!(person.yearOfDeath)) { if ((person.yearOfDeath)==null) and if ((person.yearOfDeath)==undefined)
       
//           person.yearOfDeath = new Date().getFullYear();
         
//         }
//         // If the current person is older than the currently stored oldest person, return the current person
//         if (person.yearOfDeath - person.yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
//           return person;
//         }
//         // Otherwise, return the currently stored oldest person
//         return oldestPerson;
//       });
// };

// // Do not edit below this line
// module.exports = findTheOldest;


const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;