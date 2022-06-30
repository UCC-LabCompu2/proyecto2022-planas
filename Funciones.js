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

/*
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
            JE-=1;
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
    let A=4;
    A-=JD;
    JVida-=A;
    if (JVida <= 0) {
        alert("Perdiste, intentalo nuevamente");
        window.open("index.html", "_self");
    }
}

function dibujarExp(){
    var canvas = document.getElementById("canvas_nivel");
    var ctx = canvas.getContext("2d");


    var estrella = new Image();
    estrella.src = "imagenes/Estrella.webp";
    var Player = new Image();
    player.src = "imagenes/PLEXP.png";


    ctx.beginPath();
    Player.onload = function(){
        ctx.drawImage(Player,XP+10,10,15,15);
    }
    estrella.onload = function(){
        ctx.drawImage(estrella,190,10,15,15);
    }
    ctx.closePath();

    ctx.beginPath()
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(XP+100, 10);
    ctx.stroke();

    ctx.closePath();
}
/**
 * La funcion anima al canvas en el que se grafica el progreso de exp que se tiene durante el juego.
 * @method AnimarExp
 */
function Animar() {
    setInterval(dibujarExp,200);
    document.getElementById("N").innerHTML += Nivel;
    document.getElementById("VidaJ").innerHTML += JVida;


}

/**
 * Esta funcion sirve para obtener la informacion pasada a travez de la url
 * @method obtenerFormulario
 */
function obtenerName() {
    var nombre;

    nombre= window.location.href.split('#')[1];

    document.getElementById("Name").innerHTML = nombre;
}

