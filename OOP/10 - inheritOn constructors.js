

// CONSTRUCTOR FUNCTION ON JS
function Father_function(name, last_name) {
    this.name = name
    this.last_name = last_name
}

console.log(Father_function('na','s'))


// BEST WAY
// first step
// this step doesn't ensure that be inherit his father
function Son_function(name, last_name, param1) {

    // the following definition work as a
    // instanciar um atrbuto que usa o this de referencia 
    // da seguinte forma. Quando você instancia um nov objeto
    // o this param é substituido por aquele objeto e então
    // ele instancia dinamicamente as propriedades que estão no pai
    // porque aquele objeto é passado como contexto da function pai
    // então tudo que ela faz ou tem é dinamicamente criada no objeto filho
    Father_function.call(this, name, last_name)
    
    this.param1 =param1
}

// so you need put the prototype
// Son_function.prototype = Object.create(Father_function.prototype)
Son_function.prototype.__proto__ = Father_function.prototype


// OTHER FORM
function Son_function2(name, last_name, param1) {
    Father_function.call(this, name, last_name)
    this.param1 =param1
}

Son_function2.prototype = Object.create(Father_function) // its wrong ideia

Son_function2.prototype.constructor = Son_function2



// TEST
t1 = new Son_function('d', 'v', 1)

console.log(t1)

console.log(Son_function.prototype.__proto__)

// constructor attr is a property of the object
console.log(t1.constructor)
console.log(t1.__proto__)


// important links

// https://dmitripavlutin.com/understanding-constructor-property/#:~:text=The%20constructor%20property%20in%20a,to%20reference%20the%20constructor%20function.&text=Because%20properties%20are%20inherited%20from,on%20the%20instance%20object%20too.&text=Even%20if%20the%20object%20is,inherits%20the%20constructor%20from%20Object.
// https://dzone.com/articles/how-to-create-basic-inheritance-in-javascript-cons