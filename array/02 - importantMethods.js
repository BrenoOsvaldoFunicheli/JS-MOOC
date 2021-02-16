const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// remove element of the last position
pilots.pop()
console.log(pilots)

// add elemento on the final of the array
pilots.push('Verstappen')
console.log(pilots)

// remove element of the first position
pilots.shift()
console.log(pilots)

// add element in the first position on the array
pilots.unshift('Hamilton')
console.log(pilots)

pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

pilots.splice(3, 1) // delete 1 element from index 3
console.log(pilots)


// get slice of the array apart from number
const somePilots =  pilots.slice(2)
console.log(somePilots)

// get slice of the array from number to other number
const somePilots2 =  pilots.slice(1,4)