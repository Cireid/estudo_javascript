let familia = {
    receita: [50, 100, 150],
    despesas: [50, 100, 100],
}

function soma(array){

    let total = 0

    for(let valor of array){
        total += valor
    }

    return total
}

function calcularBalanço(){
    const calcularReceita = soma(familia.receita)
    const calcularDespesas = soma(familia.despesas)

    const total = calcularReceita - calcularDespesas

    const tudoCerto = total >= 0

    let message = "negativo"

    if(tudoCerto){
        message = "positivo"
    }

    console.log(`Seu saldo é ${message}: ${total}`)
}

calcularBalanço()