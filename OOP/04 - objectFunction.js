const person = {
    name_: 'rebeca',
    year: 2,
    weigth: 13
}

// keys of an object
console.log(Object.keys(person))

// values of an object
console.log(Object.values(person))

// key and value of an object
console.log(Object.entries(person))

Object.entries(person).forEach(([key, value]) => {
    console.log(key)
});


// attribution

Object.defineProperty(person, 'BirthDate', {
    enumerable: true,
    writeable: false,
    value: 'nas'

})

person.BirthDate = '01/02/2020'
console.log(person.BirthDate)
console.log(Object.keys(person))


// concatanation of objects

const dest = { a: 1 }
const o1 = { b: 1 }
const o2 = { c: 1, a: 3 }

// this method join first object with eith others
// Note that similar name of properties will be override
// And only the last values will be stay
const o = Object.assign(dest, o1, o2)
console.log(o)

/*
Introspecção = reflection

Reflection = ler conteúdo de um objeto, isto é,
verificar as propriedades, listar e 
trabalhar sobre o conteúdo
de um objeto, fazendo alterações sobre ele
*/
