const school = `ES6`


console.log(school.charAt(1))
console.log(school.charAt(4)) // Doesn't throw any error

console.log(school.charCodeAt(2))

console.log(school.indexOf('S'))

console.log(school.substr(0, 5))  // Doens't throw any error
console.log(school.substr(0, 3)) // It goes from first number to last number without last position

// Don't alter object
// concatenation
console.log('School'.concat(school).concat("!"))
console.log('School' + school)

// expression can be used with regex
console.log(school.replace("/\d/w", "3"))

console.log('Ana,Maria,Marta'.split(/,/))


// template string
// can be broken line
// interpolation the variable
console.log(`Eii.... `)

// simple use
const name_ = 'Rebeca'
const template =  `Olá ${name_}` 
console.log( template)

// interpolation
console.log(`1+1 = ${1+1}`)


// Elo Function
const up = text => text.toUpperCase()

console.log(`${up(name_)}`)