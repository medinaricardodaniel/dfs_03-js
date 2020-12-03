var intento,nroPregunta = intento = 1;
/*var rta, trivia, arriesga = trivia = rta = "";*/
var trivia = "¿Cuál es la resolución de pantalla máxima del monitor, con tecnología de panel IPS, Dell P2419H?";
var rta = "1920x1080";
var pistas = ["la resolución tiene 1920px de ancho.", "la resolución es más conocida como Full HD."];
var arriesga = "";
var intentosMax = 4;
var msjGana = "¡Sos una genia! ¡Sos un genio!";
var msjPierde = "Lamentablemente sos un queso.";
function inicializar(){
    document.getElementById("inicio").style.display = 'block';
    document.getElementById("adivinanza").style.display = 'none';
    document.getElementById("pistas").style.display = 'none';
    document.getElementById("fin").style.display = 'none';
}
inicializar();
function comenzar() {
    document.getElementById("preguntaNro").innerHTML = nroPregunta;
    document.getElementById("pregunta").innerHTML = trivia;
    document.getElementById("intentos").innerHTML = intento + "/4";
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("adivinanza").style.display = 'block';
}
function finalizar(gana) {
    document.getElementById("evalua").disabled = true;
    if (gana === true) {
        alert(msjGana);
    } else {
        alert(msjPierde);
        return;
    }
}
function mostrarPista(pistaNro){
    document.getElementById("pistaTexto").innerHTML = pistas[pistaNro-1];
    document.getElementById("pistas").style.display = 'block';
}
function mostrarIntentos(adv) {
    intento++;
    document.getElementById("intentos").innerHTML = intento + "/"+intentosMax;
    if (adv != "") {
        document.getElementById("intentos").setAttribute("class", adv);
    }
}
function evaluar() {
    event.preventDefault();
    arriesga = document.getElementById("anchoInput").value + "x" + document.getElementById("altoInput").value;
    if(arriesga != rta){
        if(intento<intentosMax){
            switch (intento) {
                case (intentosMax-1):
                    alert("¡Cuidado! Por favor volvé a intentarlo");
                    mostrarPista(2);
                    mostrarIntentos("alert-danger");
                    document.getElementById("anchoInput").value=1920;
                    document.getElementById("anchoInput").setAttribute("disabled", "");
                    break;
                case (intentosMax-2):
                    alert("¿Será? Por favor volvé a intentarlo");
                    mostrarPista(1);
                    mostrarIntentos("alert-warning");
                    break;
                default:
                    alert("¡No me suena! Por favor volvé a intentarlo");
                    mostrarIntentos("");
                    break;
            }
        }else{
            finalizar(false);
        }
    }else{
        finalizar(true);
    }
}