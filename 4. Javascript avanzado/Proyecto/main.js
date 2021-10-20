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

                mostrardatos(response.data);
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

function mostrardatos(datos){
    console.log(datos);
    let body = document.getElementById("body");//Destino dentro HTML
    let card = document.createElement("div");
    card.className = "card" 
    let img = document.createElement("img");
    img.src = datos.sprites.front_default;
    img.className = "card-img-top"

    
    card.appendChild(img);
    body.appendChild(card);
}


// 
/* <div class="card" style="width: 10rem;"> //Poner estilo directo en CSS 
<img class="card-img-top" src="..." alt="Card">
<div class="card-body">
  <h5 class="card-title" >Nombre</h5>
  <p class="card-text">Descripción rápida</p>
  <a href="#" class="btn btn-primary">Detalles</a>
</div>
</div> */






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
                mostrarPokemons(item.name)
            })
        }else
        {
            alert("NO SE OBTUVO INFORMACION");
        }
    })
    .catch(error =>{})
}

function mostrarPokemons(nombre){
    let body = document.getElementById("body");
    let tagLabel = document.createElement("label");
    tagLabel.textContent = nombre;
    body.appendChild(tagLabel);
}


//obtenerDatosPokemon("charizard")

obtenerPokemons()