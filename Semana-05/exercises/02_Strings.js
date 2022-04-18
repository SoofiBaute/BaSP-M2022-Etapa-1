/*Strings*/



// a) Create a variable of type string with at least 10 characters and convert all text to uppercase (use toUpperCase).
console.log('STRINGS a)');

var frase= 'sofia baute';
console.log(frase.toLocaleUpperCase());



// b) Create a variable of type string with at least 10 characters and generate a new string with the first 5 characters saving the result in a new variable (use substring).
console.log('STRINGS b)');

var palabra = 'electricidad', resultado;
console.log('Palabra: ', palabra);
resultado = palabra.substring(0,5);
console.log('Primeros cinco caracteres: ', resultado);



// c) Create a variable of type string with at least 10 characters and generate a new string with the last 3 characters saving the result in a new variable (use substring).
console.log('STRINGS c)');

var palabra2 = 'medicamento',resultado2;
console.log('Palabra: ', palabra2);
resultado2 = palabra2.substring(((palabra2.length)-3) , palabra2.length) 
console.log('Ultimos tres caracteres: ', resultado2);



// d) Create a variable of type string with at least 10 characters and generate a new string with the first letter in uppercase and the rest in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator).
console.log('STRINGS d)');

var palabra3= 'elefantes', resultado3;
console.log(palabra3);
resultado3 = (palabra3.substring(0,1).toUpperCase()) + (palabra3.substring(1,(palabra3.length)).toLowerCase());
console.log(resultado3);



// e) Create a variable of type string with at least 10 characters and some white space. Find the position of the first white space and store it in a variable (use indexOf).
console.log('STRINGS e)');

var palabra4 = 'control remoto', resultado4;
console.log('Palabra: ', palabra4);
resultado4= " ";
console.log('Posicion del espacio en blanco: ', palabra4.indexOf(resultado4));



// f) Create a variable of type string with at least 2 words long (10 characters and some space in between). Use the methods from the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase, and the + operator).
console.log('STRINGS f)');

var palabra5 = 'caballo blanco', resultado5, espacio = " ";
console.log('Palabra: ', palabra5);

espacio = palabra5.indexOf(espacio);
console.log('Posicion del espacio en blanco: ', espacio)

resultado5 = (palabra5.substring(0,1).toUpperCase()) + (palabra5.substring(1,espacio).toLowerCase()) + (palabra5.substring(espacio, espacio+2).toUpperCase()) + (palabra5.substring(espacio+2, palabra5.length).toLowerCase());
console.log('Palabra: ', resultado5);

