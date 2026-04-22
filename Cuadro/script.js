const cuadro = document.getElementById('cuadro');
const tamano = 50, velocidad = 15;
let posX = window.innerWidth / 2 - tamano / 2, posY = window.innerHeight / 2 - tamano / 2;

const actualizarPosicion = () => {
  posX = Math.max(0, Math.min(posX, window.innerWidth - tamano));
  posY = Math.max(0, Math.min(posY, window.innerHeight - tamano));  
  cuadro.style.left = posX + 'px';
  cuadro.style.top = posY + 'px';
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') posY -= velocidad;
  if (e.key === 'ArrowDown') posY += velocidad;
  if (e.key === 'ArrowLeft') posX -= velocidad;
  if (e.key === 'ArrowRight') posX += velocidad;
  actualizarPosicion();
});

window.addEventListener('resize', actualizarPosicion);
actualizarPosicion();