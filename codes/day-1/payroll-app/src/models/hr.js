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