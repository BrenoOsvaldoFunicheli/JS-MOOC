// all function are types

function getPrice(tax = 0, currency = 'BRL') {
    return `${currency} ${this.price * (1 - this.desc) * (1 + tax)}`
}

const product = {
    name: 'note',
    pric: 5600,
    desc: 0.15,
    getPrice
}

global.price = 70
global.desc = 0.1

console.log(getPrice)
console.log(product.getPrice())

const car = { price: 5000, desc: 0.22 }

// atribute calls
console.log(getPrice.call(car))
console.log(getPrice.apply(car))

// difference

// without array
console.log(getPrice.call(car, 0.17, 'BRL'))

// params inside array
console.log(getPrice.apply(global, [0.17, 'BRL']))