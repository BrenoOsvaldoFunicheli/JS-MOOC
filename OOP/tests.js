console.log(myObject.__proto__)

function myObject() {

}

// console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Function.__proto__)

function a(){

}

console.log(typeof a) // function
console.log(typeof a()) //null
console.log(typeof new a) // object
console.log(typeof new a()) // object

// test after
// function is a model to create object
// so you can use constructor function that will create new objects
// and classes, that be the same thing


// but what happen when you use the function that returns result to create object 
// what happen with the return


// test 2
// create function that have attr and try manipulate this objects

//test 
// if I create one object by another and I add new features
// that object already instanced will be modified