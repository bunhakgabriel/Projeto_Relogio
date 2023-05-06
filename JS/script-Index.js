//inicio relógio

function zeroEsquerda(x){
    if(x < 10) {x = '0' + x} 
    return x
}

function relogio(){

    const resp = document.querySelector('h1')
    const data = new Date()

    const hora = zeroEsquerda(data.getHours())
    const minutos = zeroEsquerda(data.getMinutes())
    const segundos = zeroEsquerda(data.getSeconds())
 
    resp.innerHTML = `${hora} : ${minutos} : ${segundos}`

}

setInterval(relogio, 1000)

//fim relógio

//inicio data

function date(){

        let data = new Date()
        
        const diaSemana = encontreDiaSemana(data.getDay())    
        const mes = encontreMes(data.getMonth())         
        const diaMes = data.getDate()
        const ano = data.getFullYear()

        const h3 = document.querySelector('section#relogio h3')
        h3.innerText = `${diaSemana}, ${diaMes} de ${mes} de ${ano} `

    }        

    setInterval(date, 1000)

    function encontreDiaSemana(x){
        let diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado']
        return diaSemana[x]
    }    

    function encontreMes(y){
        let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        return mes[y]
    }

//fim data



