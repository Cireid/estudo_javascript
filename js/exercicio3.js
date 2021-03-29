function transformarTemperatura(grau){
    const celciusExiste = grau.toUpperCase().includes('C')
    const fahrenheitExiste = grau.toUpperCase().includes('F')

    if(!celciusExiste && !fahrenheitExiste){
        throw new Error('Grau não identificado')
    }

    let grauNovo = Number(grau.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let sinalGrau = 'C'


    return formula(grauNovo) + sinalGrau


}

try{

    console.log(transformarTemperatura('50F'))

} catch(error) {
    console.log(error)
}
