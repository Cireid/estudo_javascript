function notaFinal(pontos){
    notaA = pontos >= 90 && pontos <= 100;
    notaB = pontos >= 80 && pontos <= 89;
    notaC = pontos >= 70 && pontos <=79;
    notaD = pontos >= 60 && pontos <=69;
    notaF = pontos <= 60 && pontos >=0;

    let pontoFinal;

    if (notaA){
        pontoFinal = 'A'
    }
    else if(notaB){
        pontoFinal = 'B'
    }
    else if(notaC){
        pontoFinal = 'C'
    }
    else if(notaD){
        pontoFinal = 'D'
    }
    
    else if(notaF){
        pontoFinal = 'F'
    }
    
    else{
        pontoFinal = 'Nota Invalida'
    }

    return pontoFinal
}

console.log(notaFinal(50))
console.log(notaFinal(75))
console.log(notaFinal(101))
console.log(notaFinal(82))
console.log(notaFinal(-30))
console.log(notaFinal(25))
