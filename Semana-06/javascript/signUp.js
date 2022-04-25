var inputName = document.getElementById('input-name');
var inputSurname = document.getElementById('input-surname');
var inputDni = document.getElementById('input-dni');
var inputDate = document.getElementById('input-date');
var inputPhone = document.getElementById('input-phone');
var inputDress = document.getElementById('input-dress');
var inputLocality = document.getElementById('input-locality');
var inputPostalCode = document.getElementById('input-postalCode');
var inputEmail = document.getElementById('input-email');

//EXPRESIONES
var emailVal = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // email



inputName.addEventListener("focus", myFocusFunctionName);
inputName.addEventListener("blur", myBlurFunctionName);

//FOCUS
//--------------NAME
function myFocusFunctionName() {
    var inputName = document.getElementById('input-name');
    var validacion= validationName(inputName);

    if(validacion){
        inputName.style.backgroundColor = "white";
        inputName.style.border =  "1px solid #373867";
    } else{
        inputName.style.backgroundColor = "white";
        inputName.style.border =  "1px solid #373867";
    }

}


//BLUR
//--------------NAME
function myBlurFunctionName() {
    var inputName = document.getElementById('input-name');
    var validacion= validationName(inputName);

    if(validacion){
        inputName.style.border =  "1px solid #373867";
    }else{
        inputName.style.border = "solid 1px #B20600";
    }
   
}

//VALIDACIONES
//--------------NAME
function validationName (x){
    var cont=0;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var alf = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    
    inputMin = x.value.toLowerCase();
    for(var i=0; i<x.value.length; i++){
        if(numbers.includes(inputMin[i])){
            cont++;
        }
    }
    
    if(inputMin!= " " && cont>0){
        console.log("false");
        return false;
    } else{
        if(inputMin === " "){
            console.log("FALSE ESPACIO EN BLANCO");
        return false;
        }else{
            console.log("true");
        return true;
        }
        
    }
}


