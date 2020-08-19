function area(width, height) {
    const area = width * height

    if (area > 20) {
        console.log('valor acima')
    } else {
        return area
    }

}

console.log(area(2, 2)) //  normal using
console.log(area(2)) // supression using, that return NaN(because sum Undefined with number)
console.log(area()) //  returns NaN
console.log(area(2, 3, 25, 5)) // send params a lot
console.log(area(6, 6)) // change behave of the method


//  variable params

function sum() {

    let sum = 0

    // all function have arguments parameters
    for (i in arguments) {
        sum += arguments[i]
    }

    return sum
}

console.log(sum(1, 2))
console.log(sum(1, 2, "s"))