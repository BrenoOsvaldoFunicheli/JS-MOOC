const products = [
    { name_: 'Note', price: 200, fragile: true },
    { name_: 'Ipad', price: 2300, fragile: true },
    { name_: 'copo de prata', price: 500, fragile: false },
    { name_: 'copo de ouro', price: 800, fragile: false }
]


// wrong comparison
const only_expensive = function (prod) {
    if (prod.price > 500) {
        return true
    } else {
        false
    }
}


// best comparison
const only_expensive = function (prod) {
    return prod.price > 500

}

const onlyFragile = function (prod) {
    return prod.fragile
}

// 1. filter function work with following logic
// if value test return true, current value 
// passed to callback  will be include on final result
// else this value will be filter

// 2. filter returns a new array
console.log(products.filter(only_expensive).filter(fragile))

// PART 2 

// EMULATION OF FILTER
Array.prototype.filter2 = function(callback){
    const array = []
    for (let i = 0; i< this.length; i++){
        if(callback(this[i],i, this)){
            array.push(this[i])
        }
    }
}