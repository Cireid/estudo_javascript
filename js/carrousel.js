var preview = [
    {
        id: 1,
        nome: 'Gabriel',
        empre: 'Desenvolvedor',
        img: '/img/800x600.png',
        texto: 'Isso é o teste dos testes ihu hahahahaha'
    },

    {
        id: 2,
        nome: 'Dieric',
        empre: 'Desenvolvedor',
        img: '/img/img2.jpg',
        texto: 'Isso é o teste dos testes ihu hahahahaha'
    },

    {
        id: 3,
        nome: 'Gomes',
        empre: 'Desenvolvedor',
        img: '/img/img1.jpg',
        texto: 'Isso é o teste dos testes ihu hahahahaha'
    },

    {
        id: 4,
        nome: 'Cardoso',
        empre: 'Desenvolvedor',
        img: '/img/800x600.png',
        texto: 'Isso é o teste dos testes ihu hahahahaha'
    },
];

const img = document.getElementById('img');
const nome = document.getElementById('nome');
const empre = document.getElementById('empre');
const texto = document.getElementById('texto');

const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const random = document.getElementById('aleatorio')

let itemAtual = 0;

window.addEventListener('DOMContentLoaded', function() {
    mostarPessoa();
})


function mostarPessoa(){
    const item = preview[itemAtual]
    img.src = item.img;
    nome.textContent = item.nome;
    empre.textContent = item.empre;
    texto.textContent = item.texto;
}

proximo.addEventListener('click', function() {
    itemAtual++
    if(itemAtual > preview.length - 1){
        itemAtual = 0;
    }
    mostarPessoa(itemAtual)
})

anterior.addEventListener('click', function() {
    itemAtual--
    if(itemAtual < 0){
        itemAtual = preview.length - 1
    }
    mostarPessoa(itemAtual)
})

random.addEventListener('click', function() {
    itemAtual = Math.floor(Math.random() * preview.length)
    mostarPessoa(itemAtual)
})
