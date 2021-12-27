class Employee {
    #name
    #id
    #basicpay
    #dapay
    #hrapay
    #totalsalary
    constructor(name, id, basic, da, hra) {
        this.#name = name
        this.#id = id
        this.#dapay = da
        this.#basicpay = basic
        this.#hrapay = hra
        this.#totalsalary = 0
    }
    get name() {
        return this.#name
    }
    get id() {
        return this.#id
    }
    get totalsalary() {
        return this.#totalsalary
    }
    set totalsalary(value) {
        this.#totalsalary = value
    }
    calculateSalary() {
        this.#totalsalary = this.#basicpay + this.#dapay + this.#hrapay
    }
}

class Developer extends Employee {
    #incentivepay
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra)
        this.#incentivepay = incentive
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalsalary += this.#incentivepay
    }
}

class Hr extends Employee {
    #gratuitypay
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        this.#gratuitypay = gratuity
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalsalary += this.#gratuitypay
    }
}

const anilDeveloper = new Developer('anil', 1, 1000, 2000, 3000, 4000)
const sunilHr = new Hr('sunil', 2, 2000, 3000, 4000, 5000)

const employees = [sunilHr, anilDeveloper]
const printEmployee = function (e) {
    console.log(`${e.name} has salary of ${e.totalsalary}`)
}

//1. calculating salary
for (let index = 0; index < employees.length; index++) {
    const emp = employees[index];
    emp.calculateSalary()
}
//printing employee data
console.log('printing employee data after salary calculation')
employees.forEach(printEmployee)

//2. filtering employees by salary
const filteredBySalary = employees.filter(function (e) {
    return e.totalsalary > 10000
})
//printing employee data
console.log('printing employee data after filtration by salary')
filteredBySalary.forEach(printEmployee)

//3. sorting employees by name
employees.sort(function (e1, e2) {
    return e1.name.localeCompare(e2.name)
})
//printing employee data
console.log('printing employee data after sortig by name')
employees.forEach(printEmployee)