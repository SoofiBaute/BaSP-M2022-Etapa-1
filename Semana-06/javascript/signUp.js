var inputName = document.getElementById('input-name');
var inputSurname = document.getElementById('input-surname');
var inputDni = document.getElementById('input-dni');
var inputDate = document.getElementById('input-date');
var inputPhone = document.getElementById('input-phone');
var inputDress = document.getElementById('input-dress');
var inputLocality = document.getElementById('input-locality');
var inputPostalCode = document.getElementById('input-postalCode');
var inputEmail = document.getElementById('input-email');
var inputPassword = document.getElementById('input-password');
var inputPassword2 = document.getElementById('input-password2');


inputName.addEventListener("focus", myFocusFunctionName);
inputName.addEventListener("blur", myBlurFunctionName);

inputSurname.addEventListener("focus", myFocusFunctionSurname);
inputSurname.addEventListener("blur", myBlurFunctionSurname);

inputDni.addEventListener("focus", myFocusFunctionDni);
inputDni.addEventListener("blur", myBlurFunctionDni);

inputPhone.addEventListener("focus", myFocusFunctionPhone);
inputPhone.addEventListener("blur", myBlurFunctionPhone);

inputEmail.addEventListener("focus", myFocusFunctionEmail);
inputEmail.addEventListener("blur", myBlurFunctionEmail);

inputPostalCode.addEventListener("focus", myFocusFunctionPostalCode);
inputPostalCode.addEventListener("blur", myBlurFunctionPostalCode);

inputLocality.addEventListener("focus", myFocusFunctionLocality);
inputLocality.addEventListener("blur", myBlurFunctionLocality);

inputPassword.addEventListener("focus", myFocusFunctionPassword);
inputPassword.addEventListener("blur", myBlurFunctionPassword);

inputPassword2.addEventListener("focus", myFocusFunctionPassword2);
inputPassword2.addEventListener("blur", myBlurFunctionPassword2);


//FOCUS
//--------------NAME
function myFocusFunctionName() {
    var inputName = document.getElementById('input-name');
    var validation= validationName(inputName);

    if(validation){
        inputName.style.backgroundColor = "white";
        inputName.style.border =  "1px solid #373867";
    } else{
        inputName.style.backgroundColor = "white";
        inputName.style.border =  "1px solid #373867";
    }
}

//--------------SURNAME
function myFocusFunctionSurname() {
    var inputSurname = document.getElementById('input-surname');
    var validation= validationName(inputSurname);

    if(validation){
        inputSurname.style.backgroundColor = "white";
        inputSurname.style.border =  "1px solid #373867";
    } else{
        inputSurname.style.backgroundColor = "white";
        inputSurname.style.border =  "1px solid #373867";
    }
}

//--------------DNI
function myFocusFunctionDni() {
    var inputDni = document.getElementById('input-dni');
    var validation= validationDni(inputSurname);

    if(validation){
        inputDni.style.backgroundColor = "white";
        inputDni.style.border =  "1px solid #373867";
    } else{
        inputDni.style.backgroundColor = "white";
        inputDni.style.border =  "1px solid #373867";
    }
}

//--------------PHONE
function myFocusFunctionPhone() {
    var inputPhone = document.getElementById('input-phone');
    var validation= validationPhone(inputPhone);

    if(validation){
        inputPhone.style.backgroundColor = "white";
        inputPhone.style.border =  "1px solid #373867";
    } else{
        inputPhone.style.backgroundColor = "white";
        inputPhone.style.border =  "1px solid #373867";
    }
}

//--------------EMAIL
function myFocusFunctionEmail() {
    var inputEmail = document.getElementById('input-email');
    var validation= validationEmail(inputEmail);

    if(validation){
        inputEmail.style.backgroundColor = "white";
        inputEmail.style.border =  "1px solid #373867";
    } else{
        inputEmail.style.backgroundColor = "white";
        inputEmail.style.border =  "1px solid #373867";
    }
}

//--------------POSTAL-CODE
function myFocusFunctionPostalCode() {
    var inputPostalCode = document.getElementById('input-postalCode');
    var validation= validationPostalCode(inputPostalCode);

    if(validation){
        inputPostalCode.style.backgroundColor = "white";
        inputPostalCode.style.border =  "1px solid #373867";
    } else{
        inputPostalCode.style.backgroundColor = "white";
        inputPostalCode.style.border =  "1px solid #373867";
    }
}

//--------------LOCALITY
function myFocusFunctionLocality() {
    var inputLocality = document.getElementById('input-locality');
    var validation= validationLocality(inputLocality);

    if(validation){
        inputLocality.style.backgroundColor = "white";
        inputLocality.style.border =  "1px solid #373867";
    } else{
        inputLocality.style.backgroundColor = "white";
        inputLocality.style.border =  "1px solid #373867";
    }
}

//--------------PASSWORD 
function myFocusFunctionPassword() {
    var inputPassword = document.getElementById('input-password');
    var validation= validationPassword(inputPassword);

    if(validation){
        inputPassword.style.backgroundColor = "white";
        inputPassword.style.border =  "1px solid #373867";
    } else{
        inputPassword.style.backgroundColor = "white";
        inputPassword.style.border =  "1px solid #373867";
    }
}

//--------------PASSWORD 2
function myFocusFunctionPassword2() {
    var inputPassword2 = document.getElementById('input-password2');
    var validation= validationPassword(inputPassword2);

    if(validation){
        inputPassword2.style.backgroundColor = "white";
        inputPassword2.style.border =  "1px solid #373867";
    } else{
        inputPassword2.style.backgroundColor = "white";
        inputPassword2.style.border =  "1px solid #373867";
    }
}





