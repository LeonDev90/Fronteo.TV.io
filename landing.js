//*////////////////////// CARGA LOS ELEMENTOS DESDE UN JSON STRING//////////////////////// *//

let productos = [];

fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    cargar_productos(productos);
  });
const BotonCategoria = document.querySelectorAll(".boton_categoria");
const contenedorProductos = document.querySelector("#contenedor_Productos");
const titulo_principal = document.querySelector(".titulo_principal");
let botonesAgregar = document.querySelectorAll(".producto_agregar");
const numerito = document.querySelector("#numerito");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//*////////////////////// push cambio de fondo//////////////////////// *//
const toggle_fondo = document.getElementById("toggle_fondo");

const contenedor_padre = document.querySelector(".contenedor_padre");
const slogan = document.querySelector(".slogan");
const tituloslogan = document.getElementById("tituloslogan");
const titulo_carrusel = document.querySelector(".titulo_carrusel");
const titulo_slider_manual = document.querySelector(".titulo_slider_manual");
const titulolanding = document.querySelector(".titulo_landing");
const elemento = document.getElementsByClassName("elemento ul li");

toggle_fondo.onclick = function () {
  toggle_fondo.classList.toggle("active_fondo");
 
  contenedor_padre.classList.toggle("active_fondo");
  slogan.classList.toggle("active_fondo");
  tituloslogan.classList.toggle("active_fondo");
  titulo_carrusel.classList.toggle("active_fondo");
  titulo_slider_manual.classList.toggle("active_fondo");
  titulolanding.classList.toggle("active_fondo");
};



/*////////////////////funcion para cargar peoductos del JSON/////////// */

