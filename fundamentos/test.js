function Do_Something({ max=1, min=1}){
    console.log(min)
    console.log(max)
}

// Do_Something(1,3)

Do_Something(1,2)

function rand({ min = 0, max = 1000 }) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}


console.log('Order is important')
console.log(rand(1,5))