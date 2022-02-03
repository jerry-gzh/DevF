// Destructuración {  } en objetos;

let pokemon = {
    posicion:4,
    nombre:"charmander",
    evolucion:"charmeleon",
    ataque:"ember"
}
console.log(pokemon.nombre);

//      Destructuración

const { nombre,ataque,evolucion } = pokemon;

console.log("- Destructuracion: ", nombre);

/* Vanilla */
let nombre2,ataque2, evolucion2;

let nombre3 = pokemon.nombre;
let ataque3 = pokemon.ataque;


// Destructuring con Arrays [ ]

//NOTA: es importante respetar los indices

console.log("Destructurado con arreglos");

let pokemons = [ "charmander","pikachu", "Snorlax","charizard" ];

const [ pokemon1,pokemon2,pokemon3 ] = pokemons;
console.log(pokemon1,pokemon2,pokemon3);

// equivalente con vanilla

const charmander1 = pokemons[0];

//TIP: reemplazar los elementos que no necesitamos con _

const [ pokemon4,_,__,pokemon5 ] = pokemons;

console.log(pokemon4, pokemon5);


// Combinar con spreed

const a=[1,2,3,4,5,6];
const [x,y,...resto] = a
console.log("Combinando don spread Op: ",resto) // retorna [3,4,5,6]

//  Ejemplo freeCodeCamp

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
    
  const {today: { low: lowToday , high: highToday }} = LOCAL_FORECAST; // Se asigna low a lowToday, high a highToday 

