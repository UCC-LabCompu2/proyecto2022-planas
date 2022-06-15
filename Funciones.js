/**Se envia el formulario con la informacion obtenida (nombre del jugador).
 * @method pasarFormulario
 */
function pasarFormulario() {
    let nombre, urlComp, pasar;
    nombre = document.getElementById("name").value;
    pasar = 1;


    if (nombre === "") {
        alert("Ingrese un nombre valido");
        pasar = 0;
    }
    if (nombre.length > 20) {
        alert("Nombre demasiado grande");
        pasar = 0;
    }
    if (pasar === 1) {
        urlComp = "juego.html#" + nombre;
        window.open(urlComp, "_self");
    }

}

/**
 * Vuelve a la pagina principal.
 * Actualmente no funciona, por lo que se utiliza directamente por html
 * @method Returnindex
 */
function Returnindex() {
    window.open("index.html", "_self");
}

//Variables
let JVida = 10;
let JD = 0;
let JE = 2;
let XP = 0;
let Nivel = 1;
let EVida = 15;

/**
 * Genera la Accion Estudiar.
 * @method Estudio
 */
function Estudio() {
    let A = 3;
    let V=EVida;
    if (JE>0){
        V -= A;
        if (V <= 0) {
            alert("Ganaste, sigue en el camino de conocimiento");
            XP+=20;
        }else{
            alert("Ataca el enemigo");
            AtaqueE();
            Evida=V;
        }
    }else{
        alert("No tienes la energia suficiente")
    }
}

/**
 * Genera la Accion Repaso.
 * @method Repaso
 */
function Repaso() {
    JD = 2;
    alert("Ataca el enemigo");
    AtaqueE();
    JD=0
}

/**
 * Genera la Accion Descansar.
 * @method Descanso
 */
function Descanso() {
    JE = 2;
    alert("Ataca el enemigo");
    AtaqueE();
}

/**
 * Genera el ataque enemigo.
 * @method AtaqueE
 */
function AtaqueE() {

    if (JVida <= 0) {
        alert("Perdiste, intentalo nuevamente");
        window.open("index.html", "_self");
    }
}

window.onload = function () {
    if (XP >= 100) {
        Nivel++;
        XP-=100;
        animateprogress("#barra", XP);
    } else {
        animateprogress("#barra", XP);
    }
}