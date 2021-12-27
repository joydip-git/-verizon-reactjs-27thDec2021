export class Employee {
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

export const add = (a, b) => a + b

/**exports object
 * {
 *    Employee:Employee,
 *    add: add
 *  }
 */