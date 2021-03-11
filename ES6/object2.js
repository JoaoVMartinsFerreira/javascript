let user = { 
    name:'João'
};
//Recupera as chaves do objeto
console.log(' Propriedades do objeto', Object.keys(user));


//Recupera os valores das chaves do objeto
console.log('\n Valores das propeiedades do objeto', Object.values(user));

// Resorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\n Lista de propeiedades e valores', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullname: 'João Vitor'});

console.log('\n Adiciona a propriedade fullName no objeto user',user);
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user,{age:22}))

//Previne todas as alterações de um objeto
const newObj = { foo:'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo; 
newObj.bar = 'foo';
console.log('\n Variável newObj após as alterações', newObj);

//Permite apenas a alteraçãp de propeiedades existentes em um objeto
const person ={ name: 'Joao'};
Object.seal(person);

person.name = 'Joao Vitor';
delete person.name;
person.age = 22;

console.log('\n Variável após as alterações', person);