/* form */
let formu = document.getElementById('formulario');
let datos = []
const form = (e) => {
    e.preventDefault()
    let info = {
        name: formu.name.value,
        email: formu.email.value,
        password: formu.password.value,
        textarea: formu.textarea.value,
    }

    datos.push (info);
    console.log(datos);

    let datosJSON = JSON.stringify(datos);
localStorage.setItem('formularioData', datosJSON);
}

formulario.onsubmit = form;