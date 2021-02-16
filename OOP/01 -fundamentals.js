
// procedure
// procedure that call data
function procedure(v1, v2) {
    console.log(v1)
}

//OO

let obj = {
    v1: 1,
    v2: 3,
    procedure() {
        return this.v1 + this.v2
    }
}

// data that call procedure
obj.procedure()

// principle

// asbtraction
// wrapper
// hierarchy
// polimorphy



// Literal Notation
const obj1 = {
    model: 'a4',
}

// function Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object


// constructor function
// constructor function are function that turn in object when you called it with new
// only there are public and private levels
function Product(name, desc) {
    this.name = name
    this.getPrice = () => {
        return price * (1 - desc)
    }
}

const p1 = new Product('pencil', 7)


// function factory
function createEmployee(name_, salary,) {
    return {
        name_, salary, getSalary() {
            return salary * 10
        }
    }
}

// object create
const son = Object.create(null)
son.name_ = 'Ana'
console.log(son)


// famous function that return object
const fromJSON = JSON.parse('{"key":"value"}')
console.log(fromJSON)

