A partir de la API de Pokémon: https://pokeapi.co/
Crea un pokédex, es decir una página web donde puedas consultar pokemones, y leer información sobre cada pokemon que se muestre.
Puedes encontrar un sitio de ejemplo que hace algo similar acá: https://pokedex.org/
La página web debe:
Mostrar una lista en tarjetas de, al menos, los primeros 151 pokemones. Las tarjetas deben mostrar el nombre y tipo de cada Pokémon 
(tipo agua, tipo fuego, tipo venenoso, etc.)
Permitir que, al hacer click sobre la tarjeta de un pokemon, se despliegue más información, como el peso, sus movimientos (ataques), etc.
De preferencia empleando un modal.
El sitio web debe tener un buscador de pokemones, donde puedas filtrar pokemones por nombre.
Cosas a tener en cuenta:
Diseño libre (Bootstrap, materialize, o tu propio css)
Uso de clases e instancias.
EcmaScript 6
Repo en Github (Github pages es un plus)








----------------------------------Antes de eliminar ayudas------------------------
// Función busqueda
function obtenerDatosPokemon(nombre){  
    axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then( response =>{
            //se cumplio promesa
            if(response.status === 200)
            {
                let imgurl = response.data.sprites.front_default; //Está es la imágen que se imprimirá 
                //console.log(response.data);//Acceso a todos los parámetros
                /* console.log(response.data.name);
                console.log(`ID: ${response.data.id}`);
                console.log(response.data.height);
                console.log(response.data.weight);
                 */

                mostrarDatos(response.data);
                // CON MAP
                response.data.types.map(item => {
                    console.log(item.type.name);
                    //mostrarTipo(item.type.name,imgurl);
                });
                console.log("_______");

            }else{
                console.log("NO SE ENCONTRO LA INFORMACION");
            }
        })
        .catch( e =>{
            console.log(e);
            }   
        );
}

//Conexión con pantalla
function mostrarTipo(tipo,imgUrl){
    let body = document.getElementById("body");//jalar el elemento que tenga el body

    let nombreTipo = document.createElement("h1");
    nombreTipo.innerText = tipo;

    let imgPokemon = document.createElement("img");
    imgPokemon.src = imgUrl;

    body.appendChild(nombreTipo);// Agregate a donde se indique 
    body.appendChild(imgPokemon);
}



function mostrarDatos(datos){
    console.log(datos);

    let body = document.getElementById("body");//Body como destino dentro HTML
    let card = document.createElement("div");//Crea un nuevo div
    card.className = "card" //Crea la clase card
    let img = document.createElement("img");//Crea el img 
    img.src = datos.sprites.front_default; //Asigna la fuente de la img
    img.className = "card-img-top"; // Crea la clase de la img

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = datos.name;
    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = `# ${datos.id}`;

    body.appendChild(card);// Assigna la tarjeta al body 
    card.appendChild(img);// Asigna la imagen a la tarjeta

    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
}



/* <div class="card" style="width: 10rem;"> //Poner estilo directo en CSS 
<img class="card-img-top" src="..." alt="Card">
<div class="card-body">
  <h5 class="card-title" >Nombre</h5>
  <p class="card-text">Descripción rápida</p>
  <a href="#" class="btn btn-primary">Detalles</a>
</div>
</div>
 */





function obtenerPokemons()
{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    .then(response =>{
        if(response.status === 200)
        {
            response.data.results.map(item =>{
                //console.log(item.name);
                //console.log(item.height);
                obtenerDatosPokemon(item.name)
                //mostrarPokemons(item.name)
            })
        }else
        {
            alert("NO SE OBTUVO INFORMACION");
        }
    })
    .catch(error =>{})
}

/* function mostrarPokemons(nombre){
    let body = document.getElementById("body");
    let tagLabel = document.createElement("label");
    tagLabel.textContent = nombre;
    body.appendChild(tagLabel);
} */


//obtenerDatosPokemon("charizard")

obtenerPokemons()