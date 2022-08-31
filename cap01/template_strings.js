/****Tagged template strings *****/
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b}`;
//tag(`Hello ${ a + b } world ${ a * b}`);

console.log(`\n`);

/***Interpolação de Expressões ***/
var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."

/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals#strings_multi-linhas
*/