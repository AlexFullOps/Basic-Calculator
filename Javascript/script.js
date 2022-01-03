function calculator (){
    const operation = Number(prompt('Choose operation: \n 1 - Sum (+)\n 2 - Subtraction (-)\n 3 - Multiplication (*)\n 4 - Diviion (/)\n 5 - Entire division (%)\n 6 - Potentiation (**) '));
    if (!operation || operation >= 7){
        alert('Error')
        calculator();
    }else{
        let n1 = Number(prompt('Enter the first value:'));
    let n2 = Number(prompt('Enter the second value:'));
    let result;

    function sum(){
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
        newOperation()
     } 
    }
    function Subtraction(){
        result = n1 - n2;
        alert(`${n1} - ${n2} = ${result}`);
        newOperation()
    } 
   
    function Multiplication(){
        result = n1 * n2;
        alert(`${n1} * ${n2} = ${result}`);
        newOperation()
    } 
    
    function Division(){
        result = n1 / n2;
        alert(`${n1} / ${n2} = ${result}`);
        newOperation()
    } 
    
    function entireDivision(){
        result = n1 % n2;
        alert(`The rest of the division between ${n1} % ${n2} = ${result}`);
        newOperation()
    } 
    
    function potentiation(){
        result = n1 ** n2;
        alert(`${n1} ** ${n2} = ${result}`)
        newOperation()
    } 
    
    function newOperation(){
        let option = prompt('Do you want to do another operation?\n 1 - Yes\n 2 - No');
        if (option == 1){
            calculator();
        }else if (option == 2){
            alert('BYE!')
        }else{
            alert('Please enter a valid option.')
            newOperation()
        } 
    }
    if (operation == 1){
        sum();
    }else if (operation == 2){
        Subtraction();    
    }else if (operation == 3){
        Multiplication();
    }else if (operation == 4){
        Division();
    }else if (operation == 5){
        entireDivision();
    }else if (operation == 6){
        potentiation();
    }
}

calculator();