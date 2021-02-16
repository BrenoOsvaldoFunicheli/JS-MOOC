// on lambda calculus, all function receive only the unique param

// currying
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

r = sum(1)(2)(3)
r

const sum = a => b => c => a + b + c