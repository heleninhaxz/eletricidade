let resposta = document.getElementById('resposta');

function calcula() {
    let amperes = Number(document.getElementById('amperes').value);
    
    if (isNaN(amperes)) {
        resposta.innerHTML = "Por favor, digite um valor válido em amperes.";
        resposta.style.color = "red"; // Altera a cor para indicar erro
        return;
    }

    let conversao = amperes * 1000;  // Conversão de A para mA

    resposta.innerHTML = "O valor de amperes (A) para miliamperes (mA) é = " + conversao.toFixed(2) + " mA";
    resposta.style.color = "#333"; // Ajuste de cor conforme o estilo
    resposta.style.fontWeight = "normal";
}

