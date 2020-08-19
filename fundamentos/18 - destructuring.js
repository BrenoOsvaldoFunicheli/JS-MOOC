//ES2015
//  Operator de desestruturação

const person = {
    name: 'Ana'
    , years: 5
    , adress: {
        number: 100
    }
}

// say to person to get the values name and years
const { name, years } = person
console.log(name, years)

//  rename values of the variables
const { name: n, years: y } = person
console.log(n, y)

//  When doesn't has some value the standard value is undefined
//  but, you can set standard value
const { last_name, humor = true } = person
console.log(last_name, humor)

//  nested  destructuring 
const { adress: { number, cep } } = person
console.log(number, cep)

//  you can't try access nested values that you doesn't has certain if there is.
// ex: const { no_one: { something } }


//  Part 2

//  here we are in different position
//  that's we are trying declare the a variable after of the 
//  reserved word
//  however, that's we are trying to put variable on brackets
const [a] = [10]
console.log(a)

//  ignore some values
//  you can catch value by position defined
//  you can jump the position putting the white space, separed by comma
//  if there aren't values, js set undefined
//  you can sey standard value
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//  array destructuring
//  Don't use, because it's harded code
const [, [, note]] = [[, 8, 8], [9, 6, 8]]
console.log(note)

//  Part 3

function rand({ min = 0, max = 1000 }) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

console.log(rand({ max: 50, min: 40 }))

const obj = { max: 50, min: 100 }
console.log(rand(obj))

//  As we have already set standard value up
//  we can set just min value
console.log(rand({ min: 955 }))

//  we can send empty object
console.log(rand({}))

//  you can't send nothing
//  because it's doesn't understand 
console.log(rand())

// you can set standard value up
// function rand({ min = 0, max = 1000 } = {}) {
//     const value = Math.random() * (max - min) + min
//     return Math.floor
// }

//  Part 4

// function rand([min = 0, max = 100]) {
//     if (min < max) [min, max] = [max, min]
//     const value = Math.random() * (max - min) + min
//     return Math.floor(valor)
// }

// console.log(rand([40, 50]))
// console.log(rand(992))
// console.log(rand([, 10]))
// console.log(rand([]))
// console.log(rand())  // this definition will throws error