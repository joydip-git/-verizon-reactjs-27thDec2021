import React from 'react'

//props={resultValue:0/1/2/3}
const Result = (props) => {
    console.log('Result rendered')
    return (
        <span>Result: &nbsp; {props.resultValue}</span>
    )
}
export default Result