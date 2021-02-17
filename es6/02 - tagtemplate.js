// tag template
function tag(parts, ...values) {
    console.log(parts)
    console.log(values)
    return 'Other string'

}

const student = 'Gui'
const status = 'Approved'


console.log(tag`${student} is ${status}`)

//

function real(parts, ...values) {
    const result = []
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `${value.toFixed(2)}`
        result.push(partes[index], value)
    })
}