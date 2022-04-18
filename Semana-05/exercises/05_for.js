/*For*/



// a) Create an array containing 5 words and iterate through that array using a JavaScript for loop to display an alert using each of the words.
console.log('FOR a)');

var frutas = ['pera', 'uva', 'pomelo', 'naranja', 'manzana'];

for(var i=0; i<5; i++){
    alert(frutas[i]);
}



// b) To the previous array, convert the first letter of each word to uppercase and show an alert for each modified word.
console.log('FOR b)');

for(var i=0; i<5; i++){
    frutas[i] = (frutas[i].substring(0,1).toUpperCase()) + frutas[i].substring(1,frutas[i].length);
    alert(frutas[i]);
}



// c) Create a variable called “sentence” that has an empty string, then go through the array from point a) with a for loop to save each word inside the sentence variable. At the end show a single alert with the complete chain.
console.log('FOR c)');

var sentence =" ";

for(var i=0; i<5; i++){
    sentence += " ";
    sentence += frutas[i];
}
alert(sentence);



// d) Create an empty array and with a for loop of 10 repetitions. Fill the array with the repetition number, that is, at the end of the execution of the for loop there should be 10 elements inside the array, from number 0 to number 9. Show the final array in the browser console (use console .log)
console.log('FOR d)');

var arr = [];

for(var i=0; i < 10; i++){
    arr [i]= i; 
}
console.log(arr);

