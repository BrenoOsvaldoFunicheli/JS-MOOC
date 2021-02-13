function Car(max_velocity = 200, delta =5){

    // private property
    let current_vel = 0

    // public method
    this.speed_up = function (){
        if (current_vel + delta <= max_velocity ){
            current_vel += delta
        }else{
            current_vel = max_velocity
        }
    }

    // public method
    this.get_velocity = function(){
        return current_vel
    }

}

const uno = new Car

// optional call
// const uno = new Car()

uno.speed_up()
uno.speed_up()
console.log(uno.get_velocity())


const ferrari = new Car(350,20)
ferrari.speed_up()
ferrari.speed_up()