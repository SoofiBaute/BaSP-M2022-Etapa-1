/*If Else*/



// a) Create a random number between 0 and 1 using the Math.random() function, if the value is greater than or equal to 0.5, display an alert with the message “Greater than 0.5” and if not, an alert with the message “Lower than 0.5”.
console.log('IF ELSE a)');

var num = Math.random();

console.log(num);

if(num>= 0.5){
    alert("Greater than 0,5")
} else {
    alert("Lower than 0,5");
}



/* b) Create a variable “Age” that contains an integer between 0 and 100 and displays the following alert messages:
“Baby” if the age is less than 2 years;
“Child” if the age is between 2 and 12 years;
“Adolescent” between 13 and 19 years old;
“Young” between 20 and 30 years old;
“Adult” between 31 and 60 years old;
“Senior Adult” between 61 and 75 years old;
“Elderly” if he is older than 75 years.*/
console.log('IF ELSE b)');

var age = prompt("Ingrese su edad");

if(age<2){
    alert("Bebe");
} else if(age>=2 && age<12){
    alert("Niño");
} else if (age>=13 && age<=19){
    alert("Adolescente");
} else if (age>=20 && age<=30){
    alert("Joven");
} else if (age>=31 && age<=60){
    alert("Adulto");
} else if (age>=61 && age<=75){
    alert("Adulto");
} else if (age>75){
    alert("Anciano");
}
