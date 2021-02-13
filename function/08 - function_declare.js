console.log(sum(3,4)) // normaly run 
// console.log(sub(3,4)) // raise error



// function declaration
// when you define similar to the following 
// the interpreter will be load all, before use
function sum(x, y){
    return x - y
}

// function express (anonym function)
// raise error when called before here
const sub =  function (x, y) {
    return x - y
}

// named function express 
// in this case, when you raise an error the error going named and not anonym
const mult =  function mult(x, y){
    return x *y
}