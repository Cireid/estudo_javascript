let comidas = [
    {
        id: 1,
        img: '/img/cuscuz.jfif',
        nome: 'cuscuz',
        preco: 3.10,
        tipo: ['café', 'almoço', 'jantar'],
        desc: 'alguma coisa do produto'
    },

    {
        id: 2,
        img: '/img/ovo.jfif',
        nome: 'ovo',
        tipo: ['café', 'jantar'],
        preco: 0.50,
        desc: 'alguma coisa do produto'
    },

    {
        id: 3,
        img: '/img/torradas.jfif',
        nome: 'torradas',
        tipo: ['café'],
        preco: 1.10,
        desc: 'alguma coisa do produto'
    },

    {
        id: 4,
        img: '/img/feijao.jfif',
        nome: 'feijão',
        preco: 43.10,
        tipo: ['almoço'],
        desc: 'alguma coisa do produto'
    },
    {
        id: 5,
        img: '/img/pudim.jfif',
        nome: 'pudim',
        preco: 13.10,
        tipo: ['sobremesa'],
        desc: 'alguma coisa do produto'
    },
];

const menu = document.querySelector('.menu')
const botao = document.querySelector('.areaBotao')


window.addEventListener('DOMContentLoaded', function(){
    mostrarItems(comidas);
    mostrarBotoesMenu()

})


function mostrarItems(){
    let mostrarMenu = comidas.map(function(item){
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

function mostrarBotoesMenu(){
    const categorias = comidas.reduce(function (valores, item) {
        console.log(item)
            if(!valores.includes(item.tipo)){
                valores.push(item.tipo)
                console.log(valores)
            }
            return valores
        }
        ['all']
    );

    const categoriaBTN = categorias.map(
        function(tipo){
            return `<button type="button" class="filtro" data-id="${tipo}>${tipo}</button>`
        }
    ).join("")

    botao.innerHTML = categoriaBTN;
    const filterBTN = botao.querySelectorAll('.filtro')
    console.log(filterBTN)

    filterBTN.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCat = comidas.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem
                }
            });
            if(category === 'all'){
                mostrarMenu(comidas)
                return;
            }
            mostrarMenu(menuCat)
        })
    })
}

    
//     filtro.forEach(function(btn){
//         filtro.addEventListener('click', function(e){
//             const categoria = e.currentTarget.dataset.id;
        
//             const menuCat = comidas.filter(function(item){
//                 if(item.tipo === categoria){
//                     return menuCat
//                 }
//             })
//             if(categoria === 'todos'){
//                 mostrarMenu(comidas)
//                 return;
//             }
//             mostrarMenu(menuCat)
        
//         })
//     })




// console.log(filtro)







//Motivo de não ter dado certo é por falta de map não tem como declarar variavel dentro de um foreach pra
//consumis os dados corretamente

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


