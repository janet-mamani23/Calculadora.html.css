const pantalla = document.querySelector(".pantalla");
const numeros = document.querySelectorAll(".numero");
const signos = document.querySelectorAll(".signo");
const igual = document.querySelector("#igual");
const borrar_caracter = document.querySelector("#borrar_caracter");
const borrar_todo = document.querySelector("#borrar_todo");

let numActual= "";
let numAnterior= "";
let operacion= "";
let resultado= "";

numeros.forEach((numero) => {
    numero.addEventListener("click", () => {
        numActual += numero.innerHTML;
        pantalla.innerHTML = numActual;
    }
)})
 

signos.forEach((signo) => {
    signo.addEventListener("click", () => {
        numAnterior = numActual;
        numActual = "";
        operacion = signo.innerHTML;
        pantalla.innerHTML = operacion
    })
})

igual.addEventListener("click", ()=> {
    switch (operacion) {
        case "+":
            resultado = parseFloat(numAnterior) + parseFloat(numActual);
            break;
        case "-":
            resultado = parseFloat(numAnterior) - parseFloat(numActual);
            break;
        case "*":
            resultado = parseFloat(numAnterior) * parseInt(numActual);
            break;
        case "/":
            resultado = parseFloat(numAnterior) / parseFloat(numActual);
            break;
        default:
            console.log("operacion no valida");
            break;
    }
    pantalla.innerHTML = resultado
})

borrar_todo.addEventListener("click", ()=> {
    pantalla.innerHTML = "|";
    numActual = "";
    numAnterior="";
})


borrar_caracter.addEventListener("click", ()=> {
    numActual = numActual.slice(0,-1);
    pantalla.innerHTML = numActual;
})
