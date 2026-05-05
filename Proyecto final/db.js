function inicializarBaseDeDatos() {
  const usuariosGuardados = localStorage.getItem('users');
  if (!usuariosGuardados) {
    const usuariosIniciales = [
     {
      id: Date.now(),
      nombre: "Administrador",
      email: "admin@catalogo.com",
      password: "123",
      role: "admin"
     }
    ];
    localStorage.setItem('users', JSON.stringify(usuariosIniciales));
  }

    const productosGuardados = localStorage.getItem('products');
    if (!productosGuardados) {
        localStorage.setItem('products', JSON.stringify([]));
    }
}
inicializarBaseDeDatos();