let resposta = document.getElementById('resposta');

function calcula() {
    let ohms = Number(document.getElementById('ohms').value);
    
    if (isNaN(ohms)) {
        resposta.innerHTML = "Por favor, digite um valor válido em ohms.";
        resposta.style.color = "red"; // Altera a cor para indicar erro
        return;
    }

    let conversao = ohms / 1000;  // Conversão de Ω para kΩ

    resposta.innerHTML = "O valor de ohms (Ω) para kiloohms (kΩ) é = " + conversao.toFixed(2) + " kΩ";
    resposta.style.color = "white"; 
    resposta.style.fontWeight = "normal";
}