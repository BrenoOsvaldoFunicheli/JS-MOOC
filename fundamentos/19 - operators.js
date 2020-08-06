//  types of operators
//  infix
const [a, b, c, d] = [1, 2, 3, 4]

//  posfix
// a++

//  prefix
// ++b

// unary
// - a

//  arithmetic operators are binary operators
const sum = a + b
const sub = b - c
const mult = c * d
const div = d / c
// const module = a % b

//  new aRithMetic operator
const pow = a ** b

//  Relational Operators

console.log('01)', '1' == 1)    //  returns true, 'cause doesn't consider type to comparison
console.log('02)', '1' === 1)   // returns false, considers type, so the value is false
console.log('03)', '3' != 3)    //  returns true, 'cause doesn't consider type to comparison
console.log('04)', '3' !== 3)   // returns false, considers type, so the value is false

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 <= 2)

//  doesn't differ equals of the strict
//  because it'll compare the reference value
const d1 = new Date(0)  // when Date is equals to oh, the standard value is 1970
const d2 = new Date(0)

//  Both values will return false!!!
console.log('09)', d1 === d2)
console.log('09)', d1 == d2)

//Both are true, because the number values returns the same value
console.log('10)', d1.getTime() == d2.getTime())
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)


//  Logic Operators
function buys(work1, work2) {
    const buyIceCream = work1 || work2
    const buyTV50 = work1 && work2
    const buy32 = work1 != work2
    const beFitness = !buyIceCream

    // you can set values without key, with only values
    //  ES15
    return { buyIceCream, buyTV50, buy32, beFitness }
}

console.log(true, true)


//  Ternary
const result = 1 < 2 ? '1 is greter then two' : 'Math is dead!'
