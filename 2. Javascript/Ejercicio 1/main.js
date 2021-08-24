var edad = prompt("¿Cual es tu edad?"); 
var munfronterizo = confirm ("¿Vives en un municipio fronterizo al norte del país?"); 
var embarazado = confirm ("¿Estás embarazada?"); 
if (embarazado == true) {
    var semanasGestacion = prompt("¿Cuantas semanas de gestación?"); 
}

if (edad >= 18 && munfronterizo == true) { 
    document.write ("Candidato vacuna 1")
} else if ( embarazado == true && edad >= 18 && semanasGestacion > 9 ){
    document.write ("Candidato vacuna 2")
} else if ( edad >= 29){
    document.write ("Candidato vacuna 3")
} else {
    document.write ("No eres candidato vacuna")
}