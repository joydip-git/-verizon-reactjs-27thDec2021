const joydipOject = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    print: function () {
        return `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
    }
}

// const nameValue = joydipOject.name
// const idValue = joydipOject.id
// const salaryValue = joydipOject.salary

//object destructuring
// const { name: nameValue, id: idValue, salary: salaryValue } = joydipOject
// console.log(idValue, nameValue, salaryValue)

const { name, id, salary } = joydipOject
console.log(id, name, salary)

const obj = {
    name: 'joydip',
    id: 1,
    salary: 1000,
    subjects: [
        {
            subjectname: 'JS',
            experience: 17
        },
        {
            subjectname: 'ReactJS',
            experience: 8
        }
    ]
}

const numbers = [1, 2, 3, 4]
const [m, , , p] = numbers
console.log(m, p)

// const [f, s] = joydipOject.subjects
// const { subjectname: a } = f
// const { subjectname: b } = s
const [{ subjectname: a }, { subjectname: b }] = obj.subjects
console.log(a)
console.log(b)