let resposta = document.getElementById('resposta');

function calcula() {
    let miliamperes = Number(document.getElementById('miliamperes').value);
    let conversao = miliamperes / 1000;

    resposta.innerHTML = "O valor de miliamperes (mA) para amperes (A) é = " + conversao.toFixed(2) + " A";
    resposta.style.color = "#333"; // Ajuste de cor conforme o estilo
    resposta.style.fontWeight = "normal";
}
