// promisse is warranty that one result will be return

// first ideia about this is making the callback function with 2 possibilities
// 1. success
// 2. error
// if happen what you wanted the success callback function will be call
// else the error function will be called



// HOW TO UNDERSTANDING PROMISSE CONSTRUCTOR FUNCTION
// receive one callback function
// the callback function passed need to be ready to receive two
// params, the first parameter need to be call when process
// happen rigth and you will fulfill the contract
// the second parameter passed to callback function need to be
// call when process throws any error or doesn't return wanted value

//  SIMPLY EXPLAIN
// resume can be understanding as a object create passing the 
// callback function that receive two other callback functions
// and call one when process happen right and call other if result
// get any error

// GET VALUES
// To get result of any promise object you need acces with then
// and define catch to handle some error that can be

// CALLBACK ON THE THEN METHOD
// the then method wait for a callback function with just one parameter
// this callback function passed to then method handle result get of the promise
// if you return any value from the callback this value will be wrapp inside 
// the another promise value

// JUST ONE PARAMETER
// you only get one and just one parameter
// that can be apply to callback function passed to function
// passed to constructor of promise object
// when you call resolve and reject callback function 
// the unique value consider that will be the first
// any others will be reject by functions

function talkAfter(seconds, pharse) {
    return new Promise(

        (resolve, reject) => {
            setTimeout(() => resolve(pharse)
                , seconds * 1000)
        }

    )

}

// assync processing
talkAfter(3, 'Que legal')
    .then(e => 'Concating string with promisse result: ' + e)
    .then(str => console.log(str))

function oneReturn(seconds, pharse) {
    return new Promise(

        (resolve, reject) => {
            // if you send two params
            // you will lost the other values sended
            setTimeout(() => resolve(pharse, 'other param')
                , seconds * 1000)
        }

    )

}

// promise return only one result
// if you want get more, you need to return object
talkAfter(3, 'Que legal')
    .then((e, two) => console.log('1: ' + e + ' 2: ' + two))


function ThrowErrorOnCatch(seconds, pharse) {
    return new Promise(

        (resolve, reject) => {
            // if you send two params
            // you will lost the other values sended
            setTimeout(() => reject(pharse, 'other param')
                , seconds * 1000)
        }

    )

}

// promise return only one result
// if you want get more, you need to return object
talkAfter(3, 'Que legal')
    .then((e, two) => console.log('1: ' + e + ' 2: ' + two))
    .catch(e => console.log('In this case, pharse was passed to reject function, on the promise definition, that returns value to catch function. That is calling on promise object'))

    
    // come back to promise 01

    