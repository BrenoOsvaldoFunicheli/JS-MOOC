let double = function(a) {
    return 2 * a
}

// arrow function has an fix this
//  function arrow is the anonymous function
double = (a) => {
    return 2 * a
}

//  when you don't set body of the function
//  the return is implicit
double = a => 2 * a


//  when you don't have some params you 
//  need set the ()
ola = () => 'Ola'

//  Or setting one param _
ola = _ => 'Ola'


console.log(double(Math.PI))


//  Part 2 - immutable this context

//  In this case the this value doesn't change
//  because when you use arrow function
//  it preseves the lexical context
//  and as the function was written into Person function
//  the this value is fixs
function Person() {

    //  here the variable years belong to object that is creatting
    //  during objects instance
    years = 0
    setInterval(() => {
        this.years++
            console.log(this.years)
    }, 500)
}

//  functin doesn't has some this reference
//  unless it was constructor function
//  in that, it just will have some this
//  when intanced

// new Person //  I need to instace that object to see value this in action

//  PART 3 
// bind and arrow function

let comparison_with_this = param => console.log(this == param)

comparison_with_this(global) // this value is false, because into the node context anyone is module context

// this value is true
// because this function is into this file, so belong to this file
comparison_with_this(module.exports)

const obj = {}
comparison_with_arrow = comparison_with_this.bind(obj)

// this definition with bind, doesn't change lexical reference
comparison_with_arrow(obj)

// reference doesn't change same using bind after function
comparison_with_arrow(module.exports)