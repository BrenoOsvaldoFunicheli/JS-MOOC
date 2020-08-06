const greeting = 'Hello'    //  contexto léxico

function exec() { 
    const greeting = 'Hello Man!!'  //  scope
    return greeting
}

//  objects are nested key/value pairs
const client = {
    name: 'Peter',
    years_old: 32,
    adress: {
        number: 123
    }
}

//  Point Notation
//  you can access members of the function
const obj1 = {}

//  you can create or set values
obj1.name = 'Ball'  //  The value os automaticAlly created
obj1['name'] = 'Ball2'  // update value with 

function Obj(name){
    this.name = name
}


const obj2 = new Obj('Chair')
console.log(obj2.name)