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
var signUp = document.getElementById('sign-up');
var valName = document.getElementById('name-error');
var error = document.getElementsByClassName('error');


inputName.addEventListener("focus", myFocusFunctionName);
inputName.addEventListener("blur", myBlurFunctionName);

inputSurname.addEventListener("focus", myFocusFunctionSurname);
inputSurname.addEventListener("blur", myBlurFunctionSurname);

inputDni.addEventListener("focus", myFocusFunctionDni);
inputDni.addEventListener("blur", myBlurFunctionDni);

inputDate.addEventListener("focus", myFocusFunctionDate);
inputDate.addEventListener("blur", myBlurFunctionDate);

inputPhone.addEventListener("focus", myFocusFunctionPhone);
inputPhone.addEventListener("blur", myBlurFunctionPhone);

inputEmail.addEventListener("focus", myFocusFunctionEmail);
inputEmail.addEventListener("blur", myBlurFunctionEmail);

inputPostalCode.addEventListener("focus", myFocusFunctionPostalCode);
inputPostalCode.addEventListener("blur", myBlurFunctionPostalCode);

inputLocality.addEventListener("focus", myFocusFunctionLocality);
inputLocality.addEventListener("blur", myBlurFunctionLocality);

inputDress.addEventListener("focus", myFocusFunctionDress);
inputDress.addEventListener("blur", myBlurFunctionDress);


inputPassword.addEventListener("focus", myFocusFunctionPassword);
inputPassword.addEventListener("blur", myBlurFunctionPassword);

inputPassword2.addEventListener("focus", myFocusFunctionPassword2);
inputPassword2.addEventListener("blur", myBlurFunctionPassword2);

signUp.addEventListener("click", send);

function send(e){
    e.preventDefault();
    var name = validationName(inputName);
    var surname = validationName(inputSurname);
    var dni = validationDni(inputDni);
    var date = validationDate(inputDate);
    var phone =  validationDni(inputPhone);
    var email = validationEmail(inputEmail);
    var postalCode = validationPostalCode(inputPostalCode);
    var locality = validationLocality(inputLocality);
    var dress = validationDress(inputDress);
    var passw = validationPassword(inputPassword);
    var passw2 = validationPassword(inputPassword2);
    var same = false;

    if((passw===true) && (passw2===true)){
        if(inputPassword.value === inputPassword2.value){
            same= true;
        }
    }else{
        same=false;
    }

    if(name && surname && dni && date && phone && email && postalCode && locality && dress && same){
        console.log("TODO CORRECTO");
        dataSend.style.background = "#B1D1A4";
        dataSend.style.visibility= "visible";
        dataSend.innerText = `CORRECT DATA 
        NAME: ${inputName.value}
        SURNAME: ${inputSurname.value}
        DNI: ${inputDni.value}
        DATE: ${inputDate.value}
        PHONE: ${inputPhone.value}
        EMAIL: ${inputEmail.value}
        POSTAL CODE: ${inputPostalCode.value}
        LOCALITY: ${inputLocality.value}
        DRESS: ${inputDress.value}
        PASSWORD: ${inputPassword.value}
        `;
    }else{
        alert("COMPLETE LOS DATOS CORRECTAMENTE");
        console.log("PASW1: ", inputPassword.value);
        console.log("PASW2:", inputPassword2.value);
        if (same===false){
            inputPassword.style.border = "solid 1px #B20600";
            inputPassword2.style.border = "solid 1px #B20600";
        }
}
}


//FOCUS
//--------------NAME
function myFocusFunctionName() {
    dataSend.style.visibility= "hidden";
    var inputName = document.getElementById('input-name');
    var validation= validationName(inputName);

    if(validation){
        inputName.style.backgroundColor = "white";
        inputName.style.border =  "1px solid #373867";
        error[1].style.visibility= "hidden";
    } else{
        inputName.style.backgroundColor = "white";
        inputName.style.border =  "1px solid #373867";
    }
}

