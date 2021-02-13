// callback é nada mais é do que 
// chamar uma funcção que foi passada(registrada) de acordo 
// com o acontecimento de determinado evento

// callback is call again.
// It's when you send the function to another function 
// A function, that received one function call the second function

const manufacturer = ['Audi', 'Mercedes', 'BMW']

function print(name, index) {
    console.log(`${index + 1}. ${name}`)
}

manufacturer.forEach(print)

// callback is more compreenhesive when you understand to
// each event that happens, the function will call sended function that
// was passed

// PART 2
// example to callback implementation


//without callback

const notes = [7, 7, 6.5, 5.2, 3.6, 9.0, 7.1]

let LowNotes = []


for (let i = 0; i < notes.length; i++) {

}

for (let i in notes) {
    if (notes[i] < 7) {
        LowNotes.push(notes[i])
    }
}

console.log(LowNotes)

// with callback

// filter that contract that happens like this:
// if the value will be true, then the value it'll in the new array
// case not, it iterate to next value

// True: add
// False: skip

LowNotes = notes.filter(function (note) {
    return note < 7
})

LowNotes = notes.filter((note) => note < 7)

console.log(LowNotes)