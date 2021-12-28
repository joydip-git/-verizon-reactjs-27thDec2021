import React from 'react'

const people = [{
    name: 'sunil',
    id: 2,
    salary: 2000
}, {
    name: 'anil',
    id: 1,
    salary: 1000
}]

const Records = () => {
    const allRows = people.map(
        (person, index) => {
            return (
                <tr key={person.id}>
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