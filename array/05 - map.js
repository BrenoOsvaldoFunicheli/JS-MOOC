// map
// transform array in other with the same length

const nums = [1, 2, 3, 4]


// map create a new array and doesn't modify the origin arra
// map need that function return some value
let double = nums.map(function (e) {
    return 2 * e
})

console.log(double)

// using arrow function
// implicit return
const sum10 = e => e + 10
const triple = e => e * 3

const toCurrency = e => `RS ${parseFloat(e).toFixed(2).replace()}`

// map can be 
result =  nums.map(sum10).map(triple).map(toCurrency)

console.log(result)

// EXERCISE

const car = [
    '{"name":"bora", "price":3.45}',
    '{"name":"borb", "price":13.45}',
    '{"name":"borc", "price":43.45}'
]

// ugly solution
const getPrice = e => JSON.parse(e).price
prices = car.map(getPrice)
console.log(prices)

// best solution
const getProducts = product_str => JSON.parse(product_str)
const getPriceByProduct = product => product.price
prices2 = car.map(getProducts).map(getPriceByProduct)
console.log(prices2)

// emulation Map

Array.prototype.map2 = function(callback){

    const array_mapped = []

    for(let  i = 0; i < this.length; i++){
        let result = callback(this[i], i, this)
        array_mapped.push(array_mapped)
    }

    return array_mapped

}