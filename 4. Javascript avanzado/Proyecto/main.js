// Función rango y extracción
async function obtenerPokemons()
{
    try{
        const response =  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=54&offset=0"); //Limit: cards a mostrar 
        
        if(response.status === 200)
        {
            const ultimo = await Promise.all(  //Promesa anidada
                response.data.results.map(async (item) => { //Hace un mapeo de todos los elementos 
                    const responseFinal = await obtenerDatosPokemon(item.name)//Trae a un elemento por individual y lo almacena            
                    return (responseFinal)
                }
            ))
            console.log(ultimo); //Contiene todos los detalles en un arreglo de objetos de todas las cards a mostrar 
            ultimo.map(last=> mostrarDatos(last) )//Mapeo de los detalles. 
            getId();//Se ejecuta asíncronicamente 🔴
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
    let body = document.getElementById("container");//Body como destino dentro HTML
    let card = document.createElement("div");//Crea un nuevo div
    card.className = ("card"); //Crea la clase card
    card.addEventListener("click", displayCardDetails);//Hace la tarjeta clickeable
    card.setAttribute("id", datos.id); //Agrega un id único a cada card
    
    let img = document.createElement("img");//Crea el img 
    img.src = datos.sprites.front_default; //Asigna la fuente de la img
    img.className = "card-img-top"; // Crea la clase de la img
    img.setAttribute("id", datos.id);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.setAttribute("id", datos.id);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = ((datos.name)[0].toUpperCase() +(datos.name).substring(1));
    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = `# ${datos.id}`;// Elemento extraible 
    let cardType = document.createElement("h4");
    cardType.className = "card-type";
    cardType.innerText = `Tipo ${datos.types.map(item => {return item.type.name})}`;

    card.appendChild(img);// Asigna la imagen a la tarjeta
    card.append(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardType);
    body.appendChild(card);// Assigna la tarjeta al body 
}

function prin(selected){
    console.log(`Aqui estoy ${selected}`)
}

obtenerPokemons()

function createCardDetail(){
    let cardDetail = document.createElement("div");
    cardDetail.className = ("cardDetail");
    cardDetail.style.display = "none";
    cardDetail.id = ("cardDetail");
    body.appendChild(cardDetail);
}

createCardDetail()

function displayCardDetails(){
    var x = document.getElementById("cardDetail");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function dataCardDetails(id){  // 🚧 Tomar en cuenta el flujo de los datos 
    cardDetail.innerText = `EL ID seleccionado es: ${id}` ;
}

//¿Asincronismo afecta? ✅
function getId(){
    const buttonGroup = document.getElementById("container");//Contenedor padre
    const buttonGroupPressed = e => { 
        const isButton = e.target.className === 'card';//Clase destino
/*         if(!isButton) {
            return
        } */
        let selectedId = e.target.id;
        dataCardDetails(selectedId);
    }
buttonGroup.addEventListener("click", buttonGroupPressed);
}