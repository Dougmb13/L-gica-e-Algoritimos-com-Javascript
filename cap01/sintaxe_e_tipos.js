//---> comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

//* Você não pode, porém, /* aninhar comentários */ SyntaxError */

//---> Escopo de variável

if (true) {
  var x = 5;
}
console.log(x);  // 5

//Esse comportamento é alterado, quando usado a declaração let introduzida pelo ECMAScript 6.

if (true) {
  let y = 5;
}
//console.log(y);  // ReferenceError: y não está definido

//---> Conversão de tipos de dados

//Em expressões envolvendo valores numérico e string com o operador +,
//JavaScript converte valores numérico para strings. Por exemplo, considere a seguinte declaração:

x = "A resposta é " + 42 // "A resposta é 42"
y = 42 + " é a resposta" // "42 é a resposta"

//Nas declarações envolvendo outros operadores,
//JavaScript não converte valores numérico para strings. Por exemplo:

"37" - 7 // 30
"37" + 7 // "377"

//---> Convertendo strings para números

parseInt()
parseFloat()

//parseInt irá retornar apenas números inteiros, então seu uso é restrito para a casa dos decimais.
// Além disso, é uma boa prática ao usar parseInt incluir o parâmetro da base.
//O parâmetro da base é usado para especificar qual sistema númerico deve ser usado.

//---> Caracteres de escape
var quote = "Ele lê \"The Cremation of Sam McGee\" de R.W. Service.";
console.log(quote); //Ele lê "The Cremation of Sam McGee" de R.W. Service.

var home = "c:\\temp"; // c:\temp

//Você também pode escapar quebras de linhas, precedendo-as com barra invertida.
// A barra invertida e a quebra de linha são ambas removidas da string.

var str = "esta string \
está quebrada \
em várias\
linhas."
console.log(str);   // esta string está quebrada em várias linhas.

//---> Literais

//Literais são exatamente escrever o valor, por exemplo isto seria um "Array literal":
var x = [ "a", "b", "c" ];

//Isto já não é:

var x = new Array();

x.push("a");
x.push("b");
x.push("c");

/*"Literal" é um valor que você escreve literalmente no seu script,
 pode ser atribuindo a uma variável, ou passando com argumento de uma função, 
 ou até escrever solto no seu script, sem atribuir ou setar nada, 
 o que importa é que se escreve exatamente o que será o valor
  (claro que tendo certas situações como "escapes" e outros detalhes).*/

/**
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types

 https://pt.stackoverflow.com/questions/445508/o-que-s%C3%A3o-tipos-literais-em-javascript
 */