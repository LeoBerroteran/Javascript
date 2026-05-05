const sesionActiva = JSON.parse(localStorage.getItem('activeUser'));
let productos = JSON.parse(localStorage.getItem('products')) || [];

const gridProductos = document.getElementById('gridProductos');
const nombreUsuario = document.getElementById('nombreUsuario');
const linkAdmin = document.getElementById('linkAdmin');

if (sesionActiva) {
  nombreUsuario.innerText = sesionActiva.nombre;
  if (sesionActiva.role === 'admin') {
    linkAdmin.classList.remove('hidden');
  }
}

function cargarCatalogo() {
  gridProductos.innerHTML = '';
  
  if (productos.length === 0) {
    gridProductos.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">No hay productos disponibles.</p>`;
    return;
  }
  
  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg";
    card.innerHTML = `
      <img src="${producto.imagen}" class="w-full h-48 object-cover">
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-gray-800 mb-2">${producto.titulo}</h3>
        <p class="text-gray-600 text-sm mb-4 line-clamp-2">${producto.descripcion}</p>
        <div class="mt-auto flex items-center justify-between">
          <span class="text-xl font-black text-green-600">$${producto.precio}</span>
          <a href="detalle.html?id=${producto.id}" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">Ver Detalles</a>
        </div>
      </div>
    `;
    gridProductos.appendChild(card);
  });
}

cargarCatalogo();

window.addEventListener('storage', (e) => {
  if (e.key === 'products') {
    productos = JSON.parse(e.newValue) || [];
    cargarCatalogo();
  }
});