const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(typeof peso1)

//  proposal test
console.log(Number.isInteger(peso1))

//  Particular test
console.log(Number.isInteger('1.0'))


const avaliacao1 = 9.876
const avaliacao2 = 10.0

const media = (avaliacao1 + avaliacao2) / 2

console.log(media.toFixed(2))
console.log(media.toString(2))

// Inaccuracy
console.log(7 / 0)  //  returns Infinity

// Other Tests
console.log('10' / 2)
console.log('show' * 10)    // returns some NaN
console.log(0.1 + 0.8)
// console.log(10.toString()) this operation isn't right

console.log((10).toFixed(2))


// String confusion
console.log("3"+2) // make sense
console.log("3"-2)  //  wrapper