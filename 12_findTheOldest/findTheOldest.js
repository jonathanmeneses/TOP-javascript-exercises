const findTheOldest = function(People) {

People.forEach(element => {
    let age; 
    console.log(element.yearOfDeath)
    if (element.yearOfDeath == undefined) {
        // Property "name" exists in the object
        let year =  new Date().getFullYear()
        element.age = year - element.yearOfBirth
      } else {
    
        element.age = element.yearOfDeath - element.yearOfBirth}
    console.log(element.age)
});

People.sort(function(a, b) { return (a.age - b.age)*-1; });

return People[0]

};




// Do not edit below this line
module.exports = findTheOldest;
