var inputEmail = document.getElementById('input-Email');
var inputPassword = document.getElementById('input-password');
var validation = document.getElementById('emailOK');
var login = document.getElementById('login');
var dataSend = document.getElementById('dataSend');

var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var passwordRegex = 12;

//EVENTS
inputEmail.addEventListener("focus", myFocusFunction,true);
inputEmail.addEventListener("blur", myBlurFunction,true);
inputPassword.addEventListener("focus", myFocusFunction,true);
inputPassword.addEventListener("blur", myBlurFunction,true);
login.addEventListener("click", send);


//FUNCTIONS
function send(){
    console.log("entre a send");
    var email = document.getElementById('input-Email').value;

    if(emailRegex.test(email)){
        dataSend.style.background = "#B1D1A4";
        dataSend.style.visibility= "visible";
        dataSend.innerText = "CORRECT DATA";
    } else {
        dataSend.style.background = "#B20600";
        dataSend.style.visibility= "visible";
        dataSend.innerText = "INCORRECT DATA";
    }
}

//FOCUS
function myFocusFunction() {
    var email = document.getElementById('input-Email').value;
    inputEmail.style.backgroundColor = "white";
    inputPassword.style.backgroundColor = "white";
    dataSend.style.visibility= "hidden";
}

//BLUR
function myBlurFunction() {
    
    var email = document.getElementById('input-Email').value;
    var password = document.getElementById('input-password').value;

    //Validation of email
    if(emailRegex.test(email)){
    inputEmail.style.border = "1px solid #4E944F";
    validation.style.color = "#4E944F";
    validation.innerText = "correct";
    } else {
        inputEmail.style.border = "solid 1px #B20600";
        validation.style.color = "#B20600";
        validation.innerText = "incorrect";
        //alert("complete the mail correctly"); 
    }

    /*Validation of password
    if(passwordRegex.test(password)){
        inputPassword.style.border = "1px solid #4E944F";
        validation.style.color = "#4E944F";
        validation.innerText = "correct";
        } else {
            inputPassword.style.border = "solid 1px #B20600";
            validation.style.color = "#B20600";
            validation.innerText = "incorrect";
            //alert("complete the mail correctly"); 
        }*/
}   