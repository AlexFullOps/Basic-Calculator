function calculator (){
    const operation = prompt('Choose operation: \n 1 - Sum (+)\n 2 - Subtraction (-)\n 3 - Multiplication (*)\n 4 - Diviion (/)\n 5 - Entire division (%)\n 6 - Potentiation (**) ');
    let n1 = Number(prompt('Enter the first value:'));
    let n2 = Number(prompt('Enter the second value:'));
    let result;
    function sum(){
        result = n1 + n2;
        alert(`${n1} + ${n2} = ${result}`);
    }
    if (operation  == 1){
        sum();
    }else if (operation  == 2){
        Subtraction();    
    }else if (operation  == 3){
        Multiplication();
    }else if (operation  == 4){
        Division();
    }else if (operation  == 5){
        EntireDivision();
    }else if (operation  == 6){
        Pontentiation();
    }
}
calculator();