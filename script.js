var btn = document.querySelector('#btn')
btn.addEventListener('click', clicar)

function clicar() {
    window.location.href = 'index2.html'
}

document.addEventListener('keydown', function (e) {
    e.key === 'Enter' ? btn.click() : {}
})