/*Strings*/

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var frase= 'sofia baute';
console.log(frase.toLocaleUpperCase());


// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var palabra = 'electricidad', resultado;
console.log('Palabra: ', palabra);
resultado = palabra.substring(0,5);
console.log('Primeros cinco caracteres: ', resultado);


// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var palabra2 = 'medicamento',resultado2;
console.log('Palabra: ', palabra2);
resultado2 = palabra2.substring(((palabra2.length)-3) , palabra2.length) 
console.log('Ultimos tres caracteres: ', resultado2);


// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var palabra3= 'elefantes', resultado3;
console.log(palabra3);
resultado3 = (palabra3.substring(0,1).toUpperCase()) + (palabra3.substring(1,(palabra3.length)).toLowerCase());
console.log(resultado3);

// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var palabra4 = 'control remoto', resultado4;
console.log('Palabra: ', palabra4);
resultado4= " ";
console.log('Posicion del espacio en blanco: ', palabra4.indexOf(resultado4));

// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var palabra5 = 'caballo blanco', resultado5, espacio = " ";
console.log('Palabra: ', palabra5);

espacio = palabra5.indexOf(espacio);
console.log('Posicion del espacio en blanco: ', espacio)

resultado5 = (palabra5.substring(0,1).toUpperCase()) + (palabra5.substring(1,espacio).toLowerCase()) + (palabra5.substring(espacio, espacio+2).toUpperCase()) + (palabra5.substring(espacio+2, palabra5.length).toLowerCase());
console.log('Palabra: ', resultado5);

