document.addEventListener('DOMContentLoaded', () => {
  const btnLogout = document.getElementById('btnLogout');

  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('activeUser');
      window.location.href = 'login.html';
    });
  }
});