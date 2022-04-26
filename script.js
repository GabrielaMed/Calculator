var currentOperator = document.getElementById("operator");
var historyValue = document.getElementById("history-value");
var outputValue = document.getElementById("output-value")

function number(value){
    outputValue.value = 
    outputValue.value + value; 
}

function operator(value){
    currentOperator.innerHTML = value;
    if(!historyValue.value){
        historyValue.value = outputValue.value;
        outputValue.value="";
    }
    else{
        result();
    }
}

function result(){
    let valueOne = parseFloat(historyValue.value);
    let valueTwo = parseFloat(outputValue.value);

    switch(currentOperator.innerHTML){
        case "+":
            result = valueOne + valueTwo
        break;
        case "-":
            result = valueOne - valueTwo
        break;
        case "/":
            result = valueOne / valueTwo
        break;
        case "x":
            result = valueOne * valueTwo
        break;
        case "%":
            result = (valueOne * valueTwo)/100 
        break;
        default:
            result = "errado! =("
        break;
    }
    alert(`Resultado dessa operação deu ${result}`);
    outputValue.value="";
    historyValue.value="";
    currentOperator.innerHTML="";
}
