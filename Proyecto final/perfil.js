const sesionActiva = JSON.parse(localStorage.getItem('activeUser'));
let users = JSON.parse(localStorage.getItem('users')) || [];

const perfilForm = document.getElementById('perfilForm');
const inputNombre = document.getElementById('perfilNombre');
const inputEmail = document.getElementById('perfilEmail');
const inputPassword = document.getElementById('perfilPassword');
const mensajePerfil = document.getElementById('mensajePerfil');

const usuarioActual = users.find(u => u.id === sesionActiva.id);

if (usuarioActual) {
  inputNombre.value = usuarioActual.nombre;
  inputEmail.value = usuarioActual.email;
  inputPassword.value = usuarioActual.password;
}

perfilForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nuevoNombre = inputNombre.value.trim();
  const nuevaPassword = inputPassword.value;

  users = users.map(user => {
    if (user.id === sesionActiva.id) {
      return { ...user, nombre: nuevoNombre, password: nuevaPassword };
    }
    return user;
  });

  localStorage.setItem('users', JSON.stringify(users));
  sesionActiva.nombre = nuevoNombre;
  localStorage.setItem('activeUser', JSON.stringify(sesionActiva));

  mensajePerfil.innerText = "¡Perfil actualizado con éxito!";
  mensajePerfil.className = "text-sm text-center text-green-600 font-bold mt-2 block";
  setTimeout(() => mensajePerfil.classList.add('hidden'), 3000);
});