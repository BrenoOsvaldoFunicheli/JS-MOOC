// lexical context
const value_ = 'Global'

function myfunction(){
    console.log(value_)

}

function exec(){
    const value_ = 'Local'
    myfunction()
}

exec() // will be print the global value

// In Javascript all function know where they was defined

// The function always will search, first on the defined local and
// after on the more wide scope.
// The Js's functions none search on the execution context

// PART 2 - CLOUSURE

// It's the defined scope where the function was defined
// this scope allow to access and manage external variables defined next to the function

const x = 'Global'

function out (){
    const x = 'Local'

    function in_(){
        return x
    }

    return in_
}


// the phisical local where the function was 
// defined it's very important
const my_function = out()
console.log(my_function())