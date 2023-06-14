function iniciarSesion() {
    /* validación del formulario */
    /* primero, obtenemos los datos del formulario */
    let usuario = document.getElementById('input-usuario').value;
    let clave = document.getElementById('input-clave').value;
    let esUsuarioValido = (usuario == 'admin'); /* devuelve true cuando el usuario es admin */
    let esClaveValida = (clave == '1234'); /* devuelve true cuando la contraseña es 1234 */

    if (esUsuarioValido && esClaveValida) { /* si el usuario y contraseña son correctos, entonces... */
        alert('Bienvenido al campus'); /* muestra una alerta dando la bienvenida */
        window.location.assign('../pages/campus.html'); /* redirige al campus */
    } else {
        if (usuario.length == 0 && clave.length == 0) {
            document.getElementById('estado').textContent = 'Por favor, escribe un nombre de usuario y una contraseña.';           
        } else if (usuario.length == 0) {
            document.getElementById('estado').textContent = 'Por favor, escribe un nombre de usuario.';
        } else if (clave.length == 0) {
            document.getElementById('estado').textContent = 'Por favor, escribe una contraseña.';
        } else {
            document.getElementById('estado').textContent = 'El usuario y contraseña especificado está mal.';
        }
        document.getElementById('estado').textContent +=  ' El usuario es "admin" y la contraseña es "1234" ;)'; /* pista */
    }
}
function restablecerClave() {
    let correo = prompt('Escribe tu correo y te enviaremos un link para restablecer la contraseña asociada a ese correo.');
    if (correo != null) {
        if (correo.length == 0)
            alert('No escribiste ningún correo.');
        else if (correo.includes('@') && correo.includes('.') && correo.length > 8)
            alert('El correo de recuperación de la contraseña ha sido enviado.');
        else
            alert('El correo especificado no es válido. No se enviara el enlace para restablecer la contraseña.');
    } else {
        alert('Se canceló el restablecimiento de contraseña.');
    }
}