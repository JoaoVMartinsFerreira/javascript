var nomeVar = 'Joao';
let nomeLet = 'Joao';
const nomeConst = 'joao';

console.log(`nomeVar: ${nomeVar}`);
console.log(`nomeLet: ${nomeLet}`);
console.log(`nomeConst: ${nomeConst}`);

//==========================VAR==========================
var test = 'exemplo';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        var test = 'example'; // var só aceita escopo de função ou escopo global
        console.log(`Valor após a execução do if "${test}"` );
    }
    console.log(`Valor após a execuçãodo if "${test}"`);
})();
//==========================LET==========================
(() => {
    let teste = 'Valor função' 
    console.log(`Valor dentro da função "${teste}"`);

    if(true){
        let teste = 'example'; // let e const respeitam o escopo de bloco
        console.log(`Valor após a execução do if "${teste}"` );
    }
    console.log(`Valor após a execuçãodo if "${teste}"`);
})();



//==========================CONST===========================
const name = 'Joao';
//name = 'AA'; // não pode ser alterado quando for tipo primitivo
const user = {
    name: 'joao'
};
user.name = 'Outro nome'; // podemos alterar as pripriedades quando se trata de um objeto

const persons = ['joao','vitor','BBB'];

persons.push("AAA"); // podemos adicionar novos itens;
// ['joao','vitor','BBB','AAA'

persons.shift(); // podemos remover elementos
// ['vitor','BBB','AAA']


persons[1] = 'João'; // podemos alterar diretamente  
 // ['vitor','João','AAA']
console.log('Array após alterações: ', persons)