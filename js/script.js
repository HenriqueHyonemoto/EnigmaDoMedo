const audio = document.createElement('audio');
audio.src = 'sound/memoriatimoris.mp3';
audio.type = 'audio/mpeg';
audio.loop = true;
audio.autoplay = true;
audio.volume = 0.65;

window.addEventListener('load', () => {
  document.body.appendChild(audio);


  audio.play().catch(() => {
    const iniciarSom = () => {
      audio.play().then(() => {
        window.removeEventListener('click', iniciarSom);
        window.removeEventListener('scroll', iniciarSom);
      });
    };

    window.addEventListener('click', iniciarSom);
    window.addEventListener('scroll', iniciarSom);
  });
});