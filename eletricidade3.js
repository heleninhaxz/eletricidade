let resposta = document.getElementById('resposta');

function calcula() {
    let kiloohms = Number(document.getElementById('kiloohms').value);
    
    if (isNaN(kiloohms)) {
        resposta.innerHTML = "Por favor, digite um valor válido em kiloohms.";
        resposta.style.color = "red"; // Altera a cor para indicar erro
        return;
    }

    let conversao = kiloohms * 1000;  // Conversão de kΩ para Ω

    resposta.innerHTML = "O valor de kiloohms (kΩ) para ohms (Ω) é = " + conversao.toFixed(2) + " Ω";
    resposta.style.fontWeight = "normal";
}