function fn() { // Hoisting de variável
    console.log(text);
    var text ='exemplo';

    console.log(text)
}

fn();

function fn2() {
    log('Hoisting de função');
    function log(value) {
        console.log(value);
    }  
}

fn2();