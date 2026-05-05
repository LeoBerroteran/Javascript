const registroForm = document.getElementById('registroForm');
const loginForm = document.getElementById('loginForm');

const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; 
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; 

if (registroForm) {
  registroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');

    mensajeError.classList.add('hidden');

    if (!regexNombre.test(nombre)) {
      mensajeError.innerText = 'El nombre debe tener entre 3 y 40 caracteres y contener solo letras.';
      mensajeError.classList.remove('hidden');
      return;
    }

    if (!regexEmail.test(email)) {
      mensajeError.innerText = 'Por favor, ingresa un correo electrónico válido.';
      mensajeError.classList.remove('hidden');
      return;
    }

    if (!regexPassword.test(password)) {
      mensajeError.innerText = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.';
      mensajeError.classList.remove('hidden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExiste = users.some(user => user.email === email);

    if (emailExiste) {
      mensajeError.innerText = 'Este correo electrónico ya está registrado.';
      mensajeError.classList.remove('hidden');
      return;
    }

    users.push({ id: Date.now(), nombre, email, password, role: 'user' });
    localStorage.setItem('users', JSON.stringify(users));
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login.html'; 
  });
}

if (loginForm) {
 loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');

    mensajeError.classList.add('hidden');

    if (!regexEmail.test(email)) {
      mensajeError.innerText = 'Por favor, ingresa un correo electrónico con formato válido.';
      mensajeError.classList.remove('hidden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usuarioValido = users.find(user => user.email === email && user.password === password);

    if (!usuarioValido) {
      mensajeError.innerText = 'Correo o contraseña incorrectos.';
      mensajeError.classList.remove('hidden');
      return;
    }

    const sesionActiva = {
      id: usuarioValido.id,
      nombre: usuarioValido.nombre,
      email: usuarioValido.email,
      role: usuarioValido.role
    };
    localStorage.setItem('activeUser', JSON.stringify(sesionActiva));

    if (usuarioValido.role === 'admin') {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'catalogo.html';
    }
  });
}