var inputName = document.getElementById('input-name');
var inputSurname = document.getElementById('input-surname');
var inputDni = document.getElementById('input-dni');
var inputDate = document.getElementById('input-date');
var inputPhone = document.getElementById('input-phone');
var inputDress = document.getElementById('input-dress');
var inputLocality = document.getElementById('input-locality');
var inputPostalCode = document.getElementById('input-postalCode');
var inputEmail = document.getElementById('input-email');

//EVENTS
inputName.addEventListener("focus", myFocusFunction,true);
inputSurname.addEventListener("blur", myBlurFunction,true);
inputDni.addEventListener("focus", myFocusFunction,true);
inputDate.addEventListener("blur", myBlurFunction,true);
inputPhone.addEventListener("blur", myBlurFunction,true);
inputDress.addEventListener("blur", myBlurFunction,true);
inputLocality.addEventListener("blur", myBlurFunction,true);
inputPostalCode.addEventListener("blur", myBlurFunction,true);
inputEmail.addEventListener("blur", myBlurFunction,true);


