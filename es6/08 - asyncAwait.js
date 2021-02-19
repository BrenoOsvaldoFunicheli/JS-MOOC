// async turn code more sync
// await only work inside of async function

http = require('http')

// PROMISSE SOLUTION
const getClassWithPromise = (letter) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`

    return new Promise(
        (resolve, reject) => {
            http.get(url, res => {
                let result = ''

                // consuming piece of the data
                // here you need get part by part of the data
                res.on('data', data => {
                    result += data
                })

                // when finished consuming
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(result))
                    } catch (e) {
                        reject(e)
                    }
                })

            })
        }
    )
}


// GENERIC IDEIA
// Promise.all([getClassWithPromise('A'), getClassWithPromise('B'), getClassWithPromise('C'),getClassWithPromise('D')])
//     .then(class_ => [].concat(...class_))
//     .then(students => students.map(student => student.nome))
//     .then(names => console.log('Promise solution: ' + names))
//     .catch(e => console.log(e))


// the following code only go to next step if all processing 
// was resolve or throw any error

// NOTE: IF YOU REMOVE ASYNC STATEMENT, THE PROGRAM WILL THROWS EXCEPTION
let getStudents = async () => {
    // simplify promise code use
    const ta = await getClassWithPromise('A') // await lock this code to wait result
    const tb = await getClassWithPromise('B')
    const tc = await getClassWithPromise('C')

    return [].concat(ta, tb, tc)
}

// getStudents // returns the AsyncFunction object


// getStudents()
//     .then(students => students.map(s => s.nome))


// PART 2

function waitFor(time = 2000) {
    return new Promise(
        function (resolve) {
            setTimeout(function () {
                console.log('Executing promise')
                resolve()
            })
        }
    )
}

// waitFor()
//     .then(_ => 'Esperar 1')
//     .then(console.log)
//     .then(waitFor)
//     .then(_ => 'Esperar 2')
//     .then(console.log)

//await cannot be stay on file
// deno can be

// OBS: the following code run before of waitFor

// function exec(){
//     console.log('execute before promise')
// }

// exec()


// async mark function to use wait and allow 
// that parts of code wait for others that isn't 
// sync
async function exec2() {
    await waitFor(1000)
    console.log('execute before promise') // this part of code wait for aboce part before run

    await waitFor(1000)
    console.log('execute before promise')

    await waitFor(1000)
    console.log('execute before promise')

    return 'value'
}

//await need be call on the function that returns promise object
exec2()



// when you define async function
// same that value will be return already
// result is wrapping on the promise[Async Function]
async function returnN() {
    return 10
}

// so you cannot get returnN return
// you need call then function on the object

returnN().then(console.log)

// you cannot get value with await on he global scope
// you need get inside of the function

async function getting() {

    // all async functions and async code(promises)
    // can be call and awaiting using await statement

    value = await returnN() // note sync structure [can be long process]
    console.log(value)


    // if  you don't put await statement 
    // the get value will be promise expeding
    value = returnN() 
    console.log(value) // Promise { 10 }
}

getting()