function cargar_productos(productoElegidos) {
  contenedorProductos.innerHTML = "";

  productoElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="caracteristicas">
    <hr class="linea_one"><span class="texto_animadoone"> Material % Colombiano </span>
    <i class="bi bi-share-fill compartir"></i>
    <hr class="linea_twow"><span class="texto_animadotwow">Total exclusividad</span>
    </div>

        <img class="img_producto" src="${producto.imagen}" alt="${
      producto.titulo
    }">
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

        
          <div class="container_Boton_detalles  " id="containerBotondetalles">
          <div class="content_detalles">
            <h1 class="titulo_detalles"></h1>
            <p class="parrafo_detalles">El desarrollo web es una actividad esencial para cualquier negocio que
              quiera tener presencia y éxito en el entorno digital. Una página web es la carta de presentación de
              una marca, el escaparate de sus productos o servicios, y el canal de comunicación con sus clientes
              <a class="enlace_detalles" href="#">Bigers</a>
            </p>
          </div>
          <div class="togglebtn_detalles"></div>
        </div>
        

        </div>
      `;

    contenedorProductos.append(div);




    /*///////////// eleemnto para activar boton detalles dentro dela funcion cargar peoductos OJOO/////////*/
    const togglebtn = div.querySelector(".togglebtn_detalles");
    const container_Boton_detalles = div.querySelector(
      ".container_Boton_detalles"
    );

    togglebtn.addEventListener("click", function () {
      const detallesAbiertos = document.querySelectorAll(
        ".container_Boton_detalles.active_text"
      );
      detallesAbiertos.forEach((detalleAbierto) => {
        if (detalleAbierto !== container_Boton_detalles) {
          detalleAbierto.classList.remove("active_text");
        }
      });

      container_Boton_detalles.classList.toggle("active_text");
    });
  });
}

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//*////////////////////// LISTA DESPEGABLe//////////////////////// *//

function abrirListaDesple() {
 
  if (
    listaOculta.style.display === "none" ||
    listaOculta.style.display === ""
  ) {
    listaOculta.style.display = "block";
  } else {
    listaOculta.style.display = "none";
  }
}
/* CIERRA EL BOTON CATEGORIA Y CARGA LOS PRODUCTOS DE LA CATEGORIA*/

document.addEventListener("DOMContentLoaded", function () {

  BotonCategoria.forEach((boton) => {
    boton.addEventListener("click", () => {
        const categoriaSeleccionada = boton.dataset.categoria;
      cargar_productos_filtrados(categoriaSeleccionada);

      /**/ /////////////////////FILTRADO LISTA DESPLEGABLE CATEGORIAS PRODUCTOS//////// */

      function cargar_productos_filtrados(categoriaSeleccionada) {
        fetch("./productos.json")
          .then((response) => response.json())
          .then((data) => {
            const productosFiltrados = data.filter(producto => producto.categoria === categoriaSeleccionada);
            mostrar_productos_filtrados(productosFiltrados);
          })
          .catch(error => console.error('Error al cargar productos:', error));
      }
      
    });

    function mostrar_productos_filtrados(productos) {
      // Aquí deberías tener lógica para mostrar los productos filtrados en tu interfaz
      // Por ejemplo, puedes utilizar la función cargar_productos() con los productos filtrados
      cargar_productos(productos);
    }
  });
  
});

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*////////////////////////// SCRIPT SLIDER MANUAL//////////////////*/

// Seleccionar elementos del DOM
const carousel = document.querySelector(".carousel"); // Contenedor del carrusel
const firstImg = carousel.querySelectorAll("img")[0]; // Primera imagen del carrusel
const arrowIcons = document.querySelectorAll(".wrapper .cont_controls i "); // Íconos de flecha

// Variables para rastreo del estado del arrastre y desplazamiento
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

// Función para mostrar u ocultar las flechas de navegación
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // Ancho de desplazamiento máximo
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; // Flecha izquierda
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block"; // Flecha derecha
};

// Event listeners para los íconos de flecha
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const firstImg = carousel.querySelector("img:first-child"); // Seleccionar la primera imagen dentro del carrusel

    if (!firstImg || typeof firstImg.clientWidth === 'undefined') {
      return; // Retornar si firstImg o clientWidth no están definidos
    }

    let firstImgWidth = firstImg.clientWidth + 14; // Ancho de la primera imagen + margen
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; // Desplazamiento
    setTimeout(() => showHideIcons(), 60); // Mostrar/ocultar íconos después de 60ms
  });
});

// Función para desplazamiento automático
const autoSlide = () => {
  const firstImg = carousel.querySelector("img:first-child"); // Seleccionar la primera imagen dentro del carrusel

  if (
    carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth) ||
    carousel.scrollLeft <= 0 ||
    !firstImg || // Verificar si firstImg está definido
    typeof firstImg.clientWidth === 'undefined' // Verificar si clientWidth está definido en firstImg
  ) {
    return; // Retornar si no hay más imágenes hacia la izquierda o si firstImg o clientWidth no están definidos
  }

  let positionDiff = Math.abs(positionDiff); // Hacer positionDiff positivo
  let firstImgWidth = firstImg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // Si el usuario desplaza hacia la derecha
    carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  } else {
    // Si el usuario desplaza hacia la izquierda
    carousel.scrollLeft -=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }
};

// Función para inicio de arrastre
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX; // Coordenadas del arrastre
  prevScrollLeft = carousel.scrollLeft; // Posición inicial del carrusel
};

// Función para arrastrar
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; // Diferencia de posición
  carousel.scrollLeft = prevScrollLeft - positionDiff; // Actualizar el desplazamiento
  showHideIcons();
};

// Función para finalizar el arrastre
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide(); // Activar función de desplazamiento automático
};

// Event listeners para el arrastre y clics en el carrusel
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/**/ ///////////////// FUNCION DE CONTROLES CLICK ESLIDER/////////// */
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedor_Productos");
  const botonIzquierda = document.getElementById("left");
  const botonDerecha = document.getElementById("right");

  // Ancho de desplazamiento, ajusta el valor según la cantidad de imágenes que quieras mostrar a la vez
  const anchoDesplazamiento = 350;

  // Función para desplazar hacia la izquierda
  botonIzquierda.addEventListener("click", function () {
    contenedor.scrollLeft -= anchoDesplazamiento;
  });

  // Función para desplazar hacia la derecha
  botonDerecha.addEventListener("click", function () {
    contenedor.scrollLeft += anchoDesplazamiento;
  });
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//


/**//////////////////// SCRIP SLIDER ACERCA//////////////// */

var slides=document.querySelectorAll('.slide'),tl=new TimelineLite({paused:true});
for(var i=0;i<slides.length;i++){
    var D=document.createElement('div'); D.className='Dot'; D.id='Dot'+i;
    D.addEventListener('click',function(){ tl.seek(this.id).pause() });
    document.getElementById('Dots').appendChild(D);
    if(i!=0){tl.addPause('Dot'+i)};
    if(i!=slides.length-1){
      tl.to(slides[i],0.5,{scale:.8,ease:Back.easeOut})
        .to(slides[i],0.7,{xPercent:-100,rotationY:80},'L'+i) 
        .from(slides[i+1],0.7,{xPercent:100,rotationY:-80},'L'+i)
        .to('#Dot'+i,0.7,{backgroundColor:'rgba(255,255,255,0.2)'},'L'+i)
        .from(slides[i+1],0.5,{scale:.8,ease:Back.easeIn})
    };
};
function GO(e){
  var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
  if(SD<0){tl.play()}else{tl.reverse()};
};

//document.addEventListener("mousewheel",GO); ojooo

document.getElementById('nextBtn').addEventListener("click",function(){GO(-1)});
document.getElementById('prevtBtn').addEventListener("click",function(){GO(1)});
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */





/** LOGICA CUENTA REGRESIVA */

// Configura el tiempo final para la cuenta regresiva (en formato de fecha)
let countdownEndDate = new Date();
countdownEndDate.setMinutes(countdownEndDate.getMinutes() + 3); // Añade 3 minutos a la fecha actual

let intervalId;
let isRunning = false;

// Función para iniciar o pausar la cuenta regresiva
function toggleCountdown() {
  if (isRunning) {
    clearInterval(intervalId);
    document.getElementById('startPauseButton').textContent = 'Iniciar';
  } else {
    intervalId = setInterval(updateCountdown, 1000);
    document.getElementById('startPauseButton').textContent = 'Pausar';
  }
  isRunning = !isRunning;
}

// Función para reiniciar la cuenta regresiva
function resetCountdown() {
  clearInterval(intervalId);
  isRunning = false;
  document.getElementById('startPauseButton').textContent = 'Iniciar';

  // Reinicia el tiempo
  countdownEndDate = new Date();
  countdownEndDate.setMinutes(countdownEndDate.getMinutes() + 3);

  updateCountdown(); // Actualiza inmediatamente
}

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  const now = new Date();
  const timeLeft = countdownEndDate - now; // Tiempo restante en milisegundos

  if (timeLeft <= 0) {
    // Si el tiempo ha expirado, muestra "00:00:00"
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(intervalId); // Detén la actualización del temporizador
    document.getElementById('startPauseButton').textContent = 'Iniciar';
    isRunning = false;
    return;
  }

  // Calcula las horas, minutos y segundos restantes
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Asegúrate de que siempre tenga dos dígitos
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Inicializa los eventos de los botones
document.getElementById('startPauseButton').addEventListener('click', toggleCountdown);
document.getElementById('resetButton').addEventListener('click', resetCountdown);

// Inicializa el temporizador inmediatamente
updateCountdown();
