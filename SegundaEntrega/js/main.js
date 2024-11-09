const buttons = document.querySelectorAll('.num');
        // Añadimos un event listener a cada botón
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                if (num_cleaner) {
                    escribir(event.target.textContent);
                }else{
                    clean();
                    num_cleaner=true;
                }
            });
        });

const ops = document.querySelectorAll(".act");
        ops.forEach(button => {
            button.addEventListener('click', function(e){
                if (flag) {
                    texto=e.target.id;
                    num1=loquehay();
                    clean();
                    flag=false;
                } else {
                    console.log(texto)
                    flag=true;
                    if(e.target.id=="iwal"){
                        num2=loquehay();
                        result(texto, num1, num2);
                    }
                }

            })
        })

    let texto;
    let flag=true;
    let num_cleaner=true;
    let num1,num2;
    let div=document.getElementById("result");

function escribir(texto){
    div.textContent+=texto;
}

function result(texto, a, b) {
    clean()
    if(texto=="mas"){
        sumar(a,b);
    }else if(texto=="menos"){
        restar(a,b);
    }else if (texto=="por") {
        multiplicar(a,b);
    }else if(texto=="entre"){
        dividir(a,b);
    }
}

function sumar(a,b){
    let suma=Number(a)+Number(b);
    console.log(suma)
    escribir(suma);
}

function restar(a,b){
    let resta=Number(a)-Number(b);
    escribir(resta);
}

function multiplicar(a,b){
    let multi=Number(a)*Number(b);
    escribir(multi);
}

function dividir(a,b){
    let divi=Number(a)/Number(b);
    console.log(divi);
    escribir(divi);
}

function loquehay(){
    return div.textContent;
}

function clean() {
    div.textContent="";
}