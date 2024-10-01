let resposta = document.getElementById('resposta');

function calcula() {
    let milivolts = Number(document.getElementById('milivolts').value);
    let conversao = milivolts / 1000;  // Conversão de mV para V
    resposta.innerHTML = "O valor de milivolts (mV) para volts (V) é = " + conversao.toFixed(3) + " V";
}