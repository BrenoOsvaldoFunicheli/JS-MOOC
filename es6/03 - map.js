// key and pair value when key can be any value


// map doesn't accept reapted keys
const technologies = new Map()

technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log(technologies.react) // undefined
console.log(technologies.get('react').framework) // value

const Manykeys = new Map(
    [
        [function () { }, 'Function'],
        [{}, 'Object'],
        [123, 'Number']
    ]
)

Manykeys.forEach(
    (vl, ch) => { console.log(ch, vl) }
)

console.log(Manykeys.has(123))

console.log(Manykeys.delete(123)) // delete element and return if it can delete

console.log(Manykeys.has(123))

console.log(Manykeys.size)