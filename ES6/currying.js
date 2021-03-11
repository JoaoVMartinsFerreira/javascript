
function soma (a, b) { // para cadas parâmetro um função nova é criada
    return a+b;
}
soma(2,3);
soma(2,4);
soma(2,5);


function soma2(a) {
return function(b) { //nova função como segundo parâmetro
    return a + b;
 }
}
const soma2 = soma(2); // o parâmetro é memorizado da variável

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
