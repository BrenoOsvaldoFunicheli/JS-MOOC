// monads is a container that abstract ther ideia and allow generic programing

// demiter law -> don't talk with stranger.

// EXAMPLE 

//WRONG
// person.home.address.zip_code 

// CORRECT 
// only the unique level
// person.zip_code // invoke method


class Address {
    constructor(zip_code) {
        this.zip_code = zip_code
    }
    zip_code(){
        return this.zip_code()
    }
}

class Home {
    constructor(address) {
        this.address = address
    }

    zip_code() {
        return this.address.zip_code() // property
    }

}

class Person {

    constructor(home) {
        this.home = home
    }


    zip_code() {
        return this.home.zip_code()
    }
}

// In the above code you can see that object only access the knowed object

//practical knowlegde

// person ask to home about zip_code (person know about home and implementation)
// home ask to address about zip_code (home know about address and implementation)
// address return its own attribute address return attribute