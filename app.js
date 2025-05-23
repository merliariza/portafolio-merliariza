const splashVideo = document.getElementById('splashVideo');
const startButton = document.getElementById('startButton');
const splashScreen = document.querySelector('.splash-screen');

// Pausa el video cuando termine
splashVideo.addEventListener('ended', () => {
  splashVideo.pause();
  splashVideo.currentTime = splashVideo.duration - 0.1; 
});

// Acción cuando se presiona el botón de "Start"
startButton.addEventListener('click', () => {
  // Desaparece la pantalla de splash
  splashScreen.style.opacity = '0';

  // Permite el desplazamiento 
  document.body.style.overflow = 'auto';

  // Muestra la página principal
  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 500); 
});

  