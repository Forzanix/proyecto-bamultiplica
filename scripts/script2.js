function validarFormulario() {
    /* validación del formulario */
    /* primero, obtenemos los datos del formulario */
    let nombreyApellido = document.getElementById('input-nombre-y-apellido').value;
    let radiomujer = document.getElementById('radio-mujer').checked;
    let radiohombre = document.getElementById('radio-hombre').checked;
    let radiootro = document.getElementById('radio-otro').checked;
    let correo = document.getElementById('input-correo').value;
    let numero = document.getElementById('input-numero-de-telefono').value;

    /* después, creamos una variable y le asignamos un condicional (esto es opcional y se puede hacer
    directamente desde el propio if). Yo lo hice de esta manera porque es más cómodo para mi. */
    let esValidoElNombre = (nombreyApellido.length > 8 && nombreyApellido.includes(' '));
    /* para que el nombre y apellido sea válido, debe tener más de 8 caracteres e incluir al menos un espacio. */
    let esValidoElSexo = (radiomujer || radiohombre || radiootro);
    /* para que el sexo sea válido, alguno de estos radio deben estar checkeados.*/
    let esValidoElCorreo = (correo.length > 8 && correo.includes('@') && correo.includes('.'));
    /* para que el correo sea válido, este debe tener más de 8 caracteres, incluir arroba (@) y punto. */
    let esValidoElNumero = (numero.startsWith('+') == true && numero.length > 10);
    /* para que el número de teléfono sea válido, este debe incluir + (codigo de país) y tener más de 10 caracteres. */
    
    /* ahora cuando un valor es falso, se lo hacemos saber marcando el input con un fondo rojo claro y una leyenda */
    if (esValidoElNombre == false) {
        document.getElementById('input-nombre-y-apellido').style.background = 'coral'
        document.getElementById('estado-nombre-y-apellido').textContent = 'El nombre y apellido es inválido. Asegurate de poner el apellido separado con un espacio.';
    } else {
        document.getElementById('input-nombre-y-apellido').style = '';
        document.getElementById('estado-nombre-y-apellido').textContent = '';
    }

    if (esValidoElSexo == false)
        document.getElementById('estado-sexo').textContent = 'Debés seleccionar un sexo.'
    else 
        document.getElementById('estado-sexo').textContent = ''

    if (esValidoElCorreo == false) {
        document.getElementById('input-correo').style.background = 'coral';
        document.getElementById('estado-correo').textContent = 'El correo no es válido. El correo debe tener más de 8 caracteres e incluir al menos un espacio';
    } else {
        document.getElementById('input-correo').style = '';
        document.getElementById('estado-correo').textContent = '';
    }
    if (esValidoElNumero == false) {
        document.getElementById('input-numero-de-telefono').style.background = 'coral';
        document.getElementById('estado-numero-de-telefono').textContent = 'El correo no es válido. El correo debe tener más de 8 caracteres e incluir al menos un espacio';
    } else {
        document.getElementById('input-numero-de-telefono').style = '';
        document.getElementById('estado-numero-de-telefono').textContent = '';
    }
}