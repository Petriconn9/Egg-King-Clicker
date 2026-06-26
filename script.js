const btn_musica = document.getElementById("boton_musica")
const musica = document.getElementById("musica")
const contador = document.getElementById("dinero")
const btn_click = document.getElementById("Boton")
const pop = document.getElementById("pop")

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
    pop.CurrentTime = 0;
    pop.play();
}
