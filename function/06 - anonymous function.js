// Anonym function is a the definition that doesn't has any name

const sum_ = function (x, y) {
    return x + y
}

const print_result = function (a, b, operation = sum_) {
    console.log(operation(a, b))
}

print_result(3, 4)

print_result(3, 4, sum_)

// explicit definition of anonym function
print_result(3, 4, function (x, y) {

    return x - y
})


// The arrow function always is anonym function
print_result(3, 4, (x, y) => x * y)


const person = {
    talk: function () {
        console.log('Opa')
    }
}

person.talk()