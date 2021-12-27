//constructor function
function person(name, id, salary) {
    //value properties
    this.personName = name
    this.personId = id
    this.personSalary = salary

    //functional property
    // this.print = function () {
    //     return this.personName + ' ' + this.personId + ' ' + this.personSalary
    // }
}
person.prototype.print = function () {
    return this.personName + ' ' + this.personId + ' ' + this.personSalary
}
console.log(person.prototype)

const anilPerson = new person('anil', 1, 1000)
const sunilPerson = new person('sunil', 2, 2000)

//accessing value properties
console.log(anilPerson.personName)
console.log(sunilPerson['personSalary'])

//accessing functional properties
console.log(anilPerson.print())
console.log(sunilPerson.print())
