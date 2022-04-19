/*Arrays*/

// a) Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] show by console the months 5 and 11 (use console.log).
console.log('-------------------------');
console.log('ARRAYS a)');

var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('MES 5: ' + month[5] + " " + 'MES 11: '+ month[11]);



// b) Sort the month array alphabetically and display it on the console (use sort).
console.log('-------------------------');
console.log('ARRAYS b)');

month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(month.sort());



// c) Add an element to the beginning and end of the array (use unshift and push).
console.log('-------------------------');
console.log('ARRAYS c)');

month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month.unshift("Months before");
month.push("Months after");
console.log(month);



// d) Remove an element from the beginning and end of the array (use shift and pop).
console.log('-------------------------');
console.log('ARRAYS d)');

month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month.shift();
month.pop();
console.log(month);



// e) Invertir el orden del array (utilizar reverse)
console.log('-------------------------');
console.log('ARRAYS e)');

month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
month.reverse();
console.log(month);



// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('-------------------------');
console.log('ARRAYS f)');
month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Meses:', month.join('-'));



// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
console.log('-------------------------');
console.log('ARRAYS g)');

month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var month_1 = month.slice(4, month.length);
console.log(month_1);