//--------------SURNAME
function myFocusFunctionSurname() {
    dataSend.style.visibility= "hidden";
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
    dataSend.style.visibility= "hidden";
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

//--------------DATE
function myFocusFunctionDate() {
    dataSend.style.visibility= "hidden";
    var inputDni = document.getElementById('input-date');
    var validation= validationDate(inputDate);

    if(validation){
        inputDate.style.backgroundColor = "white";
        inputDate.style.border =  "1px solid #373867";
    } else{
        inputDate.style.backgroundColor = "white";
        inputDate.style.border =  "1px solid #373867";
    }
}

//--------------PHONE
function myFocusFunctionPhone() {
    dataSend.style.visibility= "hidden";
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
    dataSend.style.visibility= "hidden";
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
    dataSend.style.visibility= "hidden";
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
    dataSend.style.visibility= "hidden";
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

//--------------DRESS
function myFocusFunctionDress() {
    dataSend.style.visibility= "hidden";
    var inputDress = document.getElementById('input-dress');
    var validation= validationDress(inputDress);

    if(validation){
        inputDress.style.backgroundColor = "white";
        inputDress.style.border =  "1px solid #373867";
    } else{
        inputDress.style.backgroundColor = "white";
        inputDress.style.border =  "1px solid #373867";
    }
}

//--------------PASSWORD 
function myFocusFunctionPassword() {
    dataSend.style.visibility= "hidden";
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
    dataSend.style.visibility= "hidden";
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
        error[0].style.visibility= "hidden";
    }else{
        inputName.style.border = "solid 1px #B20600";
        error[0].style.visibility= "visible";
    }
}

//--------------SURNAME
function myBlurFunctionSurname() {
    var inputSurname = document.getElementById('input-surname');
    var validation= validationName(inputSurname);

    if(validation){
        inputSurname.style.border =  "1px solid #373867";
        error[1].style.visibility= "hidden";

    }else{
        inputSurname.style.border = "solid 1px #B20600";
        error[1].style.visibility= "visible";
    }
}

//--------------DNI
function myBlurFunctionDni() {
    var inputDni = document.getElementById('input-dni');
    var validation= validationDni(inputDni);

    if(validation){
        inputDni.style.border =  "1px solid #373867";
        error[2].style.visibility= "hidden";
    }else{
        inputDni.style.border = "solid 1px #B20600";
        error[2].style.visibility= "visible";
    }
}

//--------------DATE
function myBlurFunctionDate() {
    var inputDate = document.getElementById('input-date');
    var validation= validationDate(inputDate);

    if(validation){
        inputDate.style.border =  "1px solid #373867";
        error[3].style.visibility= "hidden";
    }else{
        inputDate.style.border = "solid 1px #B20600";
        error[3].style.visibility= "visible";
    }
}

//--------------PHONE
function myBlurFunctionPhone() {
    var inputPhone = document.getElementById('input-phone');
    var validation= validationPhone(inputPhone);

    if(validation){
        inputPhone.style.border =  "1px solid #373867";
        error[4].style.visibility= "hidden";
    }else{
        inputPhone.style.border = "solid 1px #B20600";
        error[4].style.visibility= "visible";
    }
}

//--------------EMAIL
function myBlurFunctionEmail() {
    var inputEmail = document.getElementById('input-email');
    var validation= validationEmail(inputEmail);

    if(validation){
        inputEmail.style.border =  "1px solid #373867";
        error[10].style.visibility= "hidden";
    }else{
        inputEmail.style.border = "solid 1px #B20600";
        error[10].style.visibility= "visible";
    }
}

//--------------POSTALCODE
function myBlurFunctionPostalCode() {
    var inputPostalCode = document.getElementById('input-postalCode');
    var validation= validationPostalCode(inputPostalCode);

    if(validation){
        inputPostalCode.style.border =  "1px solid #373867";
        error[7].style.visibility= "hidden";
    }else{
        inputPostalCode.style.border = "solid 1px #B20600";
        error[7].style.visibility= "visible";
    }
}

//--------------LOCALITY
function myBlurFunctionLocality() {
    var inputLocality = document.getElementById('input-locality');
    var validation= validationLocality(inputLocality);

    if(validation){
        inputLocality.style.border =  "1px solid #373867";
        error[6].style.visibility= "hidden";
    }else{
        inputLocality.style.border = "solid 1px #B20600";
        error[6].style.visibility= "visible";
    }
}

//--------------DRESS
function myBlurFunctionDress() {
    var inputDress = document.getElementById('input-dress');
    var validation= validationDress(inputDress);

    if(validation){
        inputDress.style.border =  "1px solid #373867";
        error[5].style.visibility= "hidden";
    }else{
        inputDress.style.border = "solid 1px #B20600";
        error[5].style.visibility= "visible";
    }
}

//--------------PASSWORD
function myBlurFunctionPassword() {
    var inputPassword = document.getElementById('input-password');
    var validation= validationPassword(inputPassword);

    if(validation){
        inputPassword.style.border =  "1px solid #373867";
        error[8].style.visibility= "hidden";
    }else{
        inputPassword.style.border = "solid 1px #B20600";
        error[8].style.visibility= "visible";
    }
}

//--------------PASSWORD 2
function myBlurFunctionPassword2() {
    var inputPassword2 = document.getElementById('input-password2');
    var validation= validationPassword(inputPassword2);

    if(validation){
        inputPassword2.style.border =  "1px solid #373867";
        error[9].style.visibility= "hidden";
    }else{
        inputPassword2.style.border = "solid 1px #B20600";
        error[9].style.visibility= "visible";
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

//--------------DATE (Debe tener 10 numeros);
function validationDate(x){
    dateVal= x.value;
    var year = dateVal.substring(0,4);

   for(var i=0; i<year.length; i++){
       if(Number(year)<2005){
           return true;
       }else{
           return false;
       }
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


    if((letters!=0) && (cont!=0)){

        if(letters<4){
            return false;
        }else{
            return true;
        }    

    } else {
        return false;
    }
};

//--------------DRESS (Al menos 5 caracteres con letras, números y un espacio en el medio.)
function validationDress(x){
    var space = " ";
    var bolL= 0;
    var bolN = 0;
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

    space = inputMin.indexOf(space);
  

    for(var j=0; j<space; j++){
        if(alf.includes(inputMin[j])){
            letters++;
         }else{
            bolN = 1;    
         }
    }

    for(var k=space+1; k<inputMin.length; k++){
        if(numbers.includes(inputMin[k])){
            cont++;
         }else{
            bolL = 1;    
         }
    }

    if(letters>=5 && bolN===0){
        return true;
    }else{
        return false;
    }

}


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

