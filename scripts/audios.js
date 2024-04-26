document.addEventListener('DOMContentLoaded', function() {
    const audioFiles = [
        "../tarefashenry/sounds/audio1.mp3",
        "../tarefashenry/sounds/audio2.mp3",
    ];

    let currentAudioIndex = 0;
    const backgroundMusic = document.createElement('audio');
    backgroundMusic.src = audioFiles[currentAudioIndex];
    backgroundMusic.loop = false; // Desativa o loop

    // Função para tocar o próximo áudio
    function playNextAudio() {
        currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
        backgroundMusic.src = audioFiles[currentAudioIndex];
        backgroundMusic.play();
    }

    // Evento que troca para o próximo áudio ao terminar o atual
    backgroundMusic.addEventListener('ended', playNextAudio);

    // Iniciar a reprodução do primeiro áudio
    backgroundMusic.play();

    const muteButton = document.getElementById('muteButton');
    muteButton.addEventListener('click', function() {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            backgroundMusic.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });

    // Adiciona o elemento de áudio ao body (opcional, se você quiser controle visual)
    document.body.appendChild(backgroundMusic);
});