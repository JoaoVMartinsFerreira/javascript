
const trocafoto = () =>{

    let mudafoto = document.querySelector('img');
    let meuSrc = mudafoto.getAttribute('src');
    if(meuSrc === 'HOLLY.jpg'){
        mudafoto.setAttribute('src','   OPM.jpg');
    }else{
        mudafoto.setAttribute('src','HOLLY.jpg');
    }

}