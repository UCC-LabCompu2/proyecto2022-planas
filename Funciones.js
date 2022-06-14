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

