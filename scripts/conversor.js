//Variables para hexadecimal
const hexDigitos = '0123456789ABCDEF';
//Variables para octales
const octalDigits = ['000', '001', '010', '011', '100', '101', '110', '111'];


//Funcion para realizar las conversiones de a los demas sistemas numericos
function convertir(){
    //Variables para mostrar los resultados en la interfaz
    let decimal = '';
    let binario ='';
    let octal = '';
    let hexadecimal = '';

    //Variables para recuperar los valores de entrada 
    let sistemaNumerico = document.getElementById("sistemaNum").value;
    let numeroAConvertir = document.getElementById("number-input").value;

    //Variables de los inputs
    let inputDecimal = document.getElementById("inputDecimal");
    let inputBinario = document.getElementById("inputBinario");
    let inputOctal = document.getElementById("inputOctal");
    let inputHexadecimal = document.getElementById("inputHexadecimal");

    switch(sistemaNumerico){
        //Conversiones de decimal a otros sistemas numericos
        case "DL":
            //Validamos que la entrada sea mayor a cero
            if(numeroAConvertir == 0){
                binario = 0;
                octal = 0;
                decimal = 0;
                hexadecimal = 0;
                //Ingresando los resultados a la tabla
                inputBinario.innerText = binario;
                inputOctal.innerText = octal;
                inputDecimal.innerText = decimal;
                inputHexadecimal.innerText = hexadecimal;
            }else{
                inputDecimal.innerText = numeroAConvertir;
                //Decimal a binario
                let numABinario = numeroAConvertir;
                while (numABinario > 0) {
                    let residuo = numABinario % 2;// Obtener el residuo de la división entre 2
                    binario = residuo.toString() + binario; // Convertir el residuo a cadena y agregarlo al inicio del número binario
                    numABinario = Math.floor(numABinario / 2);// Dividir el número decimal por 2
                }
                inputBinario.innerText = binario;
                

                //Decimal a octal
                let numAOctal = numeroAConvertir;
                while (numAOctal > 0 ){
                    let residuo = numAOctal % 8;
                    octal = residuo.toString() + octal;
                    numAOctal = Math.floor(numAOctal / 8);
                }
                inputOctal.innerText = octal;
                
                //Decimal a hexadecimal
                let numAHexa = numeroAConvertir;
                while (numAHexa > 0) {
                    let residuo = numAHexa % 16;
                    let hexDigito = hexDigitos.charAt(residuo);
                    hexadecimal = hexDigito + hexadecimal;
                    numAHexa = Math.floor(numAHexa / 16);
                }
                inputHexadecimal.innerText = hexadecimal;
            }
        break;
        //Conversiones de binario a otros sistemas numericos
        case "BO":
            if(numeroAConvertir == 0){
                binario = 0;
                octal = 0;
                decimal = 0;
                hexadecimal = 0;
                //Ingresando los resultados a la tabla
                inputBinario.innerText = binario;
                inputOctal.innerText = octal;
                inputDecimal.innerText = decimal;
                inputHexadecimal.innerText = hexadecimal;
            }else{
                inputBinario.innerText = numeroAConvertir;
                
                //Binario a decimal
                let numADecimal = numeroAConvertir;
                decimal = parseInt(numADecimal, 2);
                inputDecimal.innerText = decimal;

                //Binario a octal
                octal = decimal.toString(8);
                inputOctal.innerText = octal;

                //Binario a hexadecimal 
                hexadecimal = decimal.toString(16).toUpperCase();
                inputHexadecimal.innerText = hexadecimal;
            }
        break;
        //Conversiones de octal a otros sistemaas numericos
        case "OL":
            if(numeroAConvertir == 0){
                binario = 0;
                octal = 0;
                decimal = 0;
                hexadecimal = 0;
                //Ingresando los resultados a la tabla
                inputBinario.innerText = binario;
                inputOctal.innerText = octal;
                inputDecimal.innerText = decimal;
                inputHexadecimal.innerText = hexadecimal;
            }else{
                inputOctal.innerText = numeroAConvertir;
                
                //Octal a binario
                let numABinario = numeroAConvertir;
                // Convertir cada dígito octal a binario
                for (let i = 0; i < numABinario.length; i++) {
                    let octalDigito = parseInt(numABinario[i], 8); // Convertir el dígito octal a decimal
                    let binarioDigito = octalDigits[octalDigito]; // Obtener el equivalente binario del dígito octal
                    binario += binarioDigito;
                }

                // Eliminar ceros no significativos al principio
                binario = binario.replace(/^0+/, '');
                inputBinario.innerText = binario;

                //Octal a decimal
                let numADecimal = numeroAConvertir;
                decimal = parseInt(numADecimal, 8);
                inputDecimal.innerText = decimal;

                //Octal a hexadecimal 
                let numAHexa = numeroAConvertir;
                let hexa = parseInt(numAHexa,8);
                hexadecimal = hexa.toString(16).toUpperCase();
                inputHexadecimal.innerText = hexadecimal;
            }
        break;
        //Conversiones de hexadecimal a otros sistemas numericos
        case "HL":
            if(numeroAConvertir == 0){
                binario = 0;
                octal = 0;
                decimal = 0;
                hexadecimal = 0;
                //Ingresando los resultados a la tabla
                inputBinario.innerText = binario;
                inputOctal.innerText = octal;
                inputDecimal.innerText = decimal;
                inputHexadecimal.innerText = hexadecimal;
            }else{
                inputHexadecimal.innerText = numeroAConvertir;
                
                //Hexadecimal a binario
                let numABinario = numeroAConvertir;
                let bin = parseInt(numABinario,16);
                binario = bin.toString(2);
                inputBinario.innerText = binario;

                //Hexadecimal a octal
                let numAOctal = numeroAConvertir;
                let oct = parseInt(numAOctal,16);
                octal = oct.toString(8);
                inputOctal.innerText = octal;

                //Hexadecimal a decimal 
                let numADecimal = numeroAConvertir;
                decimal = parseInt(numADecimal,16);
                inputDecimal.innerText = decimal;
            }
        break;
    
    
    } 



}

