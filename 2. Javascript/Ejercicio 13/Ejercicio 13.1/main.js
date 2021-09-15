const paises = ["Mexico", "Panama", "Guatemala", "El Salvador", "Republica comunista de China"];
let comp = 0;

function longestCountry (paises){
    for (i=0; i<=(paises.length-1); i++){
        let long = paises[i].length;
        //console.log(long);
        if (long > comp){
            comp = long;
            mayor = paises[i];
        }
    }
    return mayor;
}

console.log(longestCountry(paises));
