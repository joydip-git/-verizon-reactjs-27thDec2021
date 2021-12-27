function person(name, id, salary) {
    this.personName = name
    this.personId = id
    this.personSalary = salary
}
const anilPerson = new person('anil', 1, 1000)
const sunilPerson = new person('sunil', 2, 2000)

console.log(anilPerson)
console.log(sunilPerson)