var intento,nroPregunta = intento = 1;
var trivia = "¿Cuál es la resolución de pantalla máxima del monitor, con tecnología de panel IPS, Dell P2419H?";
var rta = "1920x1080";
arriesga = "";
document.getElementById("adivinanza").style.display = 'none';
function comenzar() {
    document.getElementById("inicio").style.display = 'none';
    document.getElementById("adivinanza").style.display = 'block';
    document.getElementById("preguntaNro").innerHTML = nroPregunta;
    document.getElementById("intentos").innerHTML = intento + "/4";
    document.getElementById("pregunta").innerHTML = trivia;
}
function finalizar(gana) {
    document.getElementById("evalua").disabled = true;
    if (gana === true) {
        alert("¡Sos una genia! ¡Sos un genio!");
    } else {
        alert("Lamentablemente sos un queso.");
        return;
    }
}
function evaluar() {
    event.preventDefault();
    arriesga = document.getElementById("anchoInput").value + "x" + document.getElementById("altoInput").value;
    if(arriesga != rta){
        if(intento<4){
            switch (intento) {
                case 3:
                    alert("¡No me suena! Por favor volvé a intentarlo");
                    break;
                case 2:
                    alert("¿Será? Por favor volvé a intentarlo");
                    break;
                default:
                    alert("¡No me suena! Por favor volvé a intentarlo");
                    break;
            }
            intento++
            document.getElementById("intentos").innerHTML = intento + "/4";
        }else{
            finalizar(false);
        }
    }else{
        finalizar(true);
    }
}