// Función rango y extracción
async function obtenerPokemons()
{
    try{
        const response =  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
        
        if(response.status === 200)
        {
            const ultimo= await Promise.all(
                response.data.results.map(async (item) => {                
                    const responseFinal = await obtenerDatosPokemon(item.name)                    
                    return (responseFinal)
                }
            ))
            //console.log(ultimo)
            ultimo.map(last=> mostrarDatos(last) )

            
        }else
        {
            alert("NO SE OBTUVO INFORMACION");
        }
    }
    catch(error){
        console.log(error)
    }
}


async function obtenerDatosPokemon(nombre){    
    try {
        const axiosresult = await axios.get (`https://pokeapi.co/api/v2/pokemon/${nombre}`)            
        return axiosresult.data
        //mostrarDatos(axiosresult.data)               
            
    } catch (error) {
        console.log(error)
    }
}

function mostrarDatos(datos){
    //console.log(datos);

    let body = document.getElementById("container");//Body como destino dentro HTML
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