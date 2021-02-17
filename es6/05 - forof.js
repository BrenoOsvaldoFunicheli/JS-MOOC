// for in iterate on index

elements = ['a', '2', '4', '']

for (e in elements) {
    console.log(e) // print indexes
}

// for of iterate on values


for (e of elements) {
    console.log(e) // print elements
}


const subjects = ['map', 'set', 'promisse']

// iterate on string
for (let letter of 'Coder3') {
    console.log(letter)
}

//indexes
for (let i in subjects) {
    console.log(i)
}


// map is key value
const subjectMap = new Map(
    [
        ['map', { approached: true }],
        ['set', { approached: true }],
        ['promisse', { approached: false }]
    ]
)

for (let subject of subjectMap) {
    console.log(subject)
}

// DIRECT DESTRUCTURING
for (let [key, value] of subjectMap) {
    console.log(key, ' ', value)
}

// GET KEYS
for (let key of subjectMap.keys()) {
    console.log(key)
}

// GET VALUES
for (let value of subjectMap.values()) {
    console.log(value)
}

// DESTRUCTURING
for (let [key, value] of subjectMap.entries()) {
    console.log(key, ' ', value)
}

// QUESTION: CAN I ITERATE BY NOT INDEXED STRUCTURE WITH IN ?

// ANSWER = NOT
setSubjects = new Set(['s', 2, 13, 4])
for (let i in setSubjects) {
    console.log('where ?')
    console.log(i)
}

for (let i of setSubjects) {
    console.log('where ?')
    console.log(i)
}