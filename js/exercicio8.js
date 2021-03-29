mostrarTexto = () => {
    document.getElementById('exibir').innerText = document.getElementById('cpf').value

} 

function mascararCpf(){
    let cpf = document.getElementById('cpf')
    cpf.value = setMask(cpf.value)
}

function setMask(cpf){
    cpf = cpf.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    return cpf
}

