function obtenerOpcion(){
     // Obtén una referencia al elemento select
    let obtenerSelect = document.getElementById("sistemaNum").value;
    //let numberInputOnInput = document.getElementById("number-input").oninput;
    let numberInput = document.getElementById("number-input");
    //Reiniciar los valores de los resultados
    //Variables de los inputs
    let inputDecimal = document.getElementById("inputDecimal");
    let inputBinario = document.getElementById("inputBinario");
    let inputOctal = document.getElementById("inputOctal");
    let inputHexadecimal = document.getElementById("inputHexadecimal");

    //Cambiar los valores dependiendo de la entrada
    switch(obtenerSelect){
        case "DL":
            numberInputOnInput = "this.value = this.value.replace(/[^0-9]/g, '');";
        break;
        case "BO":
            numberInputOnInput = "this.value = this.value.replace(/[^01]/g, '');";
        break;
        case "OL":
            numberInputOnInput = "this.value = this.value.replace(/[^0-7]/g, '');";
        break;
        case "HL":
            numberInputOnInput = "this.value = this.value.replace(/[^0-9A-F]/g, '').toUpperCase();";
        break;
    } 
    numberInput.value = " ";
    inputDecimal.innerText = 0;
    inputBinario.innerText = 0;
    inputOctal.innerText = 0;
    inputHexadecimal.innerText = 0;
    numberInput.setAttribute("oninput",numberInputOnInput);
}