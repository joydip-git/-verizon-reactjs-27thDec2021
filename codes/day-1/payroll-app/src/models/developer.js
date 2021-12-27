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