const btn_musica = document.getElementById("boton musica")
const musica = document.getElementById("musica")
const contador = document.getElementById("dinero")
const btn_click = document.getElementById("Boton")

btn_musica.onclick = function() {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
}

let Dinero = 0
btn_click.onclick = function() {
    Dinero += 1;
    console.log(Dinero);
    contador.innerHTML = "Dinero: " + Dinero;
}
