// async turn code more sync
// await only work inside of async function


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

getStudents()
    .then(students => students.map(s => s.nome))


