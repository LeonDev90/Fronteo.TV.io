
let productos = [];

fetch("./productos.json")
  .then(response => response.json())
  .then(data => {
    productos = data;
    cargar_productos(productos);
  })

const BotonCategoria = document.querySelectorAll(".boton_categoria");
const contenedorProductos = document.querySelector("#contenedor_Productos");
const titulo_principal = document.querySelector(".titulo_principal");
let botonesAgregar = document.querySelectorAll(".producto_agregar");
const numerito = document.querySelector("#numerito");

//////////////////////// control menu lateral///////////////////
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
  aside.classList.add("aside_visible");
})

closeMenu.addEventListener("click", () => {
  aside.classList.remove("aside_visible");
})

//*////////////////////// push cambio de fondo//////////////////////// *//
const toggle_fondo = document.getElementById("toggle_fondo");
const contenedor_tienda = document.querySelector(".contenedor_tienda");
const aside_visible = document.querySelector(".aside_visible");


toggle_fondo.onclick = function () {
  toggle_fondo.classList.toggle("active_fondo");
  contenedor_tienda.classList.toggle("active_fondo");

};

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/**///////////////// funcion para q despaparesca menu lateeal///////////////////// */

BotonCategoria.forEach(boton => boton.addEventListener("click", () => {
  aside.classList.remove("aside_visible");

}));
/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/**//////////////////////CATEGORIAS PRODUCTOS//////// */

BotonCategoria.forEach(boton => {
  boton.addEventListener("click", (e) => {


    BotonCategoria.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);



      const productosBoton = productos.filter(producto => producto.categoria.id === e.
        currentTarget.id);
      cargar_productos(productosBoton);
    } else {
      titulo_principal.innerText = "Todos los productos.";
      cargar_productos(productos);
    }

  })
});

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/** //////////////// conesta funcion se cargan los productos agregados o elegidod */

function cargar_productos(productoElegidos) {

  contenedorProductos.innerHTML = "";

  productoElegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    
      <img class="img_producto" src="${producto.imagen}" alt="${producto.titulo}">

      <div class="producto_detalles">
        <h3 class="producto_titulo">${producto.titulo}</h3>
        <div class="carrito_producto_precio">
          <small>Precio</small>
          <p>COP ${new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(producto.precio)}</p>
    </div>
           <button class="producto_agregar" id="${producto.id}">Agregar</button>
             <div class="container_Boton_detalles " id="containerBotondetalles">
             <div class="content_detalles">
             <h1 class="titulo_detalles">${producto.titul_des}</h1>
             <p class="parrafo_detalles">${producto.p_descrip}</p>
              <img class="img_descrip" src="${producto.img_descrip}"
            <p class="p_promocion">${producto.p_promocion}</p>
            <img class="img_estrellitas"
            src="./img/strellas de calificasion5.png">
          </div>
        <div class="togglebtn_detalles"></div>
      </div>
      
    </div>
    `;

    contenedorProductos.append(div);

    const togglebtn = div.querySelector(".togglebtn_detalles");
    const container_Boton_detalles = div.querySelector(".container_Boton_detalles");

    togglebtn.addEventListener("click", function () {
      const detallesAbiertos = document.querySelectorAll(".container_Boton_detalles.active_text");
      detallesAbiertos.forEach(detalleAbierto => {
        if (detalleAbierto !== container_Boton_detalles) {
          detalleAbierto.classList.remove("active_text");
        }
      });

      container_Boton_detalles.classList.toggle("active_text");
    });
  });

  actualizarBotonesAgregar();
}

/**/////////////////////////////////////////////////////////////////// 


function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto_agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
///// varible y funcion para actualizar cantidad productos //////////
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function agregarAlCarrito(e) {


  ///////////////Libreria producto eliminado  "Toastify"////////
  Toastify({
    text: "Pantalla agregada",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(black,black)",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: "0.7rem",


    },
    offset: {
      x: '3vh', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function () { } // Callback after click
  }).showToast();


  ////////////////////////////////////////////////////



  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex
      (producto => producto.id === idBoton
      );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)
  );
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}
