const myNumber = 12.4032;

//Transoformar número para string
const numberToString = myNumber.toString();
console.log('Número transformado: ', typeof numberToString);

// Retorna o numero com casas decimais
const twoDecimals = myNumber.toFixed(2);
console.log('Número com duas casas demimais: ', twoDecimals);

//Transforma em float
console.log(' String para parseada para float', parseFloat('13.22'));

//String em int
console.log('String para int:', parseInt('13.20')); 

const nullVariable = null;

console.log(typeof nullVariable); // log sempre retorna 'object' para o tipo null.
