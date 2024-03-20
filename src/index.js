const darkmode = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const trocabotao = document.querySelector(".imagem-botao");



darkmode.addEventListener("click", () => {
    
    const darkmodeAtivo = body.classList.contains("darkmode");
        if(darkmodeAtivo) {
            body.classList.remove("darkmode");
            
            trocabotao.setAttribute("src", "./imagens/sun.png");
        
        }else{
        body.classList.add("darkmode");
        trocabotao.setAttribute("src", "./imagens/moon.png");
    };
});

