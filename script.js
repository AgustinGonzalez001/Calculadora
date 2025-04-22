const pantalla = document.getElementById('pantalla')
const pantallaDos = document.getElementById('pantalla-2')
const botonesNumeros = document.querySelectorAll('.botones-numeros')
const botonesSimbolos = document.querySelectorAll('.botones-simbolos')
const botonRaiz = document.getElementById('boton-raiz')
const botonIgual = document.getElementById('boton-igual')
const botonBorrarTodo = document.getElementById('boton-borrar')
const borrarUnDigito = document.getElementById('boton-borrar-digito')

let numeroActual = ' ';
let Simbolo = ' ';
let numeroAnterior = ' ';


function ActualizarPantalla() {
    pantalla.value = numeroActual; 
    
}
function actualizarPantallaDos(numero) {
    pantallaDos.value = numero;

}


botonesNumeros.forEach((boton) => {
    boton.addEventListener('click', () => {
        const numero = boton.textContent
        numeroActual += numero;
        ActualizarPantalla()
        });
})

botonesSimbolos.forEach((boton) => {
    boton.addEventListener('click', () => {
        Simbolo = boton.textContent;
        actualizarPantallaDos(numeroActual+Simbolo)
        numeroAnterior = numeroActual;
        numeroActual = '';
    })
})


botonIgual.addEventListener('click', () => {
    numeroActual = calcularResultado();
    actualizarPantallaDos(numeroActual + Simbolo+numeroAnterior)
    ActualizarPantalla();
})

botonBorrarTodo.addEventListener('click', () => {

    numeroActual = '';
    Simbolo = '';
    numeroAnterior = '';
    ActualizarPantalla();
})

borrarUnDigito.addEventListener('click', () => {

    if (numeroActual != "No se puede dividir entre 0 ") {
        numeroActual = numeroActual.slice(0, -1);
    } else {
        numeroActual = "";
    }
    ActualizarPantalla();
})

botonRaiz.addEventListener('click', () => {
    const numero = parseFloat(numeroActual);
    if (numero >= 0) {
        numeroActual = Math.sqrt(numero).toString();
    }
    else {
        numeroActual = 'Error!';
    }
    ActualizarPantalla();
})

function calcularResultado() {
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroActual);
let resultado;
    switch (Simbolo) {
        case '+': resultado = num1 + num2;
            break;
        case '-': resultado = num1 - num2;
            break;
        case '*': resultado = num1 * num2;
            break;
        case '÷': //condicion ? verdadero : falso;
            num2 == 0 ? resultado = "No se puede dividir entre 0 " : resultado = num1 / num2;
            break;
        case '%': resultado = num1 * (num2 / 100);
            break;
        default: resultado;
    }    
    return resultado.toString();
}
