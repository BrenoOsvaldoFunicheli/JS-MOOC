// Let pode mudar e no const não permite mudança de valor

//  Some languages have scope
//  var definitions are visible inside of blocks that aren't function
{
    {
        {
            {
                var should = 'What of'
            }
        }
    }
}

console.log(should)
// var can be just two scope

//  when you declare some variable inside of function
//  it's local 
function test() {
    var local = 123
    console.log(local)
}

//  so, if you try call it, it'll throws error
//  console.log(local)

//  all variables on browser are  in the window
//  At Node all variables are in the global element

//  var have global scope
var a = 'number1'
{
    var a = 'number2'
    console.log(a)
}

console.log(a)


//  var haven't block scope
for (var i = 0; i < 10; i++) {
    var a = i
}

//  the value still are there
// console.log(i)



//  historical problem
const lst_fnc = []

//  when you use var the js function doesn't preserve the value of the variable
//  so, it throws the same value to all of them
for (var i = 0; i < 10; i++) {
    lst_fnc.push(function () {
        console.log("i=" + i)
    })
}

lst_fnc[2]()
lst_fnc[3]()