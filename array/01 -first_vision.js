console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Bia', 'Carlos', 'Ana')
console.log(approved)

approved = ['Bia', 'Carlos', 'Ana']

console.log(approved[0])
console.log(approved[1])
console.log(approved[2])

// The following code doesn't throw exception and error
// because all values added are setting undefined up
console.log(approved[3]) 

approved[3] = 'Paul' // more used to edit value
approved.push('Abia') // more to add values

console.log('lenght: ', approved.length, ' ', approved)

// the following code add element on index 9 
// and add undefined values between them
approved[9] = 'Rafa'

// empty values
console.log(approved[8] === undefined)

console.log(approved.length)

//sort elements
console.log(approved.sort())
console.log(approved)

// the following code doesn't delete others element, only index one
delete approved[1]
console.log(approved[1])
console.log(approved[2])


approved = ['Bia', 'Carlos', 'Ana']

// manage elements
approved.splice(1,1) // after index one delete one element
console.log(approved)

// delete 1 after one and add element
approved.splice(1,1,'added after')
console.log(approved)

