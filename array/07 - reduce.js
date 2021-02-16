const students = [
    { no: 'Joao', note: 2.4 },
    { no: 'Joao', note: 9.4 },
    { no: 'Joao', note: 8.4 },
    { no: 'Joao', note: 5.4 },
]

// the reduce iterate on array and transform all values in one
// It wait the function that work with tow params
// first is accumlated value and second is a current value

const result = students.map(a => a.note).reduce(function (acc, current) {
    // acc is the accumulated value that be  operting
    console.log(acc, current)
    return acc + current
})

console.log(result)

const result2 = students.map(a => a.note).reduce(function (acc, current) {
    // acc is the accumulated value that be  operting
    console.log(acc, current)
    return acc + current
},
    0) // start value

console.log(result2)

// PART 3

// EMULATION
Array.prototype.reduce2 = function reduce2(callback, init_value) {

    const init_index =  init_value ? 0 : 1

    let acc = init_value ?? this[0]

    for (let i = init_index; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }

    return acc
}