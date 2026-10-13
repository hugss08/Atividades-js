
const publicacao = document.querySelector(".publicacao");
const quantidadeCurtidas = document.getElementById("quantidadeCurtidas");
const mensagem = document.getElementById("mensagem");
const btnCurtir = document.getElementById("btnCurtir");

let curtiu = false;
let curtidas = 0;

function alternarCurtida() {
  if (curtiu === false) {
    
    curtidas = curtidas + 1;                                 
    curtiu = true;                                            
    quantidadeCurtidas.textContent = curtidas;                
    btnCurtir.textContent = "Descurtir";                      
    mensagem.textContent = "Você curtiu esta publicação!";    
    publicacao.classList.add("curtida");                      
    btnCurtir.classList.add("descurtir");                     
  } else {
    
    curtidas = curtidas - 1;                                  
    curtiu = false;                                           
    quantidadeCurtidas.textContent = curtidas;               
    btnCurtir.textContent = "Curtir";                         
    mensagem.textContent = "Você removeu sua curtida.";       
    publicacao.classList.remove("curtida");                   
    btnCurtir.classList.remove("descurtir");                 
  }
}

btnCurtir.addEventListener("click", alternarCurtida);