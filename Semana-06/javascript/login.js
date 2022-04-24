var inputEmail = document.getElementById('input-Email');
var inputPassword = document.getElementById('input-password');
var validation = document.getElementById('emailOK');
var login = document.getElementById('login');
var dataSendEmail = document.getElementById('dataSend-email');
var dataSendPassword = document.getElementById('dataSend-password');
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
    console.log("entre a send")
    dataSendEmail.style.visibility= "visible"
    dataSendEmail.innerText = `
        DATOS CORRECTAMENTE INGRESADOS`;
        /*email:  + email + `
        Password
        `+ password*/
}

function myFocusFunction() {
    inputEmail.style.backgroundColor = "white";
    inputPassword.style.backgroundColor = "white";
}

function myBlurFunction() {
    
    email = document.getElementById('input-Email').value;
    password = document.getElementById('input-password').value;

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