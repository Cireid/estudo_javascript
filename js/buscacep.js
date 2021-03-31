


function limpa_form(){
    document.getElementById('cep').value=('');
    document.getElementById('rua').value=('');
    document.getElementById('bairro').value=('');
    document.getElementById('cidade').value=('');
    document.getElementById('uf').value=('');
}

function chamar(conteudo){
    if(!("error" in conteudo)){
        document.getElementById('cep').value=(conteudo.cep);
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        return;
    }
    limpa_form();
    alert("cep não encontrado")
}

function pesquisa(valor){
    var cep = valor.replace(/\D/g, '')

    if(cep != ""){
        var cepvalido = /^[0-9]{8}/

        if(cepvalido.test(cep)){
            document.getElementById('cep').value='...';
            document.getElementById('rua').value='...';
            document.getElementById('bairro').value='...';
            document.getElementById('cidade').value='...';
            document.getElementById('uf').value='...';

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=chamar';

            document.body.appendChild(script);
            return;
        }
        limpa_form();
        alert('cep invalido');
    }
    limpa_form();
}






