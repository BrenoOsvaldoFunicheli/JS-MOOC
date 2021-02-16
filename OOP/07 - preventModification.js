
// PREVENT
// delete and change values


// prevent add new attrs
const prod = Object.preventExtensions(
    { name_: 'a', price: 1.99, tag: 'promo' }
)


// how to check if any object allow extension
console.log('Extensible', Object.isExtensible(prod))

// you can change values
// because it isn't freeze or not writeable
prod.name_ = 'Bor'


prod.desc = 'Borc'

// you can delete attr
delete prod.tag

console.log(prod)


// SEAL
// change attr values
const person = { name_: 'Ju', year: 25 }
Object.seal(person) // this assing doesn't allow delete

person.last_name = 'last' // doesn't allow
delete person.name_ // doesn't allow
person.year = 29 // allow

console.log(person)

// FREEZE
// SEAL + CONST VALUES (Writeable = false)