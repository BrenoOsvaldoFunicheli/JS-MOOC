//// JSON 
// TEXTUAL FORMAT
// JSON IS A DATA FORMAT
// AND DOESN'T HAS FUNCTION

const OBJ = { a: 1, b: 1, c: 1, d: 1, sum() { return a + b + c + d } }

// Object -> JSON
// Note the exclusion of the function
console.log(JSON.stringify(OBJ))

// String(JSON) -> Object

// wrong form
// Json has quotes
// console.log(JSON.parse("a: 1 , b: 2, c: 3 ")) 

// wrong form
// Json has double quotes
// console.log(JSON.parse("{'a': 1 , 'b': 2, 'c': 3 }")) 

// correct form
// Json has double quotes to attr and to strings

console.log(JSON.parse('{"a": 1 , "b": 2, "c": 3}')) 

// wring form
// string data also has double quotes
// console.log(JSON.parse('{"a": 1 , "b": 2, "c": \'string\' }')) 

