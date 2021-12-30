class Person {
    constructor(name) {
        this.name = name
    }
    print() {
        return this.name
    }
}
class Trainer extends Person {
    constructor(name, subject) {
        super(name)
        this.subject = subject
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}

const messenger = {
    sayHello: function () {
        console.log('hello...' + this.name)
    }
}

//Mixin
Object.assign(Trainer.prototype, messenger)
const joydipTrainer = new Trainer('joy', 'React')
//Object.assign(joydipTrainer, messenger)
const info = joydipTrainer.print()
console.log(info)
joydipTrainer.sayHello()

const anilTrainer = new Trainer('anil', 'React')
anilTrainer.sayHello()