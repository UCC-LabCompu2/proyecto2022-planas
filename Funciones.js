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
        Nombre = document.getElementById("name").value;
        localStorage.setItem("ELNOM", nombre);
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

/**
 * Esta funcion sirve para obtener la informacion pasada a travez de la url
 * @method obtenerFormulario
 */

//Variables
let Nombre = localStorage.getItem("ELNOM");
let JVida = 10;
let JD = 0;
let JE = 2;
let XP = 0;
let Nivel = 1;
let EVida = 15;

//
//var jugad = new person(hola,10,0,2)


/**
 * Genera la Accion Estudiar.
 * @method Estudio
 */
function Estudio() {
    let A = 3;
    let V = EVida;
    if (JE > 0) {
        V -= A;
        if (V <= 0) {
            alert("Ganaste, sigue en el camino de conocimiento");
            XP += 20;
        } else {
            EVida -= A;
            JE -= 1;
            alert("Ataca el enemigo");
            AtaqueE();


        }
    } else {
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
    JD = 0;
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
    let A = 4;
    A -= JD;
    JVida -= A;

    if (JVida <= 0) {
        alert("Perdiste, intentalo nuevamente");
        window.open("index.html", "_self");
    }
}

function dibujarExp() {
    var canvas = document.getElementById("canvas_nivel");
    var ctx = canvas.getContext("2d");


    var estrella = new Image();
    estrella.src = "imagenes/Estrella.webp";
    var Player = new Image();
    Player.src = "imagenes/PLEXP.png";


    ctx.beginPath()
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo(5, 20);
    ctx.lineTo(XP + 10, 20);
    ctx.stroke();

    ctx.closePath();

    ctx.beginPath();
    Player.onload = function () {
        ctx.drawImage(Player, XP + 10, 10, 20, 20);
    }
    estrella.onload = function () {
        ctx.drawImage(estrella, 180, 10, 20, 20);
    }
    ctx.closePath();
}


/**
 * La funcion anima al canvas en el que se grafica el progreso de exp que se tiene durante el juego, y carga nivel.
 * @method Animar
 */
function AnimarJ1() {
    document.getElementById("nombre1").innerHTML = Nombre;
    setInterval(dibujarExp, 200);
    document.getElementById("N").innerHTML += Nivel;


}

function AnimarJ2() {
    setInterval(J2, 200);
}

function J2() {
    document.getElementById("VidaJ").innerHTML = JVida;
    document.getElementById("VidaE").innerHTML = EVida;
    document.getElementById("DefJ").innerHTML = JD;
    document.getElementById("ENJ").innerHTML = JE;
    document.getElementById("nombre1").innerHTML = Nombre;


}


/*no se usa
function person(NOM, VI, DEF, EN) {
    this.NOM = NOM;
    this.VI = VI;
    this.DEF = DEF;
    this.EN = EN;
}

*/


