const pantalla = document.querySelector(".pantalla");
const numeros = document.querySelectorAll(".numero");
const signos = document.querySelectorAll(".signo");
const igual = document.querySelector("#igual");
const borrar_caracter = document.querySelector("#borrar_caracter");
const borrar_todo = document.querySelector("#borrar_todo");
const punto = document.querySelector("#punto");

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
        operacion = signo.innerHTML
    })
})

igual.addEventListener("click", ()=> {
    switch (operacion) {
        case "+":
            resultado = parseInt(numAnterior) + parseInt(numActual);
            break;
        case "-":
            resultado = parseInt(numAnterior) - parseInt(numActual);
            break;
        case "*":
            resultado = parseInt(numAnterior) * parseInt(numActual);
            break;
        case "/":
            resultado = parseInt(numAnterior) / parseInt(numActual);
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






/*botones.forEach(function(boton) {
    boton.addEventListener("click", function() {

        if (pantalla.innerHTML === "|") {
            pantalla.innerHTML = boton.outerText;
        } else {
            pantalla.innerHTML += boton.outerText;
          }
/*const suma = (num1 , num2) => {
    resultado = num1 + num2;
    return resultado;
}
const resta = (num1 , num2) => {
    resultado = num1 + num2;
    return resultado;
}
const multipicacion = (num1 , num2) => {
    resultado = num1 + num2;
    return resultado
}
const division = (num1 , num2) => {
    resultado = num1 + num2;
    return resultado
}*/
