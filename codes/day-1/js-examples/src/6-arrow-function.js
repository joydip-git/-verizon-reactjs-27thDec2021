function outer() {
    var a = 10
    this.x = 10
    console.log(this)

    /*
    var ref = this

    function inner() {
        var b = 20
        this.y = 20
        // const res = this.x + this.y
        const res = ref.x + this.y
        console.log(this)
        console.log(res)
    }
    inner()
    */
    /*
     function inner() {
         var b = 20
         this.y = 20
         const res = this.x + this.y
         console.log(this)
         console.log(res)
     }
     inner = inner.bind(this)
     inner()
     */

    //since the function has been written in 'arrow function' style, the function (inner) will be automatically bound to the owner of the outer function. (behind the scene, the bind() method is called on the inner function)
    //you can no longer change the owner of the inner function again
    //arrow function is used to solve 'lexical this' propblem
    let inner = () => {
        var b = 20
        this.y = 20
        const res = this.x + this.y
        console.log(this)
        console.log(res)

        const test = () => {
            this.z = 30
            console.log(this)
            console.log(this.x + this.y + this.z)
        }
        test()
    }
    inner()
}
new outer()

const add = function (a, b) {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}
const multiply = (a, b) => a * b
const divide = (a, b) => console.log(a / b)