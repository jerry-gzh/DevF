var productos = [];
var cuenta = 0;
var subtotal = 0;
var cuentaProducto = 0;
let productosTmp = [
    {
        nombre: "",
        cantidad: "", 
        precio: ""
    }
];

let btAgregar = document.getElementById("btn-agregar")
btAgregar.addEventListener("click", function(){
    let txtnombre = document.getElementById("txt-nombre").value;
    let txtcantidad = document.getElementById("txt-cantidad").value;
    let txtprecio = document.getElementById("txt-precio").value;
    numCantidad = parseInt(txtcantidad);
    numPrecio = parseInt(txtprecio);
    productosTmp.nombre = txtnombre;
    productosTmp.cantidad = numCantidad;
    productosTmp.precio = numPrecio;  
    productos.push(productosTmp);
    cuentaProducto = productosTmp.cantidad*productosTmp.precio;
    subtotal = subtotal + cuentaProducto;
    console.log(`Articulo: ${productosTmp.nombre} Costo: $ ${(cuentaProducto)} Subtotal: $${subtotal}`);
    productosTmp = [];
    document.getElementById("txt-nombre").value = "";
    document.getElementById("txt-cantidad").value = "";
    document.getElementById("txt-precio").value = "";
}); 


let btnEnviar = document.getElementById("btn-enviar")
btnEnviar.addEventListener("click", function(){
    for (i=0; i < productos.length; i++){
        //console.log(productos[i].precio)
        cuenta = cuenta + ((productos[i].cantidad)*(productos[i].precio));
    }
    if (cuenta < 100){
        console.log(`El total de la compra es de: ${cuenta}`)
    }else{
        cuentaDescuento = cuenta * 0.9;
        console.log(`El total de la compra es de: ${cuenta} \n El total con descuento es: ${cuentaDescuento}`)
    }
});