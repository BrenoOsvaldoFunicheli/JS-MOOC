// Função is a code block that do some thing

console.log(typeof Object) // is an Object

function printSum(a, b) {
    console.log(a + b)
}

//  you can pass two values
printSum(1, 2)

//  you can pass one value
//  Return a Not a Number, because sum with the first number with undefined
printSum(1)

//  you can pass value a lot
printSum(10, 2, 4, 56, 5)

//  you can pass none
printSum()


function sum(a, b = 0) {
    return a + b
}

console.log(sum(1, 2))

console.log(sum(1))

//  Atribution of function to variable
//  This is the anonymous function
const sum_var = function (a, b) {
    return a + b
}

console.log(sum_var(1, 3))

//  Arrow function can be declared without reserved name function
const sum_var_arrow = (a, b) => {
    return a + b
}

console.log(sum_var_arrow(8, 9))

//  implicit return
//  only line expression
const subtraction = (a, b) => a -b

console.log(subtraction(3, 5))


const generation = a => 1
