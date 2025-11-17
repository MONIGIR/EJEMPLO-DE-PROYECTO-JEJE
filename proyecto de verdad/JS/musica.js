// Lista de canciones que tienes en la carpeta "audio"
const playlist = [
    'audio/follow-the-leader.mp3',
    'audio/comprehend.mp3',
    'audio/barbi.mp3',
    'audio/escape.mp3',
    'audio/Denial.mp3',
];

// índice actual (empieza en una canción aleatoria)
let currentIndex = Math.floor(Math.random() * playlist.length);

// Regresa un índice aleatorio distinto al actual
function getRandomIndex() {
    if (playlist.length <= 1) return 0;

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * playlist.length);
    } while (newIndex === currentIndex); // evita repetir la misma dos veces seguidas

    return newIndex;
}

// Función para reproducir la canción actual
function playCurrentSong() {
    const audio = document.getElementById('bg-music');
    if (!audio) return;

    audio.src = playlist[currentIndex];
    audio.play().catch(err => {
        console.log('No se pudo reproducir automáticamente:', err);
    });
}

// Inicia la música en el primer clic que haga el usuario en la página
document.addEventListener('click', function () {
    const audio = document.getElementById('bg-music');
    if (audio && audio.paused) {
        playCurrentSong();
    }
}, { once: true });

// Cuando termina una canción, pasa a una aleatoria
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    if (!audio) return;

    audio.addEventListener('ended', function () {
        currentIndex = getRandomIndex(); // aquí está el cambio importante
        playCurrentSong();
    });
});

// NO ES PARTE DEL PROYECTO, SOLO ES UNA ADICION, SI GUSTAS DESVINCULARLO SOLO QUITA EL APARTADO DE JS EN EL HTML
