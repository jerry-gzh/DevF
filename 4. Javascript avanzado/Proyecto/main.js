let pokeCollGlo = [];

async function obtenerPokemons()
{
    try{
        const response =  await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"); //Limit: cards a mostrar 
        
        if(response.status === 200)
        {
            const pokeColl = await Promise.all(  //Promesa anidada
                response.data.results.map(async (item) => { //Hace un mapeo de todos los elementos 
                    const responseFinal = await obtenerDatosPokemon(item.name)//Trae a un elemento por individual y lo almacena            
                    return (responseFinal)
                }
            ))
            //console.log(pokeColl); //Contiene todos los detalles en un arreglo de objetos de todas las cards a mostrar 🟢Traer datos de aqui 
            pokeColl.map(last=> mostrarDatos(last) )//Mapeo de los detalles. 
            pokeCollGlo = pokeColl; // Asigna datos a colección global
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
    img.src = datos.sprites.front_default; 
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
    cardText.innerText = `${datos.id}`;// Elemento extraible 
/*     let cardType = document.createElement("h4");
    cardType.className = "card-type";
    cardType.innerText = `Tipo ${datos.types.map(item => {return item.type.name})}`; */

    card.appendChild(img);// Asigna la imagen a la tarjeta
    card.append(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    // cardBody.appendChild(cardType);
    body.appendChild(card);// Assigna la tarjeta al body 
}

obtenerPokemons()

function displayCardDetails(){
    var x = document.getElementById("poke-card");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
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
        //dataCardDetails(selectedId);
        selectDataId(selectedId);
    }
buttonGroup.addEventListener("click", buttonGroupPressed);
}

// Inserted code 

const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const searchPokemon = event => {
    displayCardDetails();
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

function selectDataId(id) {
    let selPoke = pokeCollGlo[id-1];
    renderPokemonData(selPoke);
    //console.log(selPoke);
}


const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = (data.name)[0].toUpperCase() +(data.name).substring(1);
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `# ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}

const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'poke-shadow.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}

function displaySearch(){
    var x = document.getElementById("search-input");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}