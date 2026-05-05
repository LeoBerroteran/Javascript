const sesionActiva = JSON.parse(localStorage.getItem('activeUser'));

if (!sesionActiva) {
  window.location.href = 'login.html';
} else {

  const rutaActual = window.location.pathname;
  if (rutaActual.includes('admin.html') && sesionActiva.role !== 'admin') {
    alert('Acceso denegado. No tienes permisos de administrador.');
    window.location.href = 'catalogo.html';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnLogout = document.getElementById('btnLogout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('activeUser');
      window.location.href = 'login.html';
    });
  }
});