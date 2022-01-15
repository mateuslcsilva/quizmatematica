const nnn = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const nnn1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const op = ['x', '+', '-']
var res = []
var perg = document.querySelector('#perg')
var btn = document.querySelector('#btn')
btn.addEventListener('click', clicar)
var a = []
var div = document.querySelector('#div1')
var respostas = document.querySelector('#respostas')
var total = 0
var acertos = 0
var t = 5

document.addEventListener('keydown', function (e) {
    e.key == 'Escape' ? window.location.href = 'index3.html' : {}
    e.key === 'Enter' ? btn.click() : {}
    e.key == 'Shift' ? window.location.href = 'index.html' : {}
    if (t >= 0) {
        e.key === 'Backspace' ? document.querySelector('#resp').innerText = '' : {}
        e.key === '1' ? document.querySelector('#resp').innerText += 1 : {}
        e.key === '2' ? document.querySelector('#resp').innerText += 2 : {}
        e.key === '3' ? document.querySelector('#resp').innerText += 3 : {}
        e.key === '4' ? document.querySelector('#resp').innerText += 4 : {}
        e.key === '5' ? document.querySelector('#resp').innerText += 5 : {}
        e.key === '6' ? document.querySelector('#resp').innerText += 6 : {}
        e.key === '7' ? document.querySelector('#resp').innerText += 7 : {}
        e.key === '8' ? document.querySelector('#resp').innerText += 8 : {}
        e.key === '9' ? document.querySelector('#resp').innerText += 9 : {}
        e.key === '0' ? document.querySelector('#resp').innerText += 0 : {}
        e.key == '-' ? document.querySelector('#resp').innerText += '-' : {}
    }
}
)
btn.style.backgroundColor = 'white'
var op0 = Math.floor(Math.random() * op.length)
var n1 = nnn[Math.floor(Math.random() * nnn.length)]
var n2 = nnn1[Math.floor(Math.random() * nnn1.length)]
var n3 = nnn[Math.floor(Math.random() * nnn.length)]
var n4 = nnn1[Math.floor(Math.random() * nnn1.length)]
var num1 = Number(n1 + n2)
var num2 = Number(n3 + n4)
var op1 = op[op0].toString()
perg.innerHTML = num1 + op1 + num2
a.push(op0, num1, num2, op1)

setInterval(
    function start() {
        if (t > 0) {
            t--
        }
        else {
            var res3 = ''
            for (i = 0; i < res.length; i++) {
                res3 += res[i] + '<br>'
            }
            t = `ACABOU!!!<br> SCORE:<br> ${acertos}/${total} <br> ${res3}<br><br> <kbd>Esc</kbd> PARA RECOMEÇAR. <br><br>Você pode voltar ao quiz padrão apertando <strong>SHIFT</strong> novamente.`
            respostas.style.top = '20px'
            respostas.style.textAlign = 'center'
            total >= 15 ? div.style.height = '800px' : {}
            total > 20 ? div.style.height = '900px' : {}
            total > 25 ? div.style.height = '1000px' : {}
        }
        respostas.innerHTML = t
    }, 1000
)

function clicar() {
    if (t >= 0) {
        if (document.querySelector('#resp').innerText.length > 0) {
            btn.style.backgroundColor = 'white'
            var r = document.querySelector('#resp').innerText
            var resp = Number(r)

            switch (a[0]) {
                case 0:
                    var res1 = a[1] * a[2]
                    break

                case 1:
                    var res1 = a[1] + a[2]
                    break

                case 2:
                    var res1 = a[1] - a[2]
                    break
            }

            if (resp == res1) {
                var res2 = String(a[1] + a[3] + a[2] + '=' + resp + `✔️`)
                total++
                acertos++
            } else {
                var res2 = String(a[1] + a[3] + a[2] + '=' + resp + `❌`)
                total++
            }
            res.push(res2)
            a = []
        }
        btn.style.backgroundColor = 'white'
        var op0 = Math.floor(Math.random() * op.length)
        var n1 = nnn[Math.floor(Math.random() * nnn.length)]
        var n2 = nnn1[Math.floor(Math.random() * nnn1.length)]
        var n3 = nnn[Math.floor(Math.random() * nnn.length)]
        var n4 = nnn1[Math.floor(Math.random() * nnn1.length)]
        var num1 = Number(n1 + n2)
        var num2 = Number(n3 + n4)
        var op1 = op[op0].toString()
        perg.innerHTML = num1 + op1 + num2
        a.push(op0, num1, num2, op1)
        document.querySelector('#resp').innerHTML = ''
    }
}