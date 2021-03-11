//Retorna o um array quebrando a string por um delimitador
const splitText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ',splitText);

//Busca por uma valor e substitui por outro
const splitText = 'Texto'.replace('Text','txeT');
console.log('Substituição de valor: ',splitText);

//Retorna a "fatia" de um valor
const lasChar = 'Texto'.slice(-1);
console.log('Última letra da string: ', lasChar);

const semLastChar = 'Texto'.slice(0, -1);
console.log('Valor da string da primeira letra menos a última: ', semLastChar);

const secontToEnd = 'Texto'.slice(1);
console.log('Valor da string da segunda letra té a última: ',secontToEnd);

//Retorn N caracteres a partir de uma posição

const twochars = 'Texto'.substr(0, 2);
console.log('As duas letras primeiras são: ', twochars);