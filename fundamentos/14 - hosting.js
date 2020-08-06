//  hosting is defaul behavior of moving declaration to the top
console.log('a = ', a)
var a = 2
console.log('a = ', a)

//  The follow code is similar this
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

//  hosting also happen on function

function hosting() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}

//  some variable that you define on anywhere of code will be hosting to init
//  host just happen when you use var variables