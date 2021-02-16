const daugther = ['VAlesk', 'livalena']
const sons = ['Uaxi', 'joao']

const all = sons.concat(daugther)

console.log(all)

console.log([].concat([1, 2], [3, 4], 5, [[1, 2]]))

// flat map

// map value and after concat

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
