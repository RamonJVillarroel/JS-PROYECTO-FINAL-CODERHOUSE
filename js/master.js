///Declaracion de funciones 
function saludar() {
    alert("Bienvenido " + nombre + " va a realizar una compra");
}
function elegir_producto() {
    producto = prompt("ingrese un producto \n 1: REMERA=1000 \n 2: JEANS=1500 \n 3: ROPA INTERIOR=500 \n 4: ZAPATILLAS=3000  ");
    if (producto == "1") {
         alert("elegiste Remera");
    } else if (producto == "2") {
         alert("elegiste jeans");
    } else if (producto == "3") {
         alert("elegiste ropa interior");
    } else if (producto == "4") {
         alert("elegiste zapatillas");
    } 
}
function elegir_producto2() {
    if (producto >= "5") {
         alert("Debes seleccionar un producto");
         producto2 = prompt("ingrese un producto \n 1: REMERA=1000 \n 2: JEANS=1500 \n 3: ROPA INTERIOR=500 \n 4: ZAPATILLAS=3000 ");
         if (producto2 === "1") {
              alert("usted eligio Remera su valor es: " + remera);
         } else if (producto2 === "2") {
              alert("usted eligio jeans su valor es: " + jeans);
         } else if (producto2 === "3") {
              alert("usted eligio ropa interior su valor es: " + ropa_interior);
         } else if (producto2 === "4") {
              alert("usted eligio zapatillas su valor es: " + zapatillas);
         }
         Compra();
         alert ("gracias por su compra")
}
}
function Compra() {
    if (producto === "1") {
         alert("usted eligio Remera su valor es: " + remera);
    } else if (producto === "2") {
         alert("usted eligio jeans su valor es: " + jeans);
    } else if (producto === "3") {
         alert("usted eligio ropa interior su valor es: " + ropa_interior);
    } else if (producto === "4") {
         alert("usted eligio zapatillas su valor es: " + zapatillas);
    }
}
function despedir() {
    alert("¡Gracias " + nombre + " por la compra, vuelva pronto!");
}

function mas_items(){
     class Articulo {
          constructor(elegir_producto3, precio, cantidad) {
            this.elegir_producto3 = elegir_producto3;
            this.precio = precio;
            this.cantidad = cantidad;
          }
     }
     const arrayArticulos = [];
     let pregunta = prompt("¿desea cargar un producto? (s/n) ");
        
     while (pregunta === "s") {
          let elegir_producto3 = prompt("ingrese el  producto que desea comprar ");
          let precio = prompt("ingrese el precio del producto");
          let cantidad = prompt("ingrese cuantos quiere ");
          let articuloIngresado = new Articulo(elegir_producto3, precio, cantidad);
          arrayArticulos.push(articuloIngresado);
          console.log(arrayArticulos);
          pregunta = prompt("¿desea cargar otro producto? (s/n) ");
     }
        
     let totalCompra = 0;
        
     for (i = 0; i < arrayArticulos.length; i++) {
          console.log(arrayArticulos[i]);
          totalCompra =
            totalCompra + arrayArticulos[i].precio * arrayArticulos[i].cantidad;
     }
    alert("El monto a pagar es de $  " + totalCompra);
}


//variables
let producto;
let producto2;
let remera = 1000
let jeans = 1500
let ropa_interior = 500
let zapatillas = 3000
let nombre = prompt("ingrese su nombre")
//llamo a las funciones
saludar();
const items = prompt("ingrese la cantidad de items")
if (items >= "2"){
     mas_items();
}else if(items <= "1") {
     elegir_producto();
     elegir_producto2();
}
despedir();
