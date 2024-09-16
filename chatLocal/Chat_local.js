const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Función para mostrar mensaje de bienvenida
function showWelcomeMessage() {
    const welcomeMessage = '¡Bienvenido al chat de Fronteo TV! ¿En qué puedo ayudarte hoy?';
    addMessage('bot', welcomeMessage);
}


// Función para enviar mensaje del usuario
function sendMessage() {
    let userMessage = userInput.value.trim();
    if (userMessage !== '') {
        addMessage('user', userMessage);
        userInput.value = '';
        showTypingIndicator();
        setTimeout(() => handleResponse(userMessage), 1000); // Simula tiempo de respuesta del servidor
    }
}

// Función para manejar la respuesta del bot
function handleResponse(message) {
    let response = '';
    message = message.toLowerCase();
    if (message.includes('hola')) {
        response = '¡Hola! ¿Cómo podemos ayudarte? ¿Estás interesado en comprar cuentas de streaming?';
    }
    else if (message.includes('cuentas')|| message.includes('cuentas') || message.includes('servicio')|| message.includes('servicios')|| message.includes('pantalla')|| message.includes('pantallas')) {
        response = 'Ofrecemos cuentas de streaming para plataformas populares como Netflix, Spotify, Disney+, HBO Max, y más. ¿Cuál es la plataforma de streaming que estás buscando?';
    }
    else if (message.includes('informacion') || message.includes('info')) {
        response = 'Proveemos cuentas premium de las principales plataformas de streaming: Netflix, Spotify, Disney+, HBO Max, Amazon Prime Video, entre otras. Puedes elegir entre cuentas personales o compartidas con múltiples perfiles. ¿Te gustaría más detalles sobre una plataforma en particular?';
    }
    else if (message.includes('precio') || message.includes('precios')|| message.includes('Precios') || message.includes('Precio')|| message.includes('costo') || message.includes('costos')) {
        response = 'Nuestros precios dependen del tipo de cuenta que desees. Aquí tienes una lista aproximada de los precios:\n\n' +
            '- Netflix:     (Individual) $ 12.000/mes\n' +
            '- Disney+:     (Individual): $ 14.000/mes\n' +
            '- HBO Max:     (Individual):  $ 12.000/mes\n' +
            '- Spotify Premium: (Individual)  $ 13.000/mes/\n' +
            '- Amazon Prime Video: (Individual)  $ 15.000/mes\n' +
            '- Apple Music:  (Individual)  $ 13.000/mes\n' +
            '- YouTube Premium:  (Individual)  $ 13.000/mes\n' +

            '- Combo de varias plataformas desde: $ 25.000/mes\n\n' +
            '¿Te interesa alguna plataforma en particular?';
    }
    else if (message.includes('proceso') || message.includes('procesos')) {
        response = 'El proceso es sencillo. Seleccionas la cuenta que deseas, realizas el pago, y en minutos recibirás las credenciales de acceso para la plataforma elegida.';
    }
    else if (message.includes('tiempo') || message.includes('tiempos') || message.includes('demora')) {
        response = 'La entrega de las cuentas es inmediata una vez confirmado el pago. Recibirás tus credenciales en un plazo máximo de 10 minutos.';
    }
    else if (message.includes('soporte') || message.includes('mantenimiento') || message.includes('ayuda')) {
        response = 'Sí, ofrecemos soporte para cualquier problema con las cuentas de streaming. Estamos disponibles para ayudarte con cualquier inconveniente.';
    }
    else if (message.includes('plataformas') || message.includes('plataforma')) {
        response = 'Trabajamos con plataformas como Netflix, Disney+, HBO Max, Amazon Prime Video, Spotify, Apple Music, y más. ¿Cuál es la que te interesa?';
    }
    else if (message.includes('combo') || message.includes('combos')) {
        response = 'Ofrecemos combos que incluyen varias plataformas de streaming a un precio reducido. Por ejemplo, Netflix + Disney+ + Spotify por $ 12.000/mes.';
    }
    else if (message.includes('premium') || message.includes('compartida')) {
        response = 'Ofrecemos cuentas premium personales y cuentas compartidas con múltiples perfiles, según lo que prefieras. Las cuentas compartidas son una opción económica si deseas compartir el costo con otros usuarios.';
    }
    else if (message.includes('seguridad') || message.includes('seguro')) {
        response = 'Nuestras cuentas son completamente seguras. Te garantizamos acceso constante y soporte en caso de cualquier problema.';
    }
    else if (message.includes('spotify')) {
        response = 'Con Spotify Premium, disfrutarás de música sin anuncios, reproducción offline y calidad de sonido mejorada por solo $5/mes.';
    }
    else if (message.includes('netflix')) {
        response = 'Ofrecemos cuentas de Netflix Premium, con acceso a contenido en 4K y múltiples cuentas desde $ 12.000/mes.';
    }
    else if (message.includes('disney') || message.includes('disney+')) {
        response = 'Las cuentas de Disney+ están disponibles por $14.000/mes, con acceso a películas y series de Disney, Marvel, Star Wars y más.';
    }
    else if (message.includes('hbo') || message.includes('hbo max')) {
        response = 'HBO Max te ofrece acceso a los últimos estrenos y series exclusivas por $ 12.000/mes. ¿Te interesa esta plataforma?';
    }
    else if (message.includes('amazon') || message.includes('prime video')) {
        response = 'Con Amazon Prime Video, podrás disfrutar de una gran variedad de películas y series por solo $ 15.000/mes.';
    }
    else if (message.includes('apple') || message.includes('apple music')) {
        response = 'Apple Music Premium te permite escuchar música en alta calidad sin anuncios por $ 14.000/mes.';
    }
    else if (message.includes('youtube') || message.includes('youtube premium')) {
        response = 'YouTube Premium te permite ver videos sin anuncios, disfrutar de YouTube Music y ver contenido offline por solo $ 13.000/mes.';
    }
      else if (message.includes('soporte') || message.includes('mantenimiento') || message.includes('actualizacion')) {
        response = 'Ofrecemos soporte técnico continuo para garantizar que tus cuentas de streaming funcionen sin problemas.';
    }
    else if (message.includes('problema') || message.includes('problemas')) {
        response = 'Si tienes algún problema con tu cuenta, contáctanos y te ofreceremos una solución rápidamente.';
    }
    else {
        response = 'Disculpa no te entendi repiteme por favor. ¿Cual es el servicio que deseas?';
    }


    /* IPTV  */

    if (message.includes('iptv') || message.includes('television')) {
        response = 'Ofrecemos servicios de IPTV con acceso a miles de canales en vivo de todo el mundo, incluyendo deportes, películas, series y más. ¿Estás interesado en suscribirte?';
    }
    else if (message.includes('canales') || message.includes('contenido')) {
        response = 'Nuestro servicio de IPTV te ofrece acceso a más de 10,000 canales en vivo de deportes, películas, entretenimiento, noticias, y mucho más. También ofrecemos acceso a contenido bajo demanda. ¿Te gustaría saber más?';
    }
    else if (message.includes('deportes') || message.includes('fútbol') || message.includes('nba') || message.includes('eventos')) {
        response = 'Con nuestro servicio IPTV, puedes ver eventos deportivos en vivo, incluyendo fútbol, NBA, NFL, UFC, tenis y mucho más. Transmitimos en alta calidad y sin interrupciones.';
    }
   
    else if (message.includes('calidad') || message.includes('hd') || message.includes('4k')) {
        response = 'Ofrecemos transmisión en calidad HD y 4K en muchos de nuestros canales de IPTV. La calidad dependerá de la velocidad de tu conexión a internet.';
    }
   
    else if (message.includes('velocidad') || message.includes('internet')) {
        response = 'Recomendamos una conexión mínima de 10 Mbps para una experiencia fluida en HD, y 20 Mbps o más para transmitir en 4K. ¿Qué velocidad tienes actualmente?';
    }

       else if (message.includes('congelar') || message.includes('problemas') || message.includes('lag')) {
        response = 'Si experimentas congelamientos o lag al usar IPTV, asegúrate de tener una conexión a internet estable y rápida. En la mayoría de los casos, los problemas de congelamiento están relacionados con la velocidad de conexión.';
    }
    else if (message.includes('soporte') || message.includes('ayuda')) {
        response = 'Ofrecemos soporte técnico para ayudarte a configurar IPTV en tu dispositivo, resolver problemas de conexión o cualquier otra consulta. Estamos aquí para ayudarte.';
    }
    else if (message.includes('reembolso') || message.includes('devolucion')) {
        response = 'Ofrecemos reembolsos en caso de que el servicio no funcione correctamente durante los primeros 7 días de uso. Tu satisfacción es nuestra prioridad.';
    }

    else if (message.includes('vod') || message.includes('video on demand') || message.includes('bajo demanda')) {
        response = 'Con nuestro servicio IPTV, también tienes acceso a una amplia biblioteca de Video On Demand (VOD), que incluye las últimas películas, series y programas de televisión. ¿Te gustaría saber más sobre el catálogo?';
    }
    else if (message.includes('configurar') || message.includes('instalar') || message.includes('configuración')) {
        response = 'La instalación de IPTV es muy sencilla. Solo necesitas descargar una aplicación compatible (como IPTV Smarters o GSE Smart IPTV), introducir la lista de canales que te proporcionamos, ¡y listo! Si necesitas ayuda, nuestro soporte técnico puede guiarte en el proceso.';
    }
    else if (message.includes('listas m3u') || message.includes('m3u')) {
        response = 'Te proporcionaremos una lista M3U actualizada, que puedes cargar en cualquier dispositivo compatible con IPTV. Con esto, tendrás acceso inmediato a todos nuestros canales.';
    }

    else if (message.includes('clientes') || message.includes('experiencia')) {
        response = 'Tenemos miles de clientes satisfechos que utilizan nuestro servicio IPTV diariamente. Valoramos mucho sus comentarios y trabajamos continuamente para mejorar la experiencia de transmisión.';
    }
    else if (message.includes('actualizaciones') || message.includes('novedades')) {
        response = 'Actualizamos nuestra lista de canales y VOD regularmente, para que siempre tengas acceso a los últimos contenidos y mejoras. ¿Quieres recibir notificaciones sobre actualizaciones?';
    }
 
 
    else if (message.includes('canales locales') || message.includes('local')) {
        response = 'También ofrecemos algunos canales locales dependiendo de tu ubicación. Si necesitas acceso a canales específicos, ¡háznoslo saber!';
    }
    else if (message.includes('tutorial') || message.includes('guía')) {
        response = 'Si necesitas un tutoria';
    }


    /*RESPUESTAS POSITIVAS*/

    else if (message.includes('ok') || message.includes('de acuerdo') || message.includes('bueno') || message.includes('dale') || message.includes('me gustaria')) {
        response = 'De acuerdo: clikea sobre el icono del asesor dentro de este chat para una asesoria mas personal?...O realiza el pago a este nuemero de cuenta (322 920 62 29) con el nobre de la plataforma enel mensage de envio de pago.';
    }





    else if (message.includes('si')) {
        response = 'OK perfecto visita nuestra tienda O realiza el pago a este nuemero de cuenta (322 920 62 29)';
    }
    else if (message.includes('listo') || message.includes('ya pague') || message.includes('ya hice el pago')) {
        response = 'OK perfecto en menos de 10 minutos reciviras tu pin de ingreso';
    }

    /* CHAT PARA CERRAR TRATO*/

    else if (message.includes('comenzar')|| message.includes('empezar')|| message.includes('donde')|| message.includes('obtener')|| message.includes('obtengo') || message.includes('compro') || message.includes('comprar')||  message.includes('empezamos') || message.includes('comenzamos') || message.includes('iniciar') || message.includes('iniciamos')|| message.includes('como')|| message.includes('donde')) {
        response = 'Compra desde nuestra tienda o clikea sobre el icono del asesor para atenderte personalmemte...';
    }

    /* CHAT PARA FORMAS DE PAGO*/

    else if (message.includes('nequi')|| message.includes('si por nequi')) {
        response = 'Ok perfecto es la forma mas rapida de adquiri tu cuenta de streaming! en cuestion de 5 a 10 minutos despues de hacer tu pago, recibiras tu codigo de acceso ¡ deseas continuar con la compra?';
    }
    else if (message.includes('pagos') || message.includes('pago')) {
        response = 'Aceptamos pagos a través de PayPal, MercadoPago, Nequi, y otros medios. Elige el que mejor se ajuste a ti... Realiza tu pedido desde la tienda o compra directamente por Nequi';
    }


    /* CHAT PARA DESPEDIDA*/

    else if (message.includes('gracias')|| message.includes('gracias por')|| message.includes('gracias por')) {
        response = 'Siempre va ser un gusto atenderte!';
    }






    setTimeout(() => {
        hideTypingIndicator();
        addMessage('bot', response);
    }, 700); // Simula tiempo de respuesta del servidor
}

