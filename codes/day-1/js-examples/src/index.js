function outer() {
    var a = 10
    console.log(a)
    this.x = 20
    console.log(this.x)
}
outer()