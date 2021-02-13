const prod1 = {
    name_: "...",
    price: 45
}


// Factory, it's the function that returns the object

function createPerson() {
    return {
        name_: 'Ana',
        last_name: 'Silva'
    }
}

// PART 2

// It's important pay attention, that we don't need to put the prop:prop
function createProduct(name, price) {
    return {
        name,
        price
    }

}

console.log(createProduct('Notebook', 3.15))

// PART 3

// CLASS
class Person {
    constructor(name_) {
        this.name_ = name_
    }

    talk() {
        console.log(`My name is ${this.name_}`)
    }
}

p1 =  new Person('Joao')
p1.talk()

// FACTORY FUNCTION
const create_person = name_ => {
    return {
        talk : () => console.log(`My name is ${name_}`)
    }
}
p2= create_person('Jonas')


// The main difference between constructor function and factory is the fact of 
// factory returns object, it's {} notation, the instanced object, and constructor function returns
// make the "class" to instance object after


// on the class the "this" word is need and on the factory class isn't
// CAME BACK 85 CLASS


// PART 4

// change class to constructor function
function Person(name_){
    this.name_ = name_

    this.talk = function talk(){
        return this.name_
    }
}

// OR

// In this case, you can't change the name inside of function
function Person2(name_){
    
    this.talk = function talk(){
        return name_
    }
}