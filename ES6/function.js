function fn() {
    return 'code here';
}

const arrowFN = () => 'code here';
const arrowFn2 = () => {
    //mais dew uma expressão
    return 'code here';
}

//FUnções também são objetos
fn.prop = 'Criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

// Recever e retornar funções
const controlFnExec = fnParam => allowed => {
if(allowed) {
    fnParam();
 }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executa
handleFnExecution(); // Não executa