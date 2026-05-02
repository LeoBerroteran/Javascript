const btnLogout = document.getElementById('btnLogout');
if (btnLogout) {
  btnLogout.addEventListener('click', () => {
    localStorage.removeItem('activeUser');
    window.location.href = 'login.html';
  });
}

const form = document.getElementById('productoForm');
const tablaProductos = document.getElementById('tablaProductos');
const formTitle = document.getElementById('formTitle');
let productos = JSON.parse(localStorage.getItem('products')) || [];

function renderizarProductos() {
  tablaProductos.innerHTML = '';
  productos.forEach(producto => {
  const fila = document.createElement('tr');
  fila.className = "border-b hover:bg-gray-50";
  fila.innerHTML = `
      <td class="p-3"><img src="${producto.imagen}" class="w-12 h-12 object-cover rounded"></td>
      <td class="p-3 text-gray-800 font-medium">${producto.titulo}</td>
      <td class="p-3 text-green-600 font-bold">$${producto.precio}</td>
      <td class="p-3 text-center space-x-2">
        <button onclick="editarProducto(${producto.id})" class="bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
        <button onclick="eliminarProducto(${producto.id})" class="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
      </td>
      `;
    tablaProductos.appendChild(fila);
  });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const idInput = document.getElementById('productoId').value;
    const titulo = document.getElementById('titulo').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);
    const imagen = document.getElementById('imagen').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    if (idInput) {
      const index = productos.findIndex(p => p.id === parseInt(idInput));
      if (index !== -1) productos[index] = { ...productos[index], titulo, precio, imagen, descripcion };
      formTitle.innerText = "Agregar Nuevo Producto";
    } else {
        productos.push({ id: Date.now(), titulo, precio, imagen, descripcion });
    }

    localStorage.setItem('products', JSON.stringify(productos));
    form.reset();
    document.getElementById('productoId').value = '';
    renderizarProductos();
});

window.eliminarProducto = function(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      productos = productos.filter(producto => producto.id !== id);
      localStorage.setItem('products', JSON.stringify(productos));
      renderizarProductos();
    }
};

window.editarProducto = function(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    document.getElementById('productoId').value = producto.id;
    document.getElementById('titulo').value = producto.titulo;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('imagen').value = producto.imagen;
    document.getElementById('descripcion').value = producto.descripcion;
    formTitle.innerText = "Editando Producto";
};

renderizarProductos();