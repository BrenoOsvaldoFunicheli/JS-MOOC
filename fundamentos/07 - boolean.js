let isOn = false
console.log(isOn)

isOn = true
console.log(isOn)

// how to test boolean values
// force rapper
// all number are true except 0
console.log('Only true  ')
isOn = 1
console.log(!!isOn)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isOn=true)) // the return is value of attribute

console.log("Only False")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
// if you set any value and pull double exclamation the value will be false


