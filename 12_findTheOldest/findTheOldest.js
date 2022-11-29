const findTheOldest = function(people) {
    let oldestIndex = 0; //index of person who is the oldest, default first in the array
    let oldest=0; //age of the oldest person in array
    let currentYear = new Date().getFullYear();
    let age = new Array(people.length);
    for(let i=0; i<age.length; i++){
        if("yearOfDeath" in people[i])
            age[i] = people[i].yearOfDeath-people[i].yearOfBirth; //if person is dead, use yearOfDeath-yearOfBirth to determine age
        else
            age[i] = currentYear - people[0].yearOfBirth; //if person is alive, use currentYear-yearOfBirth to determine age
            if(age[i]>oldest){
            oldest = age[i];
            oldestIndex = i;
        }
    }
    return people[oldestIndex];
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
