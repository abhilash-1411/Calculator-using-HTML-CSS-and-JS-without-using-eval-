let displayValue='';
let result=null;
let operator=null;
let lastInputWasOperator=false;
function appendNumber(number){
    if(lastInputWasOperator){
        lastInputWasOperator=false;
    }
    displayValue+=number;
    console.log("INSIDE NUM",displayValue);
    updateDisplay();

    }
function appendOperator(clickedOperator) {
    if (lastInputWasOperator) {
        operator = clickedOperator;
        displayValue = displayValue.slice(0, -1) + clickedOperator; // Replace the last operator
        updateDisplay();
        return;
    }

    if (result === null) {
        result = parseFloat(displayValue);
    } else {
        result = evaluate();
    }

    displayValue += clickedOperator;
    updateDisplay();
    lastInputWasOperator = true;
    operator = clickedOperator;
}

function clearDisplay(){
    
    displayValue='';
    operator=null;
    result=null;
    lastInputWasOperator=false;
    updateDisplay();


}
function updateDisplay(){
    document.getElementById("show").value=displayValue || '0';  
    console.log("Inside display",displayValue)  
}
function evaluate(){
    console.log("inside evaluate",displayValue)
    const currentValue = parseFloat(displayValue.slice(displayValue.lastIndexOf(operator) + 1));
    console.log("currVal",currentValue)
    
    let tempResult=result;
    console.log("tempResult",tempResult)
   
    switch (operator){
        case'+':
        tempResult+=currentValue;
        break;
        case'-':
        tempResult-=currentValue;
        break;
        case'*':
        tempResult*=currentValue;
        break;
        case'/':
        if(currentValue!==0){
            tempResult/=currentValue;
          }
        else{
            return 'Error';
        }
        
       break;
       default:
        break;
    }
    
    return tempResult;
   
}
function calculate(){
   if((operator && displayValue) !==''){
    result=evaluate();
    displayValue=result.toString();
    operator=null;
    lastInputWasOperator=false;
    updateDisplay();
   }
   
}

