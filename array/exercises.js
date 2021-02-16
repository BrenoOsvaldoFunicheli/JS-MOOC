function concat_str(str) {
    return 'Hello ' + str
}

function change2years(years) {
    return 365 * years
}

const paymment = (workes_hours, value) => "The salary is " + workes_hours * value

const getMonthName = function getMonthName(n_month) {
    month = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out', 'Nov', 'Dez']

    return month[n_month - 1]
}

const moreThan = (a, b) => { a > b }

// REVERSE VALUE
const reverse = function (value) {

    if (value.constructor === Boolean) {
        return !value
    } else {
        return - value
    }
}

console.log(reverse(1))
console.log(reverse(false))
console.log(reverse(true))

// REPEAT VALUE N TIMES
function nTimes(times, value = '+') {

    acc = ''
    for (let i = 0; i < times; i++) {
        acc += value
    }

    return acc
}

console.log(nTimes(25))

const firstAndLast = function (array) {
    return [array.pop(), array.shift()]
}

console.log(firstAndLast([1, 2, 3, 4, 54]))

function RemoveProperty(obj, property) {
    new_obj = Object.create(obj) // this method use obj as a protoype
    // new_obj = Object.assign({}, obj) // this method clone all properties of obj to first object

    delete new_obj[property]

    return new_obj
}