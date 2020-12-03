bienvenida();

var juego, intento, nroPregunta, intentosMax = 4; /*Al menos 3*/
var preguntaTxt, rta, arriesga; /*Respuesta del jugador */
var pistas = [];
/*
Posible Mejora 1: Se podría armar un objeto TRIVIA que contenga: nroPregunta, pregunta, rta y pistas.
Posible Mejora 2: Podría haber un array de TRIVIAs con muchas adivinanzas.
Posible Mejora 3: Computar el tiempo.
*/

/*Configuración de mensajes */
var msjNuevoIntento = "Por favor, volvé a intentarlo";
var intentosColores = ["", "alert-warning", "alert-danger"];
var msjIncorrecto = ["", "Tal vez te ayude una pista...", "<b>¡Cuidado!</b> Sólo te queda 1 chance."];
var msjFinComun = "";//"<br>Pronto tendremos más preguntas..."
var tituloFinGana = "¡Sos una genia! ¡Sos un genio!";
var msjFinGana = "¡Impresionante! ¡Estupendo! Sigue por este camino.";
var tituloFinPierde = "¡Lamentablemente sos un queso!";
var msjFinPierde = "La recomendación es que vuelvas a leer tanto la página tecnologías antes de volver a intentarlo.";

function bienvenida(){
    inicializar();
    juego=1;
    document.getElementById("fin").style.display = 'none';
    document.getElementById("adivinanza").style.display = 'none';
    document.getElementById("inicio").style.display = 'block';
}

function inicializar() {
    document.getElementById("incorrecto").style.display = 'none';
    document.getElementById("pistas").style.display = 'none';
    document.getElementById("anchoInput").disabled = false;
    document.getElementById("anchoInput").value = undefined;
    document.getElementById("altoInput").value = undefined;
    document.getElementById("evalua").disabled = true;
}
function reiniciar(){
    juego++;
    inicializar();
    comenzar();
}

function comenzar() {
    /*Settea Adivinanza */
    nroPregunta = 1;
    preguntaTxt = "¿Cuál es la resolución de pantalla máxima del monitor, con tecnología de panel IPS, Dell P2419H?";
    rta = "1920x1080";
    pistas = ["la resolución tiene 1920px de ancho.", "la resolución es más conocida como Full HD."];
    intento = 1;
    arriesga = "";
    document.getElementById("preguntaNro").innerHTML = nroPregunta;
    document.getElementById("pregunta").innerHTML = preguntaTxt;
    document.getElementById("intentos").innerHTML = intento + "/4";
    document.getElementById("intentos").setAttribute("class", intentosColores[0]);
    document.getElementById("evalua").disabled = false;
    document.getElementById("fin").style.display = 'none';
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("adivinanza").style.display = 'block';
}

function finalizar(gana) {
    document.getElementById("evalua").disabled = true;
    if (gana === true) {
        document.getElementById("tituloFin").innerHTML = tituloFinGana;
        document.getElementById("msjFin").innerHTML = msjFinGana;
        document.getElementById("msjFin").innerHTML += "<br>Haz conseguido dar una respuesta correcta en la chance <b>"+intento+"</b>"+" del intento <b>"+juego+"</b>."+msjFinComun;
    } else {
        document.getElementById("tituloFin").innerHTML = tituloFinPierde;
        document.getElementById("msjFin").innerHTML = msjFinPierde+msjFinComun;
    }
    document.getElementById("adivinanza").style.display = 'none';
    document.getElementById("fin").style.display = 'block';
}

function mostrarMsjIncorrecto(nivel) {
    document.getElementById("incorrectoTexto").innerHTML = msjIncorrecto[nivel] + "<br>" + msjNuevoIntento;
    document.getElementById("incorrecto").style.display = 'block';
}

function mostrarPista(pistaNro) {
    document.getElementById("pistaTexto").innerHTML = pistas[pistaNro - 1];
    document.getElementById("pistas").style.display = 'block';
}
function intentoMostrar(){
    return intento;
}
function mostrarIntentos(adv) {
    intento++;
    document.getElementById("intentos").innerHTML = intento + "/" + intentosMax;
    document.getElementById("intentos").setAttribute("class", intentosColores[adv]);
}

function actualizarIncorrecto(nivel) {
    mostrarIntentos(nivel);
    mostrarMsjIncorrecto(nivel);
    if (nivel > 0) {
        mostrarPista(nivel);
    }
}

function evaluar() {
    event.preventDefault();
    arriesga = document.getElementById("anchoInput").value + "x" + document.getElementById("altoInput").value;
    if (arriesga != rta) {
        if (intento < intentosMax) {
            switch (intento) {
                case (intentosMax - 1):
                    actualizarIncorrecto(2);
                    /* Ayudas adicionales */
                    document.getElementById("anchoInput").setAttribute("disabled", "");
                    document.getElementById("anchoInput").value = 1920;
                    break;
                case (intentosMax - 2):
                    actualizarIncorrecto(1);
                    /* Ayuda adicional */
                    document.getElementById("anchoInput").value = 1920;
                    break;
                default:
                    actualizarIncorrecto(0);
                    break;
            }
        } else {
            finalizar(false);
        }
    } else {
        finalizar(true);
    }
}