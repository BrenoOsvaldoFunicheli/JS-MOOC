//  let have block scope
var number = 1
{
    let number = 2
    console.log(number)
}

console.log(number)

//  The same do when you have two variable let, 
//  because internal let variable has block scope 
//  and it doesn't gets in the way


//  when you declare the variable it searches on internal scope
//  But it doesn't find it searches on external scope
var number = 1
{
    let number = 2
    console.log(number)
}

//  let have one scope more than var

//  loop scope
for (let i = 0; i < 10; i++){
    var a = i
}

//  so, i aren't available


//  solve of the historical problem
//  because let have block scope
//  so, when you put the anonymous function
//  that referecering to variable declared 
//  it doens't guilty the error
const lst_fnc = []

for (let i = 0; i < 10; i++) {
    lst_fnc.push(function () {
        console.log(i)
    })
}


lst_fnc[1]()
lst_fnc[2]()


// the function has cons-cious-ness
