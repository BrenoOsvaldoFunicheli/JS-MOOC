
// class == constructor function
class Lanc {
    constructor(name_ = '', value = 0) {
        this.n = name_,
            this.value = value
    }
}

class FinancialCycle {

    constructor(month, year) {
        this.month = month
        this.year = year
        this.lanc = []
    }

    addLanc(...lanc) {
        lanc.forEach(
            l => this.lanc.push(l)
        )
    }

    summary() {
        let valueConso = 0
        this.lanc.forEach(
            l => { valueConso += l.value }
        )

        return valueConso
    }
    //
}

const salary = new Lanc('Salary', 45000)
const LightPayment = new Lanc('Light', -220)

const recipe = new FinancialCycle(6, 2018)
recipe.addLanc(salary, LightPayment)
console.log(recipe.summary())

// PART 2

class Grandfather {
    constructor(last_name) {
        this.last_name = last_name
    }
}

class Father extends Grandfather {
    constructor(last_name, profession = 'teacher') {
        super(last_name)
        this.profession = profession

    }

}

class Son extends Father {

    constructor() {
        super('Silva') // call the super class constructor
        // super.method(). Call method declared on the super class
    }
}

const son1 = new Son

console.log(son1)

// Hiertage on constructor functions

function Class1() {
    // he doesn't show how to get hiertage on the constructor function

    this.public = 'public attribute'
}

a = new Class1
// b = new Class1()

console.log(Class1.prototype)

// the prototype attr on the class is the base object that is used to clone others

const f = function at() { }

console.log(typeof f) // function
console.log(typeof f()) // none

