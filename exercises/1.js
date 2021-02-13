function operation(values, op){

    let operation_instance =  null

    switch (op){
        case "+":
            operation_instance = function(previous, current){
                return previous + current
            }
        break;
        case "-":
            operation_instance = function(previous, current){
                return previous - current
            }
        break;
        case "*":
            operation_instance = function(previous, current){
                return previous * current
            }
        break;
        case "/":
            operation_instance = function(previous, current){
                if (current !== 0){
                    return previous / current
                }
                
                return 0
                
            }
        break;

    }

    return values.reduce(operation_instance)
}



console.log(operation([100,2,5,5,69,4], '-'))