//BLUR
//--------------NAME
function myBlurFunctionName() {
    var inputName = document.getElementById('input-name');
    var validation= validationName(inputName);

    if(validation){
        inputName.style.border =  "1px solid #373867";
    }else{
        inputName.style.border = "solid 1px #B20600";
    }
}

//--------------SURNAME
function myBlurFunctionSurname() {
    var inputSurname = document.getElementById('input-surname');
    var validation= validationName(inputSurname);

    if(validation){
        inputSurname.style.border =  "1px solid #373867";
    }else{
        inputSurname.style.border = "solid 1px #B20600";
    }
}

//--------------DNI
function myBlurFunctionDni() {
    var inputDni = document.getElementById('input-dni');
    var validation= validationDni(inputDni);

    if(validation){
        inputDni.style.border =  "1px solid #373867";
    }else{
        inputDni.style.border = "solid 1px #B20600";
    }
}

//--------------PHONE
function myBlurFunctionPhone() {
    var inputPhone = document.getElementById('input-phone');
    var validation= validationPhone(inputPhone);

    if(validation){
        inputPhone.style.border =  "1px solid #373867";
    }else{
        inputPhone.style.border = "solid 1px #B20600";
    }
}

//--------------EMAIL
function myBlurFunctionEmail() {
    var inputEmail = document.getElementById('input-email');
    var validation= validationEmail(inputEmail);

    if(validation){
        inputEmail.style.border =  "1px solid #373867";
    }else{
        inputEmail.style.border = "solid 1px #B20600";
    }
}

//--------------POSTALCODE
function myBlurFunctionPostalCode() {
    var inputPostalCode = document.getElementById('input-postalCode');
    var validation= validationPostalCode(inputPostalCode);

    if(validation){
        inputPostalCode.style.border =  "1px solid #373867";
    }else{
        inputPostalCode.style.border = "solid 1px #B20600";
    }
}

//--------------LOCALITY
function myBlurFunctionLocality() {
    var inputLocality = document.getElementById('input-locality');
    var validation= validationLocality(inputLocality);

    if(validation){
        inputLocality.style.border =  "1px solid #373867";
    }else{
        inputLocality.style.border = "solid 1px #B20600";
    }
}

//--------------PASSWORD
function myBlurFunctionPassword() {
    var inputPassword = document.getElementById('input-password');
    var validation= validationPassword(inputPassword);

    if(validation){
        inputPassword.style.border =  "1px solid #373867";
    }else{
        inputPassword.style.border = "solid 1px #B20600";
    }
}

//--------------PASSWORD
function myBlurFunctionPassword2() {
    var inputPassword2 = document.getElementById('input-password2');
    var validation= validationPassword(inputPassword2);

    if(validation){
        inputPassword2.style.border =  "1px solid #373867";
    }else{
        inputPassword2.style.border = "solid 1px #B20600";
    }
}





//VALIDATIONS
//--------------NAME && SURNAME (Solo letras y debe tener más de 3 letras)
function validationName (x){
    var cont=0;
    var letters=0;
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
        }else{
            if(alf.includes(inputMin[i])){
               letters++;
            }
         }
    }

    if(inputMin=== " "){
        return false;
    } else{
          if(cont>0){
            return false;
          }else if(letters<3){
              return false;
          }else {
              return true;
          } 
    }
}

//--------------DNI (Solo número y debe tener más de 7 números);
function validationDni(x){
    var cont = 1;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for(var i=0; i<x.value.length; i++){
        if(numbers.includes(x.value[i])){
            cont=0;
        }
    }
   
    if(cont === 0){
        if(x.value.length<7){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

//--------------PHONE (Solo número y debe tener 10 números);
function validationPhone(x){
    var cont = 1;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(var i=0; i<x.value.length; i++){
        if(numbers.includes(x.value[i])){
            cont=0;
        }
    }
    if(cont === 0){
        if(x.value.length===10){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

//--------------EMAIl (Debe tener un formato de email válido.)
function validationEmail(x){

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(emailRegex.test(x.value)){
      return true;
    } else {
      return false;
    }
};

//--------------POSTAL CODE (Solo número y debe tener entre 4 y 5 números.)
function validationPostalCode(x){
    var cont = 1;
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(var i=0; i<x.value.length; i++){
        if(numbers.includes(x.value[i])){
            cont=0;
        }
    }
    if(cont === 0){
        if((x.value.length>3) && (x.value.length<6) ){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};

//--------------LOCALITY (Texto alfanumérico y debe tener más de 3 letras.)
function validationLocality(x){
    var cont=0;
    var letters=0;
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
        }else{
            if(alf.includes(inputMin[i])){
               letters++;
            }
         }
    }
    console.log("LETTERS: ", letters);
    console.log("NUMEROS: ", cont);

    if((letters!=0) && (cont!=0)){

        if(letters<4){
            console.log("MENOS DE TRES LETRAS");
            return false;
        }else{
            console.log("CORRECTO");
            return true;
        }    

    } else {
        console.log("FASLE NO TIENE AMBAS COSAS");
        return false;
    }
};




//--------------PASSWORD (Al menos 8 caracteres, formados por letras y números.)
function validationPassword(x){
    var cont=0;
    var letters=0;
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
        }else{
            if(alf.includes(inputMin[i])){
               letters++;
            }
         }
    }

    if(inputMin.length>=8){
        if(letters>0 && cont>0){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
};

