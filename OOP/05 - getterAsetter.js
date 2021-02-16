const seq = {

    _value: 1, // convenction

    get value() {
        return this._value++
    },

    /**
     * @param {number} value
     */
    set value(value) {
        this._value = value
    }
}

// you can access the sequence attr value without call value as a method
// because get value is understanding as attr by js
console.log(seq.value)

seq.value = 10

// the same ideia is apply to receive on attr of object
console.log(seq.value)