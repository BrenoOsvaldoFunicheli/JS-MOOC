function operation(values, op) {

    let operation_instance = null

    switch (op) {
        case "+":
            operation_instance = function (previous, current) {
                return previous + current
            }
            break;
        case "-":
            operation_instance = function (previous, current) {
                return previous - current
            }
            break;
        case "*":
            operation_instance = function (previous, current) {
                return previous * current
            }
            break;
        case "/":
            operation_instance = function (previous, current) {
                if (current !== 0) {
                    return previous / current
                }

                return 0

            }
            break;

    }

    return values.reduce(operation_instance)
}



console.log(operation([100, 2, 5, 5, 69, 4], '-'))

// 3
function pow(base, exponent) {
    return base ** exponent
}

//4
function div(value, divider) {
    let a = value / divider
    let b = value % divider

    console.log(`result is ${parseInt(a)} and the rest is ${b}`)
}

div(5, 2)

// 5
function convertCurrency(value, Currency = 'R$') {

    value = value.toFixed(2) // assert that number will be 2 

    value = value.toString() // change type to string to manipulatation

    value = value.replace('.', ',') // replace 

    return Currency + value

}

console.log(convertCurrency(10, 5000))

// 7
function Bhaskara(a = 0, b = 0, c = 0) {

    delta = Math.sqrt((b ** 2) + (-4 * a * c))

    x1 = (-b + delta) / 2 * a

    x2 = (-b - delta) / 2 * a

    return { x1, x2 }

}

console.log(Bhaskara(1, -1, -6))

// 12
function fat(n){

    if (n <= 1){
        return 1
    }else{
        return fat(n-1) * n
    }
    
}

console.log(fat(6))
