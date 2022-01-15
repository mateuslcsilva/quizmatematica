var btn = document.querySelector('#btn')
btn.addEventListener('click', clicar)

function clicar() {
    window.location.href = 'indexfacil2.html'
}

document.addEventListener('keydown', function (e) {
    e.key === 'Enter' ? btn.click() : {}
    e.key == 'Shift' ? window.location.href = 'index.html' : {}
})