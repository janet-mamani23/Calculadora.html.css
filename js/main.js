const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".button");

botones.forEach(boton => {
    boton.addEventListener("click",() => {
        const botonapretado = boton.textContent;
        
        if (pantalla.textContent === "|") {
            pantalla.textContent = botonapretado;
        }else {
            pantalla.textContent += botonapretado;
          }
        if (botonapretado === "+"){
            resultado = (num1 + num2);
        }
        if (botonapretado === "=") {
            botonapretado = resultado;
            pantalla.textContent(resultado);
        }
        if (botonapretado === "C"){
            pantalla.textContent = "|"
        }

    })
})

/*switch (botonapretado)  {
    case "+":
        operacion="suma"
        num1 = botonapretado;
        num2 = botonapretado;
        resultado  = ( num1 + num2);
        pantalla.textContent = resultado
    case "-":
        operacion = "resta";
        num1 = botonapretado;
        num2 = botonapretado;
        resultado  = ( num1 - num2);
        pantalla.textContent = resultado
        
    case "/":
        operacion = "division";
        num1 = botonapretado;
        num2 = botonapretado;
        resultado  = ( num1 / num2);
        pantalla.textContent = resultado
    case "*":
        operacion = "multiplicacion";
        num1 = botonapretado;
        num2 = botonapretado;
        resultado  = ( num1 * num2);
        resultado = pantalla.textContent;
        break;
    case "=":
        operacion = "igual";
        "igual.button" = resultado;
        
    default:
        operacion = "operacion no valida"; 
}
*/