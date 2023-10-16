document.addEventListener("DOMContentLoaded", function () {
    const contadorElement = document.getElementById("contador");
    const aumentarButton = document.getElementById("aumentar");
    const disminuirButton = document.getElementById("decrecer");
    const reiniciarButton = document.getElementById("resetear");

    let contador = 0;

    aumentarButton.addEventListener("click", function () {
        contador++;
        contadorElement.textContent = contador;
    });

    disminuirButton.addEventListener("click", function () {
        contador--;
        contadorElement.textContent = contador;
    });

    reiniciarButton.addEventListener("click", function () {
        contador = 0;
        contadorElement.textContent = contador;
    });
});
