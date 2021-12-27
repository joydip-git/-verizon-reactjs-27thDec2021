function outer() {
    //1.
    //this will be stored in variable object of the function
    var a = 10
    console.log(a)

    //2.
    //will be stored in the owner of the function
    this.x = 20
    //console.log(this.x)
    console.log(this)
}
//3.
console.log(outer.prototype)

//1. window object is the owner of the function which is referred by 'this' keyword in the function
//outer()

//2. in this case a fresh new object is created by JS engine for outer function, which will be referred by this keyword in the function. window object of DOM is longer the owner
const newOuterOwner = new outer()
console.log(newOuterOwner.x)