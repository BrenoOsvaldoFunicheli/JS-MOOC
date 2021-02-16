const students = [
    { no: 'Joao', note: 2.4 },
    { no: 'Joao', note: 9.4 },
    { no: 'Joao', note: 8.4 },
    { no: 'Joao', note: 5.4 },
]


// imperative
// less reuse
// The ideia is tell all steps that code need to do
let tot = 0
for (let i = 0; i < students.length; i++) {
    tot += students[i].note
}

console.log(tot / students.length)


// declarative
// explain the what and not how
// more reuse
const getNotes = student => student.note
const sum = (total, current) => total + current

const d_final = students.map(getNotes).reduce(sum)