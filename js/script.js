const audio = document.createElement('audio');
audio.src = 'sound/memoriatimoris.mp3';
audio.type = 'audio/mpeg';
audio.loop = true;
audio.autoplay = true;
audio.volume = 0.5; // volume mais baixo

// Tenta iniciar o áudio (pode ser bloqueado pelo navegador)
window.addEventListener('load', () => {
  // Adiciona ao body
  document.body.appendChild(audio);

  // Tenta reproduzir
  audio.play().catch(() => {
    // Se falhar, espera interação do usuário
    const iniciarSom = () => {
      audio.play();
      window.removeEventListener('click', iniciarSom);
    };
    window.addEventListener('click', iniciarSom);
  });
});