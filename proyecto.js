  /* PROYECTO DE LA SECCION 2 1RA PARTE*/

  /* 1) Realiza una funcionalidad que funcione como el juego de Piedra, Papel o Tijera, 
  el usuario debe ingresar su eleccion, luego la computadora hara una eleccion aleatoria (investigar como generar un numero aleatorio en JavaScript),
  y se mostrara el resultado de quien gano.*/

  let opciones = ["piedra", "papel", "tijera"];
  let eleccionUsuario = prompt ("Elige: piedra, papel o tijera");
  let eleccionCPU = opciones[Math.floor(Math.random() * opciones.length)];
  console.log('Eleccion usuario: ' + eleccionUsuario);
  console.log('Eleccion CPU: ' + eleccionCPU);
  if (eleccionUsuario === eleccionCPU) {
    console.log("empate");
  }  else if ((eleccionUsuario === "piedra" && eleccionCPU === "tijera")) {
    console.log("Has ganado"); 
  } else if ((eleccionUsuario === "tijera" && eleccionCPU === "piedra")) {
    console.log("Has perdido");
  }


  /*2) Realiza una funcionalidad que permita al usuario ingresar un texto, y te muestre el numero de vocales, letras, palabras que tiene ese texto.*/

  let texto = "Javascript es un dolor de cabeza";
  let vocales = texto.match(/[aeiouAEIOU]/g);
  let numeroVocales = vocales ? vocales.length : 0;
  let numeroLetras = texto.replace(/[^a-zA-Z]/g, "").length;
  let numeroPalabras = texto.trim().split(/\s+/).length;
  console.log(`El texto tiene ${numeroVocales} vocales, ${numeroLetras} letras y ${numeroPalabras} palabras.`);


  /*3) Realiza una funcionalidad que verifique si un string es un palindromo, 
  es decir, que se lee igual de izquierda a derecha que de derecha a izquierda,
  por ejemplo "oso" es un palindromo, mientras que "hola" no lo es.*/

  let palindromo = ["Salas" , "Rosa"];
  for (let i = 0; i < palindromo.length; i++) {
    let palabra = palindromo[i].toLowerCase();
    let palabraInvertida = palabra.split("").reverse().join("");
    if (palabra === palabraInvertida) {
      console.log(`${palindromo[i]} es un palindromo`);
    } else {
      console.log(`${palindromo[i]} no es un palindromo`);
    }
  }