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