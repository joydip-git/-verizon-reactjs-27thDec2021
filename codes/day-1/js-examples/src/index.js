class Person {
    constructor(name, id, salary) {
        //data members
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }

    //method
    print() {
        return this.personName + ' ' + this.personId + ' ' + this.personSalary
    }
}
//console.log(Person.prototype)

const anilPerson = new Person('anil', 1, 1000)
const sunilPerson = new Person('sunil', 2, 2000)

//accessing value properties
console.log(anilPerson.personName)
console.log(sunilPerson['personSalary'])

//accessing functional properties
console.log(anilPerson.print())
console.log(sunilPerson.print())