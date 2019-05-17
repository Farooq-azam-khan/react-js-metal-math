function getActualAnswer(op, num1, num2) {
    return operationApplication[op](num1, num2); 
    }
    
    
    // Pick a random number and map it to the operation chosses
    function getRandomOp() {
    const op_number = Math.floor(Math.random() * 4);
    return operationsMap[op_number]; 
    }