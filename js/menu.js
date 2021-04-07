let comidas = [
    {
        id: 1,
        img: '/img/cuscuz.jfif',
        nome: 'cuscuz',
        preco: 3.10,
        tipo: 'cafe',
        desc: 'alguma coisa do produto'
    },

    {
        id: 2,
        img: '/img/ovo.jfif',
        nome: 'ovo',
        tipo: 'cafe',
        preco: 0.50,
        desc: 'alguma coisa do produto'
    },

    {
        id: 3,
        img: '/img/torradas.jfif',
        nome: 'torradas',
        tipo: 'cafe',
        preco: 1.10,
        desc: 'alguma coisa do produto'
    },

    {
        id: 4,
        img: '/img/feijao.jfif',
        nome: 'feijão',
        preco: 43.10,
        tipo: 'almoco',
        desc: 'alguma coisa do produto'
    },
    {
        id: 5,
        img: '/img/pudim.jfif',
        nome: 'pudim',
        preco: 13.10,
        tipo: 'sobremesa',
        desc: 'alguma coisa do produto'
    },
];

const menu = document.querySelector('.menu')

const areaBotao = document.querySelector('.areaBotao')


window.addEventListener('DOMContentLoaded', function(){
    mostrarItems(comidas);
    mostrarBotao();
})

function mostrarItems(itemComidas){
    let mostrarMenu = itemComidas.map(function(item){
        return `
        <div class="col-6 my-2">
            <div class="row">
                <div class="col-3">
                    <img id="img" src=${item.img} style="width: 120px; height: 80px;">
                </div>
                <div class="col-5">
                    <div class="d-flex justify-content-between">
                        <p id="nome">${item.nome}</p>
                        <p id="preco">${item.preco}</p>
                    </div>
                    <div>
                        <p id="desc">${item.desc}</p>
                    </div>
                </div>
            </div>
        </div>`
    })
    mostrarMenu = mostrarMenu.join("");
    menu.innerHTML = mostrarMenu
}


function mostrarBotao(){
    const categorias = comidas.reduce(function(valores, item){
        if(!valores.includes(item.tipo)){
            valores.push(item.tipo)
        };
        return valores;
    }, ['todos']);

    const botaoCategoria = categorias.map(function(tipo){
        return `<button class="filtro-btn mx-2" type="button" data-id="${tipo}">${tipo}</button>`
    }).join("");

    areaBotao.innerHTML = botaoCategoria;
    const filtro = document.querySelectorAll('.filtro-btn');

    filtro.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const categoria = e.currentTarget.dataset.id;
            const menuCategoria = comidas.filter(function(itemMenu){
                if(itemMenu.tipo === categoria){
                    return itemMenu;
                };
            });
            if(categoria === 'todos'){
                mostrarItems(comidas)
                return;
            };
            mostrarItems(menuCategoria);
        });
    });
}


//Motivo de não ter dado certo é por falta de map não tem como declarar variavel dentro de um foreach pra
//consumir os dados corretamente

// window.addEventListener('DOMContentLoaded', function() {
//     comidas.forEach(item => {
//         return `
//         <div class="col-6">
//             <div class="row">
//                 <div class="col-3">
//                     <img id="img" src=${item.img} style="width: 120px; height: 80px;">
//                 </div>
//                 <div class="col-5">
//                     <div class="d-flex justify-content-between">
//                         <p id="nome">${item.nome}</p>
//                         <p id="preco">${item.preco}</p>
//                     </div>
//                     <div>
//                         <p id="desc">${item.desc}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//     });
//     mostrarMenu = mostrarMenu.join();

//     menu.innerHTML = mostrarMenu

// })


