// Estrutura linear de armazenamento

const lst_vl = [1, 2, 4, 5.5]

console.log(lst_vl)

// js remains firm
console.log(lst_vl[2])
// when there aren't values js doesn't throws values
console.log(lst_vl[4])

//  you can input value on abstract position
lst_vl[10] = 1
console.log(lst_vl)

// length of array
console.log(lst_vl.length)

// array heterogeneous
lst_vl.push('2', 1, 2, { 'id': 4 })
console.log(lst_vl)

//array is indexed structure
// deleting values of array
lst_vl.pop() // last index
console.log(lst_vl)

delete lst_vl[2]
console.log(lst_vl)

// Array is a object
console.log(typeof lst_vl)
