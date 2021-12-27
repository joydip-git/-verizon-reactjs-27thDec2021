//3. class
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
class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.trainerSubject = subject
    }
    print() {
        const partialInfo = super.print()
        return partialInfo + ' ' + this.trainerSubject
    }
}
class Trainee extends Person {
    constructor(name, id, salary, domain) {
        super(name, id, salary)
        this.traineeDomain = domain
    }
    print() {
        const partialInfo = super.print()
        return partialInfo + ' ' + this.traineeDomain
    }
}
//console.log(Person.prototype)

const anilPerson = new Trainer('anil', 1, 1000, 'JS')
const sunilPerson = new Trainee('sunil', 2, 2000, 'Java')

//accessing value properties
console.log(anilPerson.personName)
console.log(sunilPerson['personSalary'])

//accessing functional properties
console.log(anilPerson.print())
console.log(sunilPerson.print())