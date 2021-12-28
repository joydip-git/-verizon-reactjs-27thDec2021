import React from 'react'

const people = [{
    name: 'anil',
    id: 1,
    salary: 1000
}, {
    name: 'sunil',
    id: 2,
    salary: 2000
}]

const Records = () => {

    const allRows = people.map(
        (person) => {
            return (
                <tr>
                    <td>{person.name}</td>
                    <td>{person.id}</td>
                    <td>{person.salary}</td>
                </tr>
            )
        })
    let recordsDesign = (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    allRows
                }
            </tbody>
        </table>
    )

    return recordsDesign

}
export default Records