// set is not indexed structure and not repeateable


// array is indexed
// object is indexed
// because you can get element by key

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('palm').add('Corinti')
times.add('Flam')

times.add('Sao Paulo') // not added

// properties

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flam')
console.log(times.has('Flam'))

const names = ['Rachel', 'Luc', 'Jul', 'Luc']
const namesSet = new Set(names)
console.log(namesSet)