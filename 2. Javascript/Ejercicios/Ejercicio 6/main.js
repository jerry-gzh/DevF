// Serie de Fibonacci 
//imprimir en consola los numeros entre 0 y 10000 de la secuencia de fibonacci,
//Se trata de una secuencia infinita de números naturales  a partir del 0 y el 1, se van sumando a pares, 
//de manera que cada número es igual a la suma de sus dos anteriores:
//en consola esta seria la salida esperada: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

var a = 0; 
var b = 1;
var c = 0;
console.log(a);
console.log(b);
for (var c= 0; c < 10000;){
    c=a+b;
    a=b;
    b=c;
    if (c < 10000) {console.log(c)};
}