// Función para mostrar el indicador de escritura
function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('bot-message', 'typing-indicator');
    typingIndicator.textContent = 'Escribiendo...';
    typingIndicator.id = 'typing-indicator';
    chatContainer.appendChild(typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplaza hacia abajo
}

// Función para ocultar el indicador de escritura
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        chatContainer.removeChild(typingIndicator);
    }
}

// Función para agregar mensajes al chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');

    const messageContent = document.createElement('span');
    messageContent.textContent = message;
    messageElement.appendChild(messageContent);

    const messageMeta = document.createElement('div');
    messageMeta.classList.add('message-meta');

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.textContent = getCurrentTime();

    messageMeta.appendChild(timestamp);

    // Solo agrega los chulitos a los mensajes del usuario
    if (sender === 'user') {
        const checkmarks = document.createElement('span');
        checkmarks.classList.add('checkmarks');
        checkmarks.innerHTML = '✓✓'; // Aquí puedes cambiar a los chulitos azules si quieres
        messageMeta.appendChild(checkmarks);
    }

    messageElement.appendChild(messageMeta);
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplaza hacia abajo
}

// Función para obtener la hora actual
function getCurrentTime() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
}

// Ejecuta el mensaje de bienvenida al cargar el contenedor del chat
window.onload = function () {
    showWelcomeMessage();
};

// Vincula el botón de envío con la función sendMessage
sendButton.addEventListener('click', sendMessage);

// Permite enviar el mensaje presionando la tecla Enter
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Previene el comportamiento predeterminado del Enter en el input
        sendMessage();
    }
});
