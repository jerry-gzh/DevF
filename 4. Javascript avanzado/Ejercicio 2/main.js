
//pokemon API 

const request = require("request"); // importando libreria

const URI = "https://pokeapi.co/api/v2/pokemon/"; // declarando URL a la que nos vamos a conectar

function getPokemonByName(name)
{
    // Realizando una peticion GET(obtener informacion)
    // URL + nombre del pokemon (asi esta diseñada la api)
    //callback - se ejecuta una vez que se termina la primera funcion
    // una vez que obtiene la info, ejecuta el callback
    // el callback recibe 3 parametros, err = error, 
    //response = datos de la peticion, 
    //body = aqui contiene la info
    request.get(URI + name,function(err,response,body){

        if (err)
        {
            console.log(err);
            return;
        }

        if( response.statusCode === 200 ) // 200 = OK
        {
            // JSON.parse() convierte un string a objeto literal
            const infoPokemonJson = JSON.parse(body); // la info se recibe como string
            console.log("Habilidades");
            console.log(infoPokemonJson.abilities.map(item => item.ability.name)); // con map extrae el nombre de la habilidad
        }else
        {
            console.log("Ocurrioun error durante la peticion");
        }
    })
}

getPokemonByName("pikachu");
getPokemonByName("gengar");
getPokemonByName("charizard");
getPokemonByName("mew");
getPokemonByName("onix");