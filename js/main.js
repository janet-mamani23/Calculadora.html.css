const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".button");

botones.forEach(boton => {
    boton.addEventListener("click",() => {
        const botonapretado = boton.textContent;
        
        
        if (pantalla.textContent =="|") {
            pantalla.textContent = botonapretado;
        }else {
            pantalla.textContent += botonapretado;
            return;
          }
        
    
    
    })
})