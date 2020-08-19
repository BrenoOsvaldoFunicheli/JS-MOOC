// Strategy to implements standard params

// #1 boolean operator

function sum1(a, b, c) {
    //  the problem is the fact of the values are in the
    // boolean expression, so when you put the 0, that also is the 
    // false value you are get 1 on the value.

    a = a || 1 // standard value
    b = b || 1
    c = c || 1

    return a + b + c
}

// correct
console.log(sum1(1, 1, 1))

// but
console.log(sum1(0, 0, 0)) //   returns 3

function sum2(a, b, c) {
    // you can use the ternary comparison operator

    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
}


function sum3(a = 1, b = 1, c = 1) {
    return a + b + c
}