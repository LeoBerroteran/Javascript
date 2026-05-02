const parametrosURL = new URLSearchParams(window.location.search);
const productoId = parseInt(parametrosURL.get('id'));
const productos = JSON.parse(localStorage.getItem('products')) || [];
const productoEncontrado = productos.find(p => p.id === productoId);
const contenedorDetalle = document.getElementById('contenedorDetalle');

if (productoEncontrado) {
  contenedorDetalle.innerHTML = `
    <div class="md:w-1/2">
      <img src="${productoEncontrado.imagen}" class="w-full h-full object-cover">
    </div>
    <div class="md:w-1/2 p-8 flex flex-col justify-center">
      <h2 class="text-3xl font-bold mb-4">${productoEncontrado.titulo}</h2>
      <p class="text-gray-600 mb-6 text-lg">${productoEncontrado.descripcion}</p>
      <div class="mt-auto">
        <span class="text-4xl font-black text-green-600">$${productoEncontrado.precio}</span>
        <button class="mt-6 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded">Añadir al Carrito</button>
      </div>
    </div>
  `;
} else {
  contenedorDetalle.innerHTML = `<div class="w-full p-10 text-center"><h2 class="text-2xl font-bold text-red-600">Producto no encontrado</h2><a href="catalogo.html" class="text-blue-600 mt-4">Regresar</a></div>`;
}