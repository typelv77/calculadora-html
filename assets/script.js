const display = document.querySelector("input");
 
function digitar(valor){
    //display.value = display.value + valor
    display.value +=valor
}

function limpar(){
    display.value=""
}

function calcular (){
 //Eval() tranforma string em algaritimos em js
    display.value = eval(display.value)
}