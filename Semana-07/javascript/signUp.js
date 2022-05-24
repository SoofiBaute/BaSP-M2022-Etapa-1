var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z',];
var signUp = document.getElementById('sign-up');
var error = document.getElementsByClassName('error');
var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';

var invalidChars = ['-', '+', 'e', '.']
function validateChars(e){
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
}

signUp.addEventListener("click", send);

function send(e){

    e.preventDefault();

    var same = samePassword(inputPassword.value,inputPassword2.value);
    var date = validationDate(inputDate);

    if(same === false){
        alert("INCORRECT PASSWORD");
        inputPassword.style.border = 'solid 1px red';
        inputPassword2.style.border = 'solid 1px red';
        inputPassword.value = "";
        inputPassword2.value = "";
    }

    if(date){
        var newDate = reverseDate(inputDate.value);
    }

    requestValue(inputName.value, inputSurname.value, inputDni.value, newDate,
    inputPhone.value, inputAddress.value, inputLocality.value,inputPostalCode.value, 
    inputEmail.value, inputPassword.value, url);
}

function requestValue(
    name,
    surname,
    dni,
    date,
    phone,
    address,
    locality,
    postalCode,
    email,
    pass,
    url
) {
    fetch(
        url +
            '?name=' +
            name +
            '&lastName=' +
            surname +
            '&dni=' +
            dni +
            '&dob=' +
            date +
            '&phone=' +
            phone +
            '&address=' +
            address +
            '&city=' +
            locality +
            '&zip=' +
            postalCode +
            '&email=' +
            email +
            '&password=' +
            pass,
    )
    .then(function (response) {
        return response.json();
      })
    .then(function (jsonResponse) {
        if (jsonResponse.success) {
          console.log("CORRECT", jsonResponse);
          myLocalStorage();
          alert(jsonResponse.msg);
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
          ADDRESS: ${inputAddress.value}
          PASSWORD: ${inputPassword.value}
          `;
        } else {
            alert("COMPLETE THE DATE CORRECTLY");
            var saveErrors = '';
            for (var i=0; i<jsonResponse.errors.length; i++){
                saveErrors+= jsonResponse.errors[i].msg + '\n';
            }
            alert(saveErrors);
            throw jsonResponse;
        }
      })
    .catch(function (error) {
        console.warn('Error', error);
    })
}

function myLocalStorage(){
    localStorage.setItem('name', inputName.value);
    localStorage.setItem('last-name', inputSurname.value);
    localStorage.setItem('dni', inputDni.value);
    localStorage.setItem('date', inputDate.value);
    localStorage.setItem('phone', inputPhone.value);
    localStorage.setItem('address', inputAddress.value);
    localStorage.setItem('locality', inputLocality.value);
    localStorage.setItem('postal-code', inputPostalCode.value);
    localStorage.setItem('email', inputEmail.value);
    localStorage.setItem('password', inputPassword.value);
    localStorage.setItem('password2', inputPassword2.value);
}

window.onload = function(){
    if( localStorage.getItem('name') != null &&
        localStorage.getItem('last-name') != null &&
        localStorage.getItem('dni') != null &&
        localStorage.getItem('date') != null &&
        localStorage.getItem('phone') != null &&
        localStorage.getItem('address') != null &&
        localStorage.getItem('locality') != null &&
        localStorage.getItem('postal-code') != null &&
        localStorage.getItem('email') != null &&
        localStorage.getItem('password') != null &&
        localStorage.getItem('password2') != null)
         {
            inputName.value = localStorage.getItem('name');
            inputSurname.value = localStorage.getItem('last-name');
            inputDni.value = localStorage.getItem('dni');
            inputDate.value = localStorage.getItem('date');
            inputPhone.value = localStorage.getItem('phone');
            inputAddress.value = localStorage.getItem('address');
            inputLocality.value = localStorage.getItem('locality');
            inputPostalCode.value = localStorage.getItem('postal-code');
            inputEmail.value = localStorage.getItem('email');
            inputPassword.value = localStorage.getItem('password');
            inputPassword2.value = localStorage.getItem('password2');
        }
}


//-------------NAME
var inputName = document.getElementById('input-name');
    function myFocusFunctionName() {
        dataSend.style.visibility= "hidden";
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
    function myBlurFunctionName() {

        var validation= validationName(inputName);

        if(validation){
            inputName.style.border =  "1px solid #373867";
            error[0].style.visibility= "hidden";
        }else{
            inputName.style.border = "solid 1px #B20600";
            error[0].style.visibility= "visible";
        }
    }
inputName.addEventListener("focus", myFocusFunctionName);
inputName.addEventListener("blur", myBlurFunctionName);


//-------------SURNAME
var inputSurname = document.getElementById('input-surname');
    function myFocusFunctionSurname() {
        dataSend.style.visibility= "hidden";
        var validation= validationName(inputSurname);

        if(validation){
            inputSurname.style.backgroundColor = "white";
            inputSurname.style.border =  "1px solid #373867";
        } else{
            inputSurname.style.backgroundColor = "white";
            inputSurname.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionSurname() {

        var validation= validationName(inputSurname);

        if(validation){
            inputSurname.style.border =  "1px solid #373867";
            error[1].style.visibility= "hidden";

        }else{
            inputSurname.style.border = "solid 1px #B20600";
            error[1].style.visibility= "visible";
        }
    }
inputSurname.addEventListener("focus", myFocusFunctionSurname);
inputSurname.addEventListener("blur", myBlurFunctionSurname);


//-------------DNI
var inputDni = document.getElementById('input-dni');
    function myFocusFunctionDni() {
        dataSend.style.visibility= "hidden";
        var validation= validationDni(inputSurname);

        if(validation){
            inputDni.style.backgroundColor = "white";
            inputDni.style.border =  "1px solid #373867";
        } else{
            inputDni.style.backgroundColor = "white";
            inputDni.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionDni() {

        var validation= validationDni(inputDni);

        if(validation){
            inputDni.style.border =  "1px solid #373867";
            error[2].style.visibility= "hidden";
        }else{
            inputDni.style.border = "solid 1px #B20600";
            error[2].style.visibility= "visible";
        }
    }
inputDni.addEventListener("focus", myFocusFunctionDni);
inputDni.addEventListener("blur", myBlurFunctionDni);
inputDni.addEventListener('keydown', validateChars);


//-------------DATE
var inputDate = document.getElementById('input-date');
    function myFocusFunctionDate() {
        dataSend.style.visibility= "hidden";
        var validation= validationDate(inputDate);

        if(validation){
            inputDate.style.backgroundColor = "white";
            inputDate.style.border =  "1px solid #373867";
        } else{
            inputDate.style.backgroundColor = "white";
            inputDate.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionDate() {

        var validation= validationDate(inputDate);

        if(validation){
            inputDate.style.border =  "1px solid #373867";
            error[3].style.visibility= "hidden";
        }else{
            inputDate.style.border = "solid 1px #B20600";
            error[3].style.visibility= "visible";
        }
    }
inputDate.addEventListener("focus", myFocusFunctionDate);
inputDate.addEventListener("blur", myBlurFunctionDate);


//-------------PHONE
var inputPhone = document.getElementById('input-phone');
    function myFocusFunctionPhone() {
        dataSend.style.visibility= "hidden";
        var validation= validationPhone(inputPhone);

        if(validation){
            inputPhone.style.backgroundColor = "white";
            inputPhone.style.border =  "1px solid #373867";
        } else{
            inputPhone.style.backgroundColor = "white";
            inputPhone.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionPhone() {

        var validation= validationPhone(inputPhone);

        if(validation){
            inputPhone.style.border =  "1px solid #373867";
            error[4].style.visibility= "hidden";
        }else{
            inputPhone.style.border = "solid 1px #B20600";
            error[4].style.visibility= "visible";
        }
    }
inputPhone.addEventListener("focus", myFocusFunctionPhone);
inputPhone.addEventListener("blur", myBlurFunctionPhone);
inputPhone.addEventListener('keydown', validateChars);


//-------------ADDRESS
var inputAddress = document.getElementById('input-address');
    function myFocusFunctionAddress() {
        dataSend.style.visibility= "hidden";
        var validation= validationAddress(inputAddress);

        if(validation){
            inputAddress.style.backgroundColor = "white";
            inputAddress.style.border =  "1px solid #373867";
        } else{
            inputAddress.style.backgroundColor = "white";
            inputAddress.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionAddress() {

        var validation= validationAddress(inputAddress);

        if(validation){
            inputAddress.style.border =  "1px solid #373867";
            error[5].style.visibility= "hidden";
        }else{
            inputAddress.style.border = "solid 1px #B20600";
            error[5].style.visibility= "visible";
        }
    }
inputAddress.addEventListener("focus", myFocusFunctionAddress);
inputAddress.addEventListener("blur", myBlurFunctionAddress);


//-------------LOCALITY
var inputLocality = document.getElementById('input-locality');
    function myFocusFunctionLocality() {
        dataSend.style.visibility= "hidden";
        var validation= validationLocality(inputLocality);

        if(validation){
            inputLocality.style.backgroundColor = "white";
            inputLocality.style.border =  "1px solid #373867";
        } else{
            inputLocality.style.backgroundColor = "white";
            inputLocality.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionLocality() {

        var validation= validationLocality(inputLocality);

        if(validation){
            inputLocality.style.border =  "1px solid #373867";
            error[6].style.visibility= "hidden";
        }else{
            inputLocality.style.border = "solid 1px #B20600";
            error[6].style.visibility= "visible";
        }
    }
inputLocality.addEventListener("focus", myFocusFunctionLocality);
inputLocality.addEventListener("blur", myBlurFunctionLocality);


//-------------POSTALCODE
var inputPostalCode = document.getElementById('input-postalCode');
    function myFocusFunctionPostalCode() {
        dataSend.style.visibility= "hidden";
        var validation= validationPostalCode(inputPostalCode);

        if(validation){
            inputPostalCode.style.backgroundColor = "white";
            inputPostalCode.style.border =  "1px solid #373867";
        } else{
            inputPostalCode.style.backgroundColor = "white";
            inputPostalCode.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionPostalCode() {

        var validation= validationPostalCode(inputPostalCode);

        if(validation){
            inputPostalCode.style.border =  "1px solid #373867";
            error[7].style.visibility= "hidden";
        }else{
            inputPostalCode.style.border = "solid 1px #B20600";
            error[7].style.visibility= "visible";
        }
    }
inputPostalCode.addEventListener("focus", myFocusFunctionPostalCode);
inputPostalCode.addEventListener("blur", myBlurFunctionPostalCode);
inputPostalCode.addEventListener('keydown', validateChars);


//-------------EMAIL
var inputEmail = document.getElementById('input-email');
    function myFocusFunctionEmail() {
        dataSend.style.visibility= "hidden";
        var validation= validationEmail(inputEmail);

        if(validation){
            inputEmail.style.backgroundColor = "white";
            inputEmail.style.border =  "1px solid #373867";
        } else{
            inputEmail.style.backgroundColor = "white";
            inputEmail.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionEmail() {

        var validation= validationEmail(inputEmail);

        if(validation){
            inputEmail.style.border =  "1px solid #373867";
            error[10].style.visibility= "hidden";
        }else{
            inputEmail.style.border = "solid 1px #B20600";
            error[10].style.visibility= "visible";
        }
    }
inputEmail.addEventListener("focus", myFocusFunctionEmail);
inputEmail.addEventListener("blur", myBlurFunctionEmail);


//-------------PASSWORD
var inputPassword = document.getElementById('input-password');
    function myFocusFunctionPassword() {
        dataSend.style.visibility= "hidden";
        var validation= validationPassword(inputPassword);

        if(validation){
            inputPassword.style.backgroundColor = "white";
            inputPassword.style.border =  "1px solid #373867";
        } else{
            inputPassword.style.backgroundColor = "white";
            inputPassword.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionPassword() {
        var validation= validationPassword(inputPassword);

        if(validation){
            inputPassword.style.border =  "1px solid #373867";
            error[8].style.visibility= "hidden";
        }else{
            inputPassword.style.border = "solid 1px #B20600";
            error[8].style.visibility= "visible";
        }
    }
inputPassword.addEventListener("focus", myFocusFunctionPassword);
inputPassword.addEventListener("blur", myBlurFunctionPassword);


//-------------PASSWORD2
var inputPassword2 = document.getElementById('input-password2');
    function myFocusFunctionPassword2() {
        dataSend.style.visibility= "hidden";
        var validation= validationPassword(inputPassword2);

        if(validation){
            inputPassword2.style.backgroundColor = "white";
            inputPassword2.style.border =  "1px solid #373867";
        } else{
            inputPassword2.style.backgroundColor = "white";
            inputPassword2.style.border =  "1px solid #373867";
        }
    }
    function myBlurFunctionPassword2() {

        var validation= validationPassword(inputPassword2);

        if(validation){
            inputPassword2.style.border =  "1px solid #373867";
            error[9].style.visibility= "hidden";
        }else{
            inputPassword2.style.border = "solid 1px #B20600";
            error[9].style.visibility= "visible";
        }
    }
inputPassword2.addEventListener("focus", myFocusFunctionPassword2);
inputPassword2.addEventListener("blur", myBlurFunctionPassword2);


//VALIDATIONS
//--------------NAME && SURNAME
function validationName (x){
    var cont=0;
    var letters=0;

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

//--------------DNI
function validationDni(x){
    var cont = 1;

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

//--------------DATE
function validationDate(x){

    dateVal= x.value;
    var cont = 0;
    var year = dateVal.substring(0,4);
    var month = dateVal.substring(5,7);
    var day = dateVal.substring(8,10);

    if(month==="02"){
        if((day.substring(0,1)==="0") && (day.substring(1,2)>0 && day.substring(1,2)<10)){
            cont++;
            cont++;
        } else if((day.substring(0,1)==="1" || day.substring(0,1)==="2") && (day.substring(1,2)>=0 && day.substring(1,2)<10)){
            cont++;
            cont++;
        }
    }else{
        if((month.substring(0,1)==="0") && (month.substring(1,2)>0 && month.substring(1,2)<10)){
            cont++;
        } else if((month.substring(0,1)==="1") && (month.substring(1,2)==="1" || month.substring(1,2)==="2")){
            cont++;
        }
        if((day.substring(0,1)==="0") && (day.substring(1,2)>0 && day.substring(1,2)<10)){
            cont++;
        } else if((day.substring(0,1)==="1" || day.substring(0,1)==="2") && (day.substring(1,2)>=0 && day.substring(1,2)<10)){
            cont++;
        } else if((day.substring(0,1)==="3") && (day.substring(1,2)==="0" || day.substring(1,2)==="1")){
            cont++;
        }
    }

       if((Number(year)<2005) && (cont===2)){
           return true;
       }else{
           return false;
       }

}

function reverseDate(x){
    dateValue= x.value;
    var year = dateVal.substring(0,4);
    var month = dateVal.substring(5,7);
    var day = dateVal.substring(8,10);
    var dateNew = month+"/"+day+"/"+year;
    return dateNew;
}

//--------------PHONE
function validationPhone(x){
    var cont = 1;

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

//--------------EMAIl
function validationEmail(x){

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(emailRegex.test(x.value)){
      return true;
    } else {
      return false;
    }
};

//--------------POSTAL CODE
function validationPostalCode(x){
    var cont = 1;

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

//--------------LOCALITY
function validationLocality(x){
    var cont=0;
    var letters=0;

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

//--------------ADDRESS
function validationAddress(x){
    var space = " ";
    var bolL= 0;
    var bolN = 0;
    var cont=0;
    var letters=0;

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

    if(letters>4 && bolN===0){
        return true;
    }else{
        return false;
    }

}

//--------------PASSWORD
function validationPassword(x){
    var cont=0;
    var letters=0;

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

function samePassword(x,y){
    if(x === y){
        return true;
    }else{
        return false;
    }
}

