function calcularPeso() {
    let peso = document.getElementById("peso").value;
    let genero = document.getElementById("genero").value;
    let resultado = document.getElementById("resultado");
    let alerta = document.getElementById("alerta");
    let audio = document.getElementById("audioAlerta");

    if (peso === "" || peso <= 0) {
        resultado.innerText = "Ingrese un peso válido.";
        return;
    }

    let pesoIdeal = (genero === "Masculino") ? peso * 0.85 : peso * 0.85;
    resultado.innerText = `Tu peso ideal aproximado es: ${pesoIdeal.toFixed(2)} kg.`;

    // Si el género es femenino y el peso es 80 kg o más, mostrar alerta
    if (genero === "Femenino" && peso >= 80) {
        alerta.style.display = "block";
        audio.play();
    } else {
        alerta.style.display = "none";
        audio.pause();
        audio.currentTime = 0;
    }
}
