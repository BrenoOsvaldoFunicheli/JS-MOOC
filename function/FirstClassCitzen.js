//  Funcao on js is first-class Object (citizens)
// high-order function

// functions always return some value
// functions are data

// literal construction
function fun1() {}

// Store on variable
const fun2 = function() {}

//  Store on array
const array = [function(a, b) { return a + b }, fun1, fun2]

// store inside object
const obj = {}
obj.talk = function() { return 'Opa' }
console.log(obj.talk())

//  you can received one function with parameter
function functionAsParameter(parameter_fun) {
    parameter_fun()
}

// function that return another function
function sum(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(5)

const SUM_MORE = sum(2, 3)

SUM_MORE(2)