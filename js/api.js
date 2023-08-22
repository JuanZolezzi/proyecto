/* Api */
function mostrar() {
    fetch('../api.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(cliente => {
                imprimir(cliente)
            })

        })
}

let cajacomentarios = document.getElementById('cajacomentarios')

function imprimir(cliente) {
    let subcaja = document.createElement('div')
    subcaja.setAttribute('class', 'comment-box')
    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'Name')
    let p = document.createElement('p')

    h2.textContent = cliente.user;
    p.textContent = cliente.comment;

    subcaja.append(h2)
    subcaja.append(p)

    cajacomentarios.append(subcaja)


}

mostrar()