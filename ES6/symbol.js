const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log(' symbol1 é igual a symbol2', symbol1 === symbol2);

//Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Joao',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Vitor'
}

console.log(user);

// Symbols criam propriedades que não não enumerables

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\n Valor da chave ${key}: ${user[key]}`)
    }
}

console.log('\n Propriedades do objeto user: ',Object.keys(user));
console.log('\n Valores das propeiedades do objeto user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('\n Symbols regisrados no objeto user: ',Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('\n Todas as propriedades do objeto user: ', Reflect.ownKeys(user))

//Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};