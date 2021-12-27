//1. object literal syntax
const joydipOject = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    print: function () {
        return `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
    }
}

console.log(joydipOject.__proto__)

console.log(joydipOject.id)
console.log(joydipOject['name'])
console.log(joydipOject.print())

//Objects are dynamically expandable
joydipOject.location = 'Bangalore'
joydipOject.sayHello = function () {
    console.log(this.location)
}
joydipOject.sayHello()


//objects are iterable
for (const propName in joydipOject) {
    const propValue = joydipOject[propName]
    console.log(`${propName}:${propValue}`)
}
const newObj = Object.create({}, joydipOject)
console.log(newObj)
