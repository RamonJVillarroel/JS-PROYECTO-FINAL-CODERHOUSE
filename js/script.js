let header = document.getElementById("encabezado")
let navBar = document.createElement("navb")
navBar.classList.add("container-fluid", "position-sticky", "top-0")
navBar.innerHTML = `<ul class="nav nav-pills mb-3 py-3 container" id="pills-tab" role="tablist">
<li class="nav-item text-primary" role="presentation">
    <a class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
        type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
</li>
<li class="nav-item" role="presentation">
    <a class="nav-link active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
        type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Productos</a>
</li>
<li class="nav-item" role="presentation">
    <a class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
        type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Carrito</a>
</li>
</ul>`;
header.appendChild(navBar)
let alertas = document.getElementById("alertas")
alertas.innerHTML = ` <div class="alert container position-sticky top-0 alert-primary hide" role="alert">
¡Se Añadido al carrito!
</div>
<div class="alert container position-sticky top-0 alert-danger remover" role="alert">
¡Producto eliminado!
</div>`


//seccion productosss
let productos = [
    { id: "1", nombre: "jeans", precio: "1500", image: "./images/jeans4.jpg" },
    { id: "2", nombre: "remera", precio: "1600", image: "./images/remera.jpg" },
    { id: "3", nombre: "zapatillas", precio: "1700", image: "./images/zapatillas.jpg" },
    { id: "4", nombre: "ropa interior", precio: "1800", image: "./images/rpa.jpg" },

];
function guardar_LS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos))
}
function cargardesdeLS() {
    return JSON.parse(localStorage.getItem("producto"))
} 
let container = document.getElementById("producticos")
container.innerHTML = "";

productos.forEach((producto, indice) => {
    let card = document.createElement("div")
    card.classList.add("card", "col-sm-12", "col-lg-3", "bg-dark", "m-5px")
    card.innerHTML = `
  
    <img src="${producto.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="text-primary">${producto.nombre} <br>${producto.precio}</h5>
    <div class="d-grid gap-2">
    <button class="btn btn-primary button" onClick="agregar_al_carrito(${indice})">Añadir</button>
    </div>
    `

    container.appendChild(card)
})


let main_carrito = document.getElementById("carrito")
const agregar_al_carrito = (indice_del_producto) => {
    const indice_encontrado_en_carrito = carrito.findIndex((elemento) => {
        return elemento.id === productos[indice_del_producto].id;
    })
    if (indice_encontrado_en_carrito === -1) {
        const agregarproductos = productos[indice_del_producto];
        agregarproductos.cantidad = 1;
        carrito.push(agregarproductos);
        dibujar_en_carrito();
    }
    else {
        carrito[indice_encontrado_en_carrito].cantidad += 1;
        dibujar_en_carrito();
    }
}

const dibujar_en_carrito = () => {
    let total = 0;
    main_carrito.className = "carrito";
    main_carrito.innerHTML = "";
    if (carrito.length > 0) {
        carrito.forEach((producto, indice) => {
            total = total + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "contenedor_carrito"
            carritoContainer.innerHTML = ` 
            <img src="${producto.image}" class="card-img-top img" alt="...">
            <div class="card-body">
            <h5 class="text-primary">${producto.nombre} <br> Precio: $${producto.precio}</h5>
            <div class="text-primary" > Cantidad: ${producto.cantidad}</div>
            <div class="text-primary"> Subtotal: $ ${producto.precio * producto.cantidad
            }</div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary button" onClick="agregar_al_carrito(${indice})">Añadir</button>
            </div>
            <br>
            <div class="d-grid gap-2">
            <button class="btn btn-primary"  onClick="eliminardelcarrito(${indice})">Eliminar producto</button>
            </div>
            `;

            main_carrito.appendChild(carritoContainer);
        });
        const totalContainer = document.createElement("div");
        totalContainer.className = "carrito_total";
        totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>`

        main_carrito.appendChild(totalContainer);
    } else {
        main_carrito.classList.remove("carrito");
        
    }
};

let carrito = [];

const eliminardelcarrito = (indice) => {
    carrito.splice(indice, 1);
    dibujar_en_carrito();
};
guardar_LS();
cargardesdeLS();






