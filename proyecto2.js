/*Crea un videojuego que tenga las siguientes clases:
  - personaje: Clase base para todos los personajes del juego.
  - guerrero: Clase que hereda de personaje y representa a un guerrero.
  - mago: Clase que hereda de personaje y representa a un mago.
  - arquero: Clase que hereda de personaje y representa a un arquero.

  personaje tiene las siguientes propiedades y metodos:
  - nombre: Nombre del personaje.
  - vida: Vida del personaje.
  - daño: Daño del personaje.
  - defensa: Defensa del personaje.
  - velocidad: Velocidad del personaje.
  - atacar(): Metodo utilizado para atacar (con los puños).
  - saludar(): Método utilizado para saludar indicando nombre y clase.*/

  /*guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.

  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.

  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.*/

  /*Debes de crear al menos 5 personajes, al menos 2 deben de ser guerreros, 2 magos y 1 arquero.

  Al iniciar el juego, cada personaje debe saludar indicando su nombre y clase.

  Luego habrá una ronda de ataques. En cada ronda, cada personaje atacará a otro personaje de forma aleatoria.

  Cada personaje solo puede atacar una vez por ronda.

  Además, el orden de la ronda debe ser determinado de forma aleatoria pero tomando en cuenta la velocidad de cada personaje.

  Para ello debes jugar con las probabilidades de cada personaje, por ejemplo:
  - Si el personaje tiene una velocidad de 10, debes generar un numero aleatorio entre 1 y 10.
  - Según el numero aleatorio generado, será determinado el orden de ataque de cada personaje en esa ronda

  Ejemplo:
  Personaje 1: 5
  Personaje 2: 8
  Personaje 3: 2
  Personaje 4: 10
  Personaje 5: 6

  El personaje 4 atacará primero, luego el personaje 2, luego el personaje 5, luego el personaje 1 y por último el personaje 3.

  Cuando un personaje ataque a otro, se utilizara la siguiente lógica:

  El personaje atacado se intentara defender, este generara un numero aleatorio entre 1 y su defensa.
  Si el numero aleatorio es mayor que el daño del atacante, el ataque falla y no se le resta vida al personaje atacado.
  Si el numero aleatorio es menor o igual al daño del atacante, el ataque tiene éxito y se le resta vida al personaje atacado.

  Al momento de atacar, se debe mostrar un mensaje indicando quién ataca a quién y si el ataque fue exitoso o fallido.

  Además, hay un tercio de posibilidades de que un personaje ataque con sus puños y dos tercios de posibilidades de que ataque con su arma, hechizo o flecha (según su clase).

  Cuando la vida de un personaje llegue a 0, este será eliminado del juego y no podrá atacar más.
  El juego termina cuando solo quede un personaje con vida.

  Es importante que cuando un personaje muera, se muestre un mensaje indicando que ha muerto y que no puede atacar más.
  Además, al final del juego, se debe mostrar un mensaje indicando quién es el ganador.

  El juego es ganado por el personaje que quede con vida al final.

  Nota: es importante imprimir cada numero de ronda
  ejemplo: "Ronda 1", "Ronda 2", etc.

  Puntos opcionales:
  - Implementa un sistema de habilidades especiales para cada clase, estas habilidades solo se pueden ser utilizadas una vez por juego.
  - Implementa un inventario y objetos para cada personaje, los cuales pueden ser utilizados para mejorar sus habilidades o recuperar vida, sin embargo
  Estos consumirán un turno de ataque y tienen un número limitado de usos.
  - Agrega la clase "vampiro" cuyos ataques regenerar un % aleatorio de vida al personaje.
  - Agrega la posibilidad de 1 entre 10 de que un personaje se tropiece y no pueda hacer nada en esa ronda
*/

  class Personaje {
  constructor(nombre, vida, danio, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.danio = danio;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar(objetivo) {
    let danio = Math.floor(Math.random * this.danio + 1);
    let defensa_objetivo = Math.floor(Math.random * objetivo.defensa + 1);
    let danioTotal =
      danio - defensa_objetivo >= 0 ? danio - defensa_objetivo : 0;
    objetivo.vida -= danioTotal;
    console.log(
      `${this.nombre} ha atacado a ${objetivo.nombre} con los puños haciendole ${danio} puntos de daño, le quedan ${objetivo.vida} de vida`,
    );
    if (objetivo.vida <= 0) {
      console.log(`${this.nombre} ha derrotado a ${objetivo.nombre}`);
    }
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, danio, defensa, velocidad, armas) {
    super(nombre, vida, danio, defensa, velocidad);
    this.armas = armas;
  }

  ataque_especial(objetivo) {
    let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    let danio = Math.floor(Math.random() * arma.danio + 1);
    let defensa_objetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danioTotal =
      danio - defensa_objetivo >= 0 ? danio - defensa_objetivo : 0;
    objetivo.vida -= danioTotal;
    console.log(
      `${this.nombre} ha atacado a ${objetivo.nombre} con ${arma.nombre} haciendole ${danio} puntos de daño, le quedan ${objetivo.vida} de vida`,
    );
    if (objetivo.vida <= 0) {
      console.log(`${this.nombre} ha derrotado a ${objetivo.nombre}`);
    }
  }

  saludar() {
    console.log(`Mi nombre es ${this.nombre} y soy un guerrero`);
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, danio, defensa, velocidad, hechizos) {
    super(nombre, vida, danio, defensa, velocidad);
    this.hechizos = hechizos;
  }

  ataque_especial(objetivo) {
    let hechizo =
      this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let danio = Math.floor(Math.random() * hechizo.danio + 1);
    let defensa_objetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danioTotal =
      danio - defensa_objetivo >= 0 ? danio - defensa_objetivo : 0;
    objetivo.vida -= danioTotal;
    console.log(
      `${this.nombre} ha atacado a ${objetivo.nombre} con ${hechizo.nombre} haciendole ${danio} puntos de daño, le quedan ${objetivo.vida} de vida`,
    );
    if (objetivo.vida <= 0) {
      console.log(`${this.nombre} ha derrotado a ${objetivo.nombre}`);
    }
  }

  saludar() {
    console.log(`Mi nombre es ${this.nombre} y soy un mago`);
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, danio, defensa, velocidad, flechas) {
    super(nombre, vida, danio, defensa, velocidad);
    this.flechas = flechas;
  }

  ataque_especial(objetivo) {
    let flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    let danio = Math.floor(Math.random() * flecha.danio + 1);
    let defensa_objetivo = Math.floor(Math.random() * objetivo.defensa + 1);
    let danioTotal =
      danio - defensa_objetivo >= 0 ? danio - defensa_objetivo : 0;
    objetivo.vida -= danioTotal;
    console.log(
      `${this.nombre} ha atacado a ${objetivo.nombre} con ${flecha.nombre} haciendole ${danio} puntos de daño, le quedan ${objetivo.vida} de vida`,
    );
    if (objetivo.vida <= 0) {
      console.log(`${this.nombre} ha derrotado a ${objetivo.nombre}`);
    }
  }

  saludar() {
    console.log(`Mi nombre es ${this.nombre} y soy un Arquero`);
  }
}

class Juego {
  constructor(personajes) {
    this.personajes = personajes;
  }

  iniciar() {
    for (let personaje of this.personajes) {
      personaje.saludar();
    }
    do {
      this.personajes_vivos();
      this.generar_velocidad();
      this.organizar_ronda();
      for (let i = 0; i < this.personajes.length; i++) {
        let atacarA = this.numero_aleatorio(this.personajes.length);
        do {
          atacarA = this.numero_aleatorio(this.personajes.length);
        } while (atacarA === i);
        if (this.numero_aleatorio(3) === 0) {
          this.personajes[i].atacar(this.personajes[atacarA]);
        } else {
          this.personajes[i].ataque_especial(this.personajes[atacarA]);
        }
        this.personajes_vivos();
      }
    } while (this.personajes.length > 1);
    console.log(
      `El juego ha terminado, el ganador es ${this.personajes[0].nombre}`,
    );
  }

  personajes_vivos() {
    let personajes_vivos = this.personajes.filter(
      (personaje) => personaje.vida > 0,
    );
    this.personajes = personajes_vivos;
  }

  generar_velocidad() {
    this.personajes = this.personajes.map((personaje) => {
      return {
        ...personaje,
        velocidad_ronda: Math.floor(Math.random() * personaje.velocidad + 1),
      };
    });
  }

  organizar_ronda() {
    let orden_ronda = this.personajes.sort(
      (elemento1, elemento2) =>
        elemento1.velocidad_ronda - elemento2.velocidad_ronda,
    );
    this.personajes = orden_ronda;
  }

  numero_aleatorio(multiplicador, min = 0) {
    return Math.floor(Math.random() * multiplicador + min);
  }
}

let guerrero1 = new Guerrero("Kratos", 100, 20, 10, 5, [
  { nombre: "Hacha Leviatan", danio: 30 },
  { nombre: "Espadas del Caos", danio: 25 },
]);
let guerrero2 = new Guerrero("Arturo", 100, 20, 10, 5, [
  { nombre: "Excalibur", danio: 30 },
  { nombre: "Rhongomyniad", danio: 25 },
]);
let mago1 = new Mago("Voldemort", 80, 15, 5, 7, [
  { nombre: "Crucio", danio: 25 },
  { nombre: "Avada Kedavra", danio: 20 },
]);
let mago2 = new Mago("Gandalf", 80, 15, 5, 7, [
  { nombre: "Luz cegadora", danio: 25 },
  { nombre: "Proyectiles ardientes", danio: 20 },
]);
let arquero1 = new Arquero("Link", 90, 18, 8, 6, [
  { nombre: "Flecha de fuego", danio: 28 },
  { nombre: "Flecha de luz", danio: 22 },
]);

let juego = new Juego([guerrero1, guerrero2, mago1, mago2, arquero1]);

juego.iniciar();
