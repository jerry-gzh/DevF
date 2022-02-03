//Title Case a Sentence > https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

function titleCase(str) {
  let low = str.toLowerCase();
  let sp = low.split(" ")
  let out = [];
  let fin = "";
  for(let i=0; i<sp.length; i++){
      out.push(sp[i].replace(sp[i][0],sp[i][0].toUpperCase()))
  }
  fin = out.join(" ");
  return (fin);
}

titleCase("I'm a little tea pot");

