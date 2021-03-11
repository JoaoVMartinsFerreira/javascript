function soma(n1,n2){
    return n1+n2;
}



function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //buscar o elemento html pelo ID
   

}
function redirecionar(){
    window.open("https://google.com");
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="fodase";
    elemento.innerHTML="fodase"
  
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="AAAA";
    elemento.innerHTML = "AAAAAAAAAA"
}
function load(){
    alert("Página carregada")
}
function funcaoChange(elemento){
    alert(elemento.value)
}
//var idade = prompt("Qual sua idade?");
//console.log(validaIdade(idade));
//alert(setReplace("Vai Japão","Japão","Brasil"));
//alert(soma(5,10));