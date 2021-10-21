// Función rango y extracción
function obtenerPokemons()
{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(response =>{
        if(response.status === 200)
        {
            Promise.all(response.data.results.map(async item =>{
                //obtenerDatosPokemon(item.name)
                const axiosresult = await axios.get (`https://pokeapi.co/api/v2/pokemon/${item.name}`);
            if (axiosresult.status === 200)
            {
                return await mostrarDatos(axiosresult.data);
            }
        }
            ))
        }else
        {
            alert("NO SE OBTUVO INFORMACION");
        }
    })
    .catch(error =>{})
}


async function obtenerDatosPokemon(nombre){  
    /* await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then( response =>{ //se cumplio promesa
            if(response.status === 200)
            {
                mostrarDatos(response.data);
                // CON MAP
                response.data.types.map(item => {
                   // console.log(item.type.name);
                });
            }else{
                console.log("NO SE ENCONTRO LA INFORMACION");
            }
        })
        .catch( e =>{
            console.log(e);
            }   
        ); */
            const axiosresult = await axios.get (`https://pokeapi.co/api/v2/pokemon/${nombre}`);
            if (axiosresult.status === 200)
            {
                await mostrarDatos(axiosresult.data);
            }


}

function mostrarDatos(datos){
    //console.log(datos);

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


    card.appendChild(img);// Asigna la imagen a la tarjeta

    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    body.appendChild(card);// Assigna la tarjeta al body 
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

obtenerPokemons()