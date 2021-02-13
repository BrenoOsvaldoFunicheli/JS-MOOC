//  this always is the object that is referenced in the running context
function f1() {
    if (this == global) {
        console.log('Is Equal')
    }
}

f1()

// there are some problems with the this in the context
//  This can change depend on context
// because it's the caller of the function
//  so if you call of the anywhere it's this will be change



//  arrow function has two motive to are
//  first is the lexical context is persisted 
//  to be short declarative form
const f3 = () => console.log(this === global)

f3()

//  PART 2 - BIND
//  You can link this with the lexical context
const person = {
    greeting: 'Hello',
    talk() {
        // if you don't use this.
        // it will throw an error
        console.log(this.greeting)
    }
}

person.talk()

// if you use the normal function you can lost reference
const talk_without_reference = person.talk

//  it loses reference of the attribute greetings
//  when is attributed to other variable
talk_without_reference() //  this function returns undefined

//  bind doesn't change the original variable it copy
//  to linking the value 

// you need to reference the object that contains attribute
const talk_bind = person.talk.bind(person)
talk_bind()

//  PART 3
//  Other way to link reference is storing
//  into constant to persist this variable's value

//  if you do this way will happen a problem
//  because the caller this function is the timer of the setInterval function
//  so, you can use bind after function or...
function Pessoa() {
    this.years = 0
    setInterval(function() {
        this.years++
            console.log(this.years)
    } /*.bind(this)*/ , 500)
}

// store this in the constant
function Person() {
    this.years = 0
    const self = this // holds the this value
    setInterval(function() {

        self.years++
            console.log(self.years)
    }, 500)
}

new Person