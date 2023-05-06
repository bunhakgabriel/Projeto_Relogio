let horas = 0
let minutos = 0
let segundos = 0
let btn_start = document.getElementById('btn-start')
let retorno = document.getElementById('retorno')
let atualizar;

function iniciar(){ 
    atualizar = setInterval(cronometro,1000) 
}

function cronometro(){
    btn_start = btnDesligado()

    segundos++
    if(segundos === 60){
        segundos = 0
        minutos++

        if(minutos === 60){
            minutos = 0
            horas++
        }
    }

    retorno.innerText = `${verificarZero(horas)} : ${verificarZero(minutos)} : ${verificarZero(segundos)}`

}

function parar(){
    btn_start = btnLigado()
    clearInterval(atualizar)
}

function redefinir(){    
    [segundos, minutos, horas] = [0, 0, 0]

    retorno.innerText = `00 : 00 : 00`

    clearInterval(atualizar)
    btn_start = btnLigado()
    btn_start.innerText = 'Iniciar'
}

function verificarZero(x){ 
    if(x < 10){ x = '0' + x } 
    return x 
}

function btnDesligado(){
    btn_start.disabled = true
    btn_start.innerText = `Continuar`
    return btn_start
}

function btnLigado(){
    btn_start.disabled = false
    return btn_start
}

