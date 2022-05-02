var inputEmail = document.getElementById('input-Email');
var inputPassword = document.getElementById('input-password');
var validation = document.getElementById('emailOK');
var validationPass = document.getElementById('passwordOk');
var login = document.getElementById('login');
var dataSend = document.getElementById('dataSend');
var url ='https://basp-m2022-api-rest-server.herokuapp.com/login';

var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

//EVENTS
inputEmail.addEventListener("focus", myFocusFunction);
inputEmail.addEventListener("blur", myBlurFunctionEmail);
inputPassword.addEventListener("focus", myFocusFunction);
inputPassword.addEventListener("blur", myBlurFunctionPassword);
login.addEventListener("click", send);


//FUNCTIONS
function send(e){
    e.preventDefault();
    var email = document.getElementById('input-Email').value;
    var password = document.getElementById('input-password').value;
    requesValue(email, password, url);

}

//FOCUS
function myFocusFunction() {
    inputPassword.style.backgroundColor = "white";
    dataSend.style.visibility= "hidden";
}


//BLUR
function myBlurFunctionPassword() {
    var inputPassword = document.getElementById('input-password');
    var validation= validationPassword(inputPassword);

    if(validation){
        inputPassword.style.border = "1px solid #4E944F";
        validationPass.style.color = "#4E944F";
        validationPass.innerText = "correct";
        } else {
            inputPassword.style.border = "solid 1px #B20600";
            validationPass.style.color = "#B20600";
            validationPass.innerText = "Al menos 8 caracteres, formados por letras y números";
        }
}

function myBlurFunctionEmail() {
    var inputEmail = document.getElementById('input-Email');
    var email = document.getElementById('input-Email').value;

    if(emailRegex.test(email)){
    inputEmail.style.border = "1px solid #4E944F";
    validation.style.color = "#4E944F";
    validation.innerText = "correct";
    } else {
        inputEmail.style.border = "solid 1px #B20600";
        validation.style.color = "#B20600";
        validation.innerText = "invalid email";
    }
}


//VALIDATION
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

function requesValue(email, pass, url){

    fetch(url + "?email=" + email + "&password=" + pass)
    .then(function (response) {
        return response.json();
      })
    .then(function (jsonResponse) {
        if (jsonResponse.success) {
          console.log("CORRECT", jsonResponse);
          myBlurFunctionPassword();
          myBlurFunctionEmail();
          alert("CORREC DATA");
          dataSend.style.background = "#B1D1A4";
          dataSend.style.visibility= "visible";
          dataSend.innerText = `CORRECT DATA 
          EMAIL:   ${email}
          PASSWORD: ${pass}`;
        } else {
            console.log("ERROR");
            dataSend.style.background = "#B20600";
            dataSend.style.visibility= "visible";
            dataSend.innerText = "INCORRECT DATA";
            alert("WRONG EMAIL OR PASSWORD");
            throw jsonResponse;
        }
      })
    .catch(function (error) {
        console.warn('Error', error);
    })
    
}