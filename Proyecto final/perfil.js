const sesionActiva = JSON.parse(localStorage.getItem('activeUser'));
let users = JSON.parse(localStorage.getItem('users')) || [];

const perfilForm = document.getElementById('perfilForm');
const inputNombre = document.getElementById('perfilNombre');
const inputEmail = document.getElementById('perfilEmail');
const inputPassword = document.getElementById('perfilPassword');
const mensajePerfil = document.getElementById('mensajePerfil');

const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/; 
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/; 

const usuarioActual = users.find(u => u.id === sesionActiva.id);

if (usuarioActual) {
  inputNombre.value = usuarioActual.nombre;
  inputEmail.value = usuarioActual.email;
  inputPassword.value = usuarioActual.password;
}

function mostrarMensaje(mensaje, tipo) {
  mensajePerfil.innerText = mensaje;

  mensajePerfil.className = tipo === 'exito' 
    ? "text-sm text-center text-green-600 font-bold mt-2 block" 
    : "text-sm text-center text-red-600 font-bold mt-2 block";
  
  mensajePerfil.classList.remove('hidden');
  setTimeout(() => mensajePerfil.classList.add('hidden'), 3000);
}

perfilForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nuevoNombre = inputNombre.value.trim();
  const nuevaPassword = inputPassword.value;

  if (!regexNombre.test(nuevoNombre)) {
    mostrarMensaje("El nombre debe tener entre 3 y 50 letras.", "error");
    return;
  }

  if (!regexPassword.test(nuevaPassword)) {
    mostrarMensaje("La contraseña debe tener mínimo 8 caracteres, una letra y un número.", "error");
    return; 
  }

  users = users.map(user => {
    if (user.id === sesionActiva.id) {
      return { ...user, nombre: nuevoNombre, password: nuevaPassword };
    }
    return user;
  });

  localStorage.setItem('users', JSON.stringify(users));
  sesionActiva.nombre = nuevoNombre;
  localStorage.setItem('activeUser', JSON.stringify(sesionActiva));

  mostrarMensaje("¡Perfil actualizado con éxito!", "exito");
});