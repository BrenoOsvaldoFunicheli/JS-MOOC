// without promise

const http = require('http')

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`

    http.get(url, res => {
        let result = ''

        // consuming piece of the data
        // here you need get part by part of the data
        res.on('data', data => {
            result += data
        })

        // when finished consuming
        res.on('end', () => {
            callback(JSON.parse(result))
        })

    })
}

let names = []

getClass('A', students => {
    // console.log(students)
    names = names.concat(students.map(a => `A: ${a.nome}`))
    getClass('B', students => {
        // console.log(students)
        names = names.concat(students.map(a => `B: ${a.nome}`))

        getClass('C', students => {
            // console.log(students)
            names = names.concat(students.map(a => `C: ${a.nome}`))

            console.log('Callback solution ' + names)

        })
    })

})


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


Promise.all([getClassWithPromise('A'), getClassWithPromise('B'), getClassWithPromise('C'),getClassWithPromise('D')])
    .then(class_ => [].concat(...class_))
    .then(students => students.map(student => student.nome))
    .then(names => console.log('Promise solution: ' + names))
    .catch(e => console.log(e))
