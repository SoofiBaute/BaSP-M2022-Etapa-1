/*Arrays*/

// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('MES 5: ' + month[5] + " " + 'MES 11: '+ month[11]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(month.sort());

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month.unshift("Meses antes");
month.push("Meses despues");
console.log(month);


// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
month.shift();
month.pop();
console.log(month);

// e) Invertir el orden del array (utilizar reverse).
month.reverse();
console.log(month);

// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Meses:', month.join('-'));

// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var month_1 = month.slice(4, month.length);
console.log(month_1);