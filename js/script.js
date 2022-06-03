let header = document.getElementById("encabezado")
let navBar = document.createElement("navb")
navBar.classList.add("container-fluid", "position-sticky", "top-0")
navBar.innerHTML = `
 <ul class="nav nav-pills mb-3 py-3 container justify-content-end" id="pills-tab" role="tablist">
 <span class="fin_compra">La Tiendita</span>
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
let fondo = document.getElementById("fondo")
fondo.innerHTML=`<img src="images/fondo.jpg" class="img-fluid containes -fluid" alt="fondo"></img>`;

//FETCH 
fetch('fetch.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        cargar_productos(data)
    });

const cargar_productos = (data) => {
    Productos = data
    let container = document.getElementById("producticos")
    container.innerHTML = "";
    Productos.forEach((Producto, indice) => {
        let card = document.createElement("div")
        card.classList.add("card", "col-sm-12", "col-lg-3", "m-5px", "mango")
        card.innerHTML = `
  
    <img src="${Producto.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 >${Producto.nombre} <br>${Producto.precio}</h5>
    <div class="d-grid gap-2">
    <button class="btn btn-primary button" onClick="agregar_al_carrito(${indice})">Añadir</button>
    </div>
    `

        container.appendChild(card)
    })
}
let main_carrito = document.getElementById("carrito")
const dibujar_en_carrito = () => {
    let total = 0;
    main_carrito.className = "carrito";
    main_carrito.innerHTML = "";
    if (carrito.length > 0) {
        carrito.forEach((Producto, indice) => {
            total = total + Producto.precio * Producto.cantidad;
            const carritoC = document.createElement("div");
            carritoC.className = "contenedor_carrito"
            carritoC.innerHTML = ` 
            <img src="${Producto.image}" class="card-img-top img" alt="...">
            <div class="contenedor_carrito2">
            <div>${Producto.nombre}</div> <br> 
            <div>Precio: $${Producto.precio}</div>
            <div> Cantidad: ${Producto.cantidad}</div>
            <div> Subtotal: $ ${Producto.precio * Producto.cantidad}</div>
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary button " onClick="agregar_al_carrito(${indice})">Añadir</button>
            </div>
            <br>
            <div class="d-grid gap-2">
            <button class="btn btn-primary"  onClick="eliminardelcarrito(${indice})">Eliminar producto</button>
            </div>
            `;

            main_carrito.appendChild(carritoC);
        });
        const totalC = document.createElement("div");
        totalC.className = "carrito_total";
        totalC.innerHTML = `
        <div class= "total"> TOTAL $ ${total} <br>
        <button class="btn btn-primary button"  onClick="carritofincompra()" >Finalizar Compra</button>
        </div>`

            ;
        main_carrito.appendChild(totalC);
    } else {

        main_carrito.classList.remove("carrito");

    }
};


const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const agregar_al_carrito = (indice_producto) => {
    //USO DE LIBRERIAS 
    Swal.fire({
        title: 'Usted agrego un producto',
        icon: 'success',
        confirmButtonText: 'ok'
    })
    const indice_carrito = carrito.findIndex((elemento) => {
        return elemento.id === Productos[indice_producto].id;
    })
    if (indice_carrito === -1) {
        const agregarproductos = Productos[indice_producto];
        agregarproductos.cantidad = 1;
        carrito.push(agregarproductos);
        actualizar_storage(carrito);
        dibujar_en_carrito();
    }
    else {
        carrito[indice_carrito].cantidad += 1;
        actualizar_storage(carrito);
        dibujar_en_carrito();
    }
}

const eliminardelcarrito = (indice) => {
    //USO DE LIBRERIAS 
    Swal.fire({
        title: 'USTED ELIMINO EL PRODUCTO',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1500,

    })
    carrito.splice(indice, 1);
    actualizar_storage(carrito);
    dibujar_en_carrito();
};

const actualizar_storage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

/// final del carrito 
function carritofincompra() {
    main_carrito.innerHTML = "";
    let finalizar = document.createElement("div")
    finalizar.innerHTML = `
  <form> 
   <div class="container">
   <div class="input-group input-group-sm mb-3" >
   <span class="input-group-text" > Nombre</span>
   <input type="text" class="form-control"  aria-label="Sizing example input"
   aria-describedby="inputGroup-sizing-sm" id="nombre">
   </div>
   <div class="input-group input-group-sm mb-3">
       <span class="input-group-text" id="inputGroup-sizing-sm">Apellido</span>
       <input type="text" class="form-control" aria-label="Sizing example input"
           aria-describedby="inputGroup-sizing-sm">
   </div>

   <div class="input-group input-group-sm mb-3">
       <span class="input-group-text" id="inputGroup-sizing-sm">Numero</span>
       <input type="number" class="form-control" aria-label="Sizing example input"
           aria-describedby="inputGroup-sizing-sm">
   </div>
   <div class="input-group input-group-sm mb-3">
       <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
       <input type="text" class="form-control" aria-label="Sizing example input"
           aria-describedby="inputGroup-sizing-sm">
   </div>
   <div class="input-group input-group-sm mb-3">
   <span class="input-group-text"   >Domicilio</span>
   <input type="text" class="form-control" id="domicilio" aria-label="Sizing example input"
       aria-describedby="inputGroup-sizing-sm">
  </div>
   <div class="d-grid gap-2">
       <button class="btn btn-primary" type="button" onClick="terminar()">ENVIAR</button>
   </div>
   </div>
  </form>
  

   `;
    main_carrito.appendChild(finalizar)
}
/// final de la compra 
const terminar =() =>{
    const nombreCom = document.getElementById("nombre").value;
    const domicilioCom = document.getElementById("domicilio").value;
    main_carrito.innerHTML = "";
    actualizar_storage(carrito);
    let terminarcompra=`
    <div class="fincompra2">  ¡Gracias por su compra ${nombreCom}!<br>
                               domicilio de llegada: ${domicilioCom} </div> `;
    main_carrito.innerHTML= terminarcompra;
    Swal.fire({
        title: ` USTED FINALIZO LA COMPRA CON EXITO  `  ,
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        timer: 1500,
    })
  
}
