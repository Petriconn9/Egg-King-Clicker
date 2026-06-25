const btn_musica = document.getElementById("boton musica")
const musica = document.getElementById("musica")

btn_musica.onclick = function() {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
}