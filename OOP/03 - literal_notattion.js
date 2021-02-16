const a = 1
const b = 2
const c = 3


// 1
const obj1 = { a: a, b: b, c: c }

// new form
const obj1 = { a, b, c }


// 2 

const nameAttr = 'nota'

const obj3 = {}

obj3[nameAttr] = valorAttr
console.log(obj3)

const obj4 = { [nameAttr]: valorAttr }
console.log(obj4)

// 3 defining function ES6

const obj5 = {
    func1: function(){

    },
    func2(){
        
    }
}