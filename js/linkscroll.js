botoes = document.querySelectorAll('.nav-link')
s1 = document.getElementById('s1')
s2 = document.getElementById('s2')

botoes.forEach(function(botao){
    botao.addEventListener('click', function(e){
        e.preventDefault();
        const classe = e.currentTarget.classList;

        if(classe.contains('s1')){
            s1.scrollIntoView();
        }
        if(classe.contains('s2')){
            s2.scrollIntoView();
        }
    })
})
