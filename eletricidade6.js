let resposta = document.getElementById('resposta');
console.log(resposta);

function calcula() {
    let microamperes = Number(document.getElementById('microamperes').value);
    console.log(microamperes);

    let conversao = microamperes / 1000000;  // Conversão de µA para A
    console.log("O valor de microamperes (µA) para amperes (A) é = ", conversao);

    resposta.innerHTML = "O valor de microamperes (µA) para amperes (A) é = " + conversao.toFixed(6) + " A";
    resposta.style.fontWeight = "normal";  // Apenas a alteração do peso da fonte
}