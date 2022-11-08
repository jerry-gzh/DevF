/* a = "albondiga"; 

function capitalize(name){
  let firstChar = name.charAt(0);
  let firstUpp = firstChar.toUpperCase(); 
  let remain = name.slice(0);
  let result = firstUpp + remain;
  return  console.log(remain);
}

capitalize(a); 
 */


const publication = "freeCodeCamp";
let cap = publication[0].toUpperCase() + publication.substring(1);

console.log(cap);