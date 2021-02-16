const ferrari = {
    model: 'F40',
    velMax: 324
}

const volvo = {
    model: 'V40',
    velMax: 200
}


console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

// Object doesn't has anything prototype
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ == null)

// All function has a attribute prototype
// the __proto__ attr show the prototype of an object

//the attr prototype only are inside of function

function MyOb() {

}

console.log(typeof Object, typeof MyOb) // both are function
console.log(Object.prototype, MyOb.prototype) // points to itself 


// PART 2

const grandfather = { attr: 'A' }

const father_ = { __proto__: grandfather, attr2: 'B', attr3: 'shadowing' }

// shadowing attr3
const son_ = { __proto__: father_, attr3: 'C' }

console.log(son_.attr, son_.attr2, son_.attr3)

// 

const car = {
    val: 0,
    vel: 200,
    speedup(delta) {
        this.vel += delta
    },
    status() {
        console.log(this.vel, ' of ', this.val)
    }
}

const ferrari_1 = {
    __proto__: car,
    model: 'F40',
    velMax: 324
}

const volvo_1 = {
    __proto__: car,
    model: 'V40',
    status(){
        console.log('Ola ', super.status()) // refer status on the father
    }
}


Object.setPrototypeOf(ferrari, car)

Object.setPrototypeOf(volvo, car)


// only attr that belong to object will be list on the consolo.
// but you can access it behind for statement and to called
console.log(ferrari)
console.log(volvo)

ferrari.speedup()
console.log(ferrari.status())

volvo.speedup()
console.log(volvo.status())

// PART 3

const father = { name_: 'Peter', HairColor: 'black' }

const son1 = Object.create(father)

// if you don't assing other value to one heitarge attr
// it won't show on the object.keys()
son1.name_ = 'Ana'

console.log(son1.HairColor)

const son2 = Object.create(father,
    {
        name_:
        {
            value: 'bia',
            writeable: false, // final value, doesn't allow changes
            enumerable: false // Allow  or not the list value
        }
    }
)


// because of writeable, doesn't change 
console.log(son2.name_)
son2.name_ = 'Carla'

//the same name of its father, because of writeable
console.log(`${son2.name_} tem cabelo ${son2.HairColor}`)


console.log(Object.keys(son1))

// because of enumarable, when you try show attr values, it doesn't show
// values of an object
console.log(Object.keys(son2))


// test to show only unhieritage
for (let key in son2) {
    son2.hasOwnProperty(key) ? console.log(key) : console.log(`By hiertage: ${key}`)
}


console.log(Object.entries(son1))


// PART 4
// understanding values apart from 


// FUNCTION -> prototype (model object)
// OBJECT   -> __proto__ (pointer that points to model object)

function myObject() {

}

console.log(myObject.prototype)

const obj1 = new myObject
const obj2 = new myObject

// all objects created with the same Model have the same prototype
console.log(obj1.__proto__ === obj2.__proto__)

// So all objects created points to attr  prototype of them own father class
console.log(myObject.prototype === obj1.__proto__)


myObject.prototype.name__ = 'ant'
myObject.prototype.talk = function () {
    console.log(`Hello!! my name is ${this.name__}`)
}



// accessing attr and properties of yours own father classes
obj1.talk()

obj2.name__ = 'NS'
obj2.talk()

obj1.talk()

// referring father class
const obj3 = {}

// the following statment show what proto attr represent
// it point to prototype attr of any function, that is the model on js
obj3.__proto__ = myObject.prototype

console.log((new myObject).__proto__ === myObject.prototype) //true

// literal notation and new Object points to Object.prototype
console.log({}.__proto__ === Object.prototype) //true
console.log((new Object).__proto__ === Object.prototype) //true

// but behind of definition functions have its own prototypes
// that can be access by __proto__
console.log(myObject.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

// only objects have __proto__ attr
// functions have prototype attr

// prototype show that certain element is a model

// Function == class definition when you instance the function as an object


// your definition is an instaced object
// all object hiertag of the instance object
// none class hiertage of an object, but it's of model object that 
// is inside of definition
// that model is an object that stay inside of the defintion of the function
// so none class, or object points to another class but to object model of the one classe

// um objeto instanciado não aponta para uma classe, mas sim para um atributo que está dentro dessa classe
// que representa essa classe em tempo de execução. Esse atributo aponta
// para um objeto instanciado que contém todas as propriedades dessa classe.
// Então nenhum objeto aponta para uma DEFINIÇÃO[FUNÇÃO], mas sempre para os moldes 
// dessas classes.
// uma funcao aponta também para um objeto[referencia] molde de outra classe
// e nunca para outra classe. 

// as classes bases como Function e Object, tem por padrão um objeto molde para si.
// esse objeto molde não aponta para nenhum objeto molde de nenhum outro lugar
// porque eles são os moldes pais de todos os outros.
// Por isso tentar acessar Object.prototype[molde] .__proto__ de um objeto nada mais é do que dizer que existe um classe
// molde sobre a qual Object foi criada e por consequeência a qual o molde de object dela
// aponta.

// instanciar objetos em js nada mais é do que cloná-los de um objeto molde
// que toda a função/classe define quando é declarada

// Então, quando você cria uma classe você automáticamente está criando um objeto 
// base, ao qual todos os objetos "instanciados" a partir dessa classe vão clonar


// WHEN I HAVE OBJECT ?
// 1. literal notation
// 2. class instance
// 3. New operator above constructor function


// PART 5

// all following definition are function
// as all functions have the prototype attribute.
// all following declarations have that attr
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('School Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['1a', '2', '3', '4', '5'].first())

console.log(String.prototype)


// take care, because when you override default function you can break up all behavior
String.prototype.toString = function () {
    return 'Lascou sss...'
}

console.log('Scola s'.reverse())


// PART 6

// understading new operator

function Class(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const cl1 = new Class('v1', 123)
const cl2 = new Class('v2', 456)
console.log(cl1, cl2)

// emulate new

function create(f, ...params) {
    const obj = {} // create a new object
    obj.__proto__ = f.prototype // binding attr __proto__ of the one object

    // NOTE: WHEN DECLARE ONE CLASS, BEFORE YOU INSTANCE ANY OBJECT THIS
    // CLASS JUST HAS THE ATTR PROTOTYPE [OBJECT MODEL] THAT REPRESENT IT

    // IN THE FOLLOWING DEFINITION the first param define who will be the
    // this, so it define the context
    f.apply(obj, params) // calling function with a apply 
    return obj
}