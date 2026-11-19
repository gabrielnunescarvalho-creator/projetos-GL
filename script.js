/*modo escuro */

const pagina = document.querySelector("html"); 
const botaoTema = document.querySelector(".botao-tema"); 

function alterarTema(){
    pagina.classList.toggle("mode-ecuro");

    if(pagina.classList.contains("modo-escuro")){
        botaoTema.textContent= "☀️"
    }else{
        botaoTema.textContent="🌙"
    }
}

botaoTema.addEventListener("click", alterarTema);