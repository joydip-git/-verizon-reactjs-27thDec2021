const divide = (a, b) => {
    const p = new Promise(
        //executor function
        //reference of 2 built-in functions are passed to this executo function
        //first function is to update promise object to 'fulfilled' state
        //second function is to update promise object to 'rejected' state
        (resolveFn, rejectFn) => {
            const res = a / b;
            if (res === Infinity) {
                // throw new Error('denominator should not be zero')
                rejectFn('denominator should not be zero')
            }
            resolveFn(res)
        }
    )
    return p
}

const add = (a, b) => {
    return a + b
}

// try {
//     console.log(divide(12, 3))
// } catch (error) {
//     console.log(error)
// }'
const promiseObject = divide(12, 0)
promiseObject
    .then(
        (res) => {
            console.log(res)
        },
        (e) => {
            console.log(e)
        }
    )
console.log(add(10, 20))

/**
 * state:'pending',
 * result:undefined
 * 
 * state: fulfilled,
 * result:3
 * 
 * state: rejected
 * result:undefined
 */