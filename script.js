
        const nnn = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]
        const nnn1 = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]
        const op = ['x' , '+' , '-']
        var res = []
        var perg = document.querySelector('#perg')
        var btn = document.querySelector('#btn')
        btn.addEventListener('click', clicar) 
        btn.addEventListener('mouseout', mouseo1)
        var btn2 = document.querySelector('#btn2')
        btn2.addEventListener('click', clicar2)
        btn2.addEventListener('mouseout', mouseo2)
        btn2.addEventListener('click', ClearFields )
        var a = []
        var div = document.querySelector('#div1')
        var respostas = document.querySelector('#respostas')
        var total = 0
        var acertos = 0
        var t = 30

        document.addEventListener('keydown', function(e){

                if (e.key === 'Enter'){
                    var btnigual2 = document.querySelector('#btn2')
                    btnigual2.click()
                }
                if (e.key === '+'){
                    var btnigual2 = document.querySelector('#btn')
                    btnigual2.click()
                }
                if (e.key === '1'){
                    document.querySelector('#resp').value += 1
                }
                if (e.key === '2'){
                    document.querySelector('#resp').value += 2
                }
                if (e.key === '3'){
                    document.querySelector('#resp').value += 3
                }
                if (e.key === '4'){
                    document.querySelector('#resp').value += 4
                }

                if (e.key === '5'){
                    document.querySelector('#resp').value += 5
                }
                if (e.key === '6'){
                    document.querySelector('#resp').value += 6
                }
                if (e.key === '7'){
                    document.querySelector('#resp').value += 7
                }
                if (e.key === '8'){
                    document.querySelector('#resp').value += 8
                }
                if (e.key === '9'){
                    document.querySelector('#resp').value += 9
                }
                if (e.key === '0'){
                    document.querySelector('#resp').value += 0
                }
                if (e.key == '-'){
                    document.querySelector('#resp').value += '-'
                }
            }
        )

        
        setInterval(

            function start(){
                if (t>0){
                    t--
                }
                else{
                    div.removeChild(btn)
                    div.removeChild(btn2)
                    div.removeChild(perg)
                    div.removeChild(resp)
                    t = `ACABOU!!!<br> SCORE:<br> ${acertos}/${total} <br> ${res}<br><br> <kbd>F5</kbd> PARA RECOMEÇAR.`
                    respostas.style.top = '20px'
                                      
                }
                respostas.innerHTML = t
            }, 1000
        )
        
                function clicar(){
                    btn.style.backgroundColor = 'white'
                    var n1 = nnn[Math.floor(Math.random() * nnn.length).toString()]
                    var n2 = nnn1[Math.floor(Math.random() * nnn1.length).toString()]
                    var n3 = nnn[Math.floor(Math.random() * nnn.length).toString()]
                    var n4 = nnn1[Math.floor(Math.random() * nnn1.length).toString()]
                    var num1 = Number(n1+n2)
                    var num2 = Number(n3+n4)
                    var op0 = Math.floor(Math.random() * op.length)
                    var op1 = op[op0].toString()
                    perg.innerHTML = num1+op1+num2
                    a.push(op0, num1, num2, op1)
                }

                    function mouseo1(){
                        btn.style.backgroundColor = '#763cc7af'
                    }

                    function ClearFields() {
                    document.getElementById("resp").value = "";
                    }
                    
                    function clicar2(){
                    btn2.style.backgroundColor = 'white'
                    var r = document.querySelector('#resp')
                    var resp = Number(r.value)
                    
                    switch (a[0]){
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
    
                        if (resp == res1){
                            var res2 = String(`<br>`+a[1]+a[3]+a[2]+'='+resp+`✔️`)
                            total++
                            acertos++
                        } else{
                            var res2 = String(`<br>`+a[1]+a[3]+a[2]+'='+resp+`❌`)
                            total++
                        }
                    res.push(res2)
                    a = []  
                    }

                    function mouseo2(){
                        btn2.style.backgroundColor = '#763cc7af'
                    }