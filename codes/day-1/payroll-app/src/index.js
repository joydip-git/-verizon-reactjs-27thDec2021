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

// const printData = function (fnRef) {
//     for (let index = 0; index < employees.length; index++) {
//         const emp = employees[index];
//         fnRef(emp)
//     }
// }
// printData(printEmployee)

//2. filtering employees by salary

const filteredBySalary = employees.filter(function (e) {
    return e.totalsalary > 10000
})
//printing employee data
console.log('printing employee data after filtration by salary')
filteredBySalary.forEach(printEmployee)

// const filterBySalary = function (fnRef) {
//     const result = []
//     for (let index = 0; index < employees.length; index++) {
//         const emp = employees[index];
//         if (fnRef(emp)) {
//             result.push(emp)
//         }
//     }
//     return result
// }
// const filterLogic = (e) => e.totalsalary > 10000
// const output = filterBySalary(filterLogic)
// console.log(output)


//3. sorting employees by name
employees.sort(function (e1, e2) {
    return e1.name.localeCompare(e2.name)
})
//printing employee data
console.log('printing employee data after sortig by name')
employees.forEach(printEmployee)

// const compareEmployees = function (e1, e2) {
//     return e1.name.localeCompare(e2.name)
// }
// function sortData(fnRef) {
//     for (let index = 0; index < employees.length; index++) {
//         for (let j = index + 1; j < employees.length; j++) {
//             const e1 = employees[index]
//             const e2 = employees[j]
//             if (fnRef(e1, e2) > 0) {
//                 const temp = employees[index]
//                 employees[index] = employees[j]
//                 employees[j] = temp
//             }
//         }
//     }
// }
// sortData(compareEmployees)
