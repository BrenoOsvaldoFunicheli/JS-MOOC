console.log(typeof Object)
console.log(typeof new Object)  //  here are an object
console.log(typeof new Object()) // you can set params of constructor

const Client = function (){}

console.log(typeof new Client)

class Product {}

console.log(typeof Product) //  it's a function
console.log(typeof new Product) //  it's a object