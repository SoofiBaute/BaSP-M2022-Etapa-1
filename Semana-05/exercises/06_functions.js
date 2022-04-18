/*Functions*/

// a) Create a sum function that receives two numeric values and returns the result. Execute the function and save the result in a variable, displaying the value of said variable in the browser console.

console.log('FUNCIONES a)');
function suma (num1, num2){
    return (num1+num2);
}
var resultado = suma(5,10);


// b) To the previous sum function, add a validation to check if any of the parameters is not a number, display an alert clarifying that one of the parameters has an error, and return the NaN value as the result.

console.log('FUNCIONES b)');
function suma (num1, num2){
    if((isNaN(num1) || isNaN(num2))){
    return alert(NaN);
   } else {
       console.log('Resultado de la suma: '+ (num1 + num2));
   }
}
suma('d',5);


// c) Create a validate integer function that takes a number as a parameter and returns true if it's an integer.

console.log('FUNCIONES c)');

function validateInteger (num){
    if (Number.isInteger(num)){
        return console.log(num ,'Es un numero entero');
    }else {
        return console.log(num, 'No es un numero entero');
    }
}
validateInteger(5.2);
validateInteger(5);


// d) To the sum function of exercise 6b) add a call that validates that the numbers are integers. If there are decimals, display an alert with the error and return the number converted to an integer (rounded).

console.log('FUNCIONES d)');
function suma (num1, num2){
      
    if((isNaN(num1) || isNaN(num2))){
        return alert(NaN);
    } else {
        if (Number.isInteger(num1) && Number.isInteger(num2)){
            return console.log('Resultado de la suma: '+ (num1 + num2));
        } else {
            console.log(Math.round(num1+num2));
            return alert('No es un numero entero')
        }
    }
}
suma(10.3,5);


// e) Convert the validation from exercise 6d) into a separate function and call it inside the sum function testing that everything still works the same.

console.log('FUNCIONES e)');
function suma (num1, num2){
    if((isNaN(num1) || isNaN(num2))){
        return alert(NaN);
    } else {
        roundOut(num1,num2);
    }
}

function roundOut(num1,num2){
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        return console.log('Resultado de la suma: '+ (num1 + num2));
    } else {
        console.log('Resultado de la suma redondeado: ', Math.round(num1+num2));
        return alert('No es un numero entero')
    }
}
suma(10.7,5);