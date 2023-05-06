let atualizar;
var btn_start = document.getElementById('btn-start')
let h1 = document.getElementById('temporizador')

btn_start.addEventListener('click', ler_Input)

function ler_Input(){
    let horas = Number(document.getElementById('horas').value)
    let minutos = Number(document.getElementById('minutos').value)
    let segundos = Number(document.getElementById('segundos').value)
    
    if(segundos > 59 || segundos < 0){alert('Insira um valor válido')}
    else if(minutos > 59 || minutos < 0){alert('Insira um valor válido')}
    else if(horas < 0){alert('Insira um valor válido')}
    else if(minutos === 0 && horas === 0 && segundos === 0){alert('Insira um valor válido')}
    else {   btn_start.disabled = true, 
             btn_start.removeEventListener('click', ler_Input)
             btn_start.addEventListener('click', continuar)
             btn_start.innerText = `Continuar`
             start_temporizador(horas,minutos,segundos)
              }

}
    
function start_temporizador(horas,minutos,segundos){

    atualizar = setInterval(inicio,1000)

            function inicio(){

                if(horas != 0 && minutos == 0 && segundos == 0){
                    horas--
                    minutos = 59
                    segundos = 59
                } else if (horas != 0 && minutos != 0 && segundos != 0){
                    segundos--
                } else if (horas != 0 && minutos != 0 && segundos == 0){
                    minutos--
                    segundos = 59
                } else if (horas != 0 && minutos == 0 && segundos != 0){
                    minutos = 0
                    segundos--
                } else if (horas == 0 && minutos != 0 && segundos != 0){
                    segundos--
                } else if (horas == 0 && minutos != 0 && segundos == 0){
                    minutos--
                    segundos = 59
                } else if (horas == 0 && minutos == 0 && segundos != 0){
                    segundos--
                } else{
                    fim()
                }

                h1.innerHTML = `<span class="resp_horas">${verificaZero(horas)}</span> :
                                    <span class="resp_minutos">${verificaZero(minutos)}</span> :
                                    <span class="resp_segundos">${verificaZero(segundos)}</span>`     
                    }

}

function parar(){
    clearInterval(atualizar)
    btn_start.disabled = false
}

function continuar(){
    btn_start.disabled = true
    let horas = Number(document.querySelector('span.resp_horas').textContent)
    let minutos = Number(document.querySelector('span.resp_minutos').textContent)
    let segundos = Number(document.querySelector('span.resp_segundos').textContent)

    start_temporizador(horas,minutos,segundos)
}

function redefinir(){
    location.reload(true)
}

function fim(){
    clearInterval(atualizar)
    alert('Acabou o tempo')
    redefinir()
}

function verificaZero(x){
    if(x < 10){ x = '0' + x}
    return x
}