// Notação literal de objetos

// keys pairs are literal notation to object
//  object is key:value
const prod1 = {}
prod1.name = 'CellPhone'
prod1.price = 4899.80

// you can use brackets
prod1['Separated Value'] = 'Value' // worst pratice

console.log(prod1)

// second form
// remembering that object are key value pairs
prod2 = {
    name: 'Camisa',
    price: 79.90,
    obj: {
        // it's possible create nested atribute objects
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}


// JSON
//  need of the quotes to represatation
// link to search and validation https://jsonlint.com/
'{"name":"Camisa","price":79.80}'