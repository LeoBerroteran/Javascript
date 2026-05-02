const sesionActiva = JSON.parse(localStorage.getItem('activeUser'));

if (!sesionActiva) {
  window.location.href = 'login.html';
}

const rutaActual = window.location.pathname;

if (rutaActual.includes('admin.html') && sesionActiva.role !== 'admin') {
  alert('Acceso denegado. No tienes permisos de administrador.');
  window.location.href = 'catalogo.html';
}