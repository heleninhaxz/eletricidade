let resposta = document.getElementById('resposta');

function calcula() {
    let megaohms = Number(document.getElementById('megaohms').value);
    let conversao = megaohms * 1000000;  // Conversão de MΩ para Ω

    resposta.innerHTML = "O valor de megaohms (MΩ) para ohms (Ω) é = " + conversao.toFixed(0) + " Ω";
    resposta.style.fontWeight = "normal";  // Apenas a alteração do peso da fonte
}