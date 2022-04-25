///Declaracion de funciones 
function suma() {
    suma = remera + jeans + ropa_interior + zapatillas
    return suma
}
function saludar() {
    alert("Bienvenido " + nombre + " va a realizar una compra");
}
function elegir_producto() {
    producto = prompt("ingrese un producto \n 1: REMERA \n 2: JEANS \n 3: ROPA INTERIOR \n 4: ZAPATILLAS  ");
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
         producto2 = prompt("ingrese un producto \n 1: REMERA \n 2: JEANS \n 3: ROPA INTERIOR \n 4: ZAPATILLAS  ");
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
elegir_producto();
elegir_producto2();
Compra();
despedir();
