const btn = document.getElementById('btn')


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


btn.addEventListener('click', function(){
    var cpf = document.getElementById('cpf').value;

    cpf = cpf.replace(/[-'/`~!#*$@_%+=.,^&(){}[\];:"<>?\\]/g, '');
    console.log(cpf)
})