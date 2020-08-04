//undefined
let valor // not init
console.log(valor)

//  null represents that the variable don't appoint to anywhere
valor2=null
console.log(valor2)

//  when variables aren't defined and you try access some value the program throws a typeerror
// console.log(valor2.toString())


const product = {}

console.log(product) // it's defined
console.log(product.name)   // it's undefined
// console.log(product.name.other) // it's null

product.price = 3.80
console.log(product)

product.price = undefined   // Don't use this
console.log(!!product.price)
console.log(product)    // variable already, but undefined value 