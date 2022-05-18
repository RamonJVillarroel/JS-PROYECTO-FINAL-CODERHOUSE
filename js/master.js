let header = document.getElementById("header")
header.innerHTML =`  <ul class="nav nav-pills mb-3 py-3 container" id="pills-tab" role="tablist">
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
</ul>`
let alertas = document.getElementById("alertas")
alertas.innerHTML = ` <div class="alert container position-sticky top-0 alert-primary hide" role="alert">
¡Se Añadido al carrito!
</div>
<div class="alert container position-sticky top-0 alert-danger remover" role="alert">
¡Producto eliminado!
</div>`
let producticos = document.getElementById("producticos")
producticos.innerHTML =` <div class="tab-pane fade show active container" id="pills-profile" role="tabpanel"
aria-labelledby="pills-profile-tab">
<h2 class="h4 m-4 text-primary">Productos</h2>
<div id="productos">
</div>
<div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

    <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
           <h5 class="card-title pt-2 text-center text-primary">Jeans</h5>
           <img src="./images/jeans4.jpg" class="card-img-top" alt="...">
           <div class="card-body">
   
               <h5 class="text-primary">Precio: <span class="precio">$1500</span></h5>
               <div class="d-grid gap-2">
                   <button class="btn btn-primary button">Añadir</button>
               </div>
           </div>
       </div>
    </div>
    <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
           <h5 class="card-title pt-2 text-center text-primary">Remera</h5>
           <img src="./images/remera.jpg" class="card-img-top" alt="...">
           <div class="card-body">
   
               <h5 class="text-primary">Precio: <span class="precio">$ 1500</span></h5>
               <div class="d-grid gap-2">
                   <button class="btn btn-primary button">Añadir</button>
               </div>
           </div>
       </div>
    </div>
    <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
           <h5 class="card-title pt-2 text-center text-primary">Ropa Interior</h5>
           <img src="./images/rpa.jpg" class="card-img-top" alt="...">
           <div class="card-body">
   
               <h5 class="text-primary">Precio: <span class="precio">$ 1500</span></h5>
               <div class="d-grid gap-2">
                   <button class="btn btn-primary button">Añadir</button>
               </div>
           </div>
       </div>
    </div>
    <div class="col d-flex justify-content-center mb-4">
       <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
           <h5 class="card-title pt-2 text-center text-primary">Zapatillas</h5>
           <img src="./images/zapatillas.jpg" class="card-img-top" alt="...">
           <div class="card-body">
   
               <h5 class="text-primary">Precio: <span class="precio">$ 1500</span></h5>
               <div class="d-grid gap-2">
                   <button class="btn btn-primary button">Añadir</button>
               </div>
           </div>
       </div>
    </div>
    </div>
</div> `
let compras = document.getElementById("compras")
compras.innerHTML =` <table class="table table-dark table-hover">
<thead>
    <tr class="text-primary">
        <th scope="col">#</th>
        <th scope="col">Productos</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
    </tr>
</thead>
<tbody class="tbody">
</tbody>
</table>
<br><br>
<div class="row mx-4">
<div class="col">
    <h3 class="itemCartTotal text-white">Total: 0</h3>
</div>
<div class="col d-flex justify-content-end">
    <button class="btn btn-success">COMPRAR</button>
</div>
</div>`
const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
     btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e) {
     const button = e.target
     const item = button.closest('.card')
     const itemTitle = item.querySelector('.card-title').textContent;
     const itemPrice = item.querySelector('.precio').textContent;
     const itemImg = item.querySelector('.card-img-top').src;

     const newItem = {
          title: itemTitle,
          precio: itemPrice,
          img: itemImg,
          cantidad: 1
     }

     addItemCarrito(newItem)
}


function addItemCarrito(newItem) {

     const alert = document.querySelector('.alert')

     setTimeout(function () {
          alert.classList.add('hide')
     }, 2000)
     alert.classList.remove('hide')

     const InputElemnto = tbody.getElementsByClassName('input__elemento')
     for (let i = 0; i < carrito.length; i++) {
          if (carrito[i].title.trim() === newItem.title.trim()) {
               carrito[i].cantidad++;
               const inputValue = InputElemnto[i]
               inputValue.value++;
               CarritoTotal()
               return null;
          }
     }

     carrito.push(newItem)

     renderCarrito()
}


function renderCarrito() {
     tbody.innerHTML = ''
     carrito.map(item => {
          const tr = document.createElement('tr')
          tr.classList.add('ItemCarrito')
          const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
          tr.innerHTML = Content;
          tbody.append(tr)

          tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
          tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
     })
     CarritoTotal()
}

function CarritoTotal() {
     let Total = 0;
     const itemCartTotal = document.querySelector('.itemCartTotal')
     carrito.forEach((item) => {
          const precio = Number(item.precio.replace("$", ''))
          Total = Total + precio * item.cantidad
     })

     itemCartTotal.innerHTML = `Total $${Total}`
     addLocalStorage()
}

function removeItemCarrito(e) {
     const buttonDelete = e.target
     const tr = buttonDelete.closest(".ItemCarrito")
     const title = tr.querySelector('.title').textContent;
     for (let i = 0; i < carrito.length; i++) {

          if (carrito[i].title.trim() === title.trim()) {
               carrito.splice(i, 1)
          }
     }

     const alert = document.querySelector('.remover')

     setTimeout(function () {
          alert.classList.add('remover')
     }, 2000)
     alert.classList.remove('remover')

     tr.remove()
     CarritoTotal()
}

function sumaCantidad(e) {
     const sumaInput = e.target
     const tr = sumaInput.closest(".ItemCarrito")
     const title = tr.querySelector('.title').textContent;
     carrito.forEach(item => {
          if (item.title.trim() === title) {
               sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
               item.cantidad = sumaInput.value;
               CarritoTotal()
          }
     })
}

function addLocalStorage() {
     localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function () {
     const storage = JSON.parse(localStorage.getItem('carrito'));
     if (storage) {
          carrito = storage;
          renderCarrito()
     }
}
