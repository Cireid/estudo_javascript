let botao = document.getElementById('botao')


botao.addEventListener("click", function(){
    const name = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    alert(`Saudações ${name} ${sobrenome}`)
    console.log(`O nome é: ${name}`)
    console.log(`O tamanho do nome é: ${name.length}`)
})



