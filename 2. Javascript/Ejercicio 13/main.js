let frase = prompt(`Ingrese una frase: `);
let fraseInv = [];
let fraseFix = [];

function inverted(frase){
  for (i = (frase.length - 1); i >= 0; i--){
    fraseInv.push(frase[i]);
  }
  fraseInv = fraseInv.toString(); //Convierte a un string
  fraseInv = fraseInv.toLowerCase(); //Convierte a minusculas
  fraseInv = fraseInv.replace(/,/g, ``); // Elimina las comas
  fraseInv = fraseInv.replace(/ /g, ``); // Elimina los espacios
  return fraseInv;
}

function fixed(frase){
    fraseFix = frase.toLowerCase();
    fraseFix = fraseFix.replace(/,/g, ``);
    fraseFix = fraseFix.replace(/ /g, ``);
    return fraseFix;
}

function palindrome(frase){
    let a = inverted(frase);
    let b = fixed(frase);
   var result;
   if (a == b){
        result = "true";
   }else{
        result = "false";
   }
   return result;
}


//console.log(inverted(frase));
//console.log(fixed(frase));
console.log(palindrome(frase));






