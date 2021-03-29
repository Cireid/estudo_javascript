let livroPorCategoria = [
    {
        categoria: "Riqueza",
        livros: [
            {
                titulo: 'Os segredos da mente milionária',
                autor: 'T. Harv Eker',
            },
            {
                titulo: 'O homem mais rico da Babilônia',
                autor: 'George S. Clason'
            },
            {
                titulo: 'Pai rico, pai pobre',
                autor: 'Robert T. kiyosaki e Sharon L. Letcher'
            },
        ],
    },

    {
        categoria: "Inteligencia Emocional",
        livros: [
            {
                titulo: 'Você é Insubstituível',
                autor: 'Augusto Cury'
            },
            {
                titulo: 'Ansiedade - Como enfrentar o mal do seculo',
                autor: 'Augusto Cury'
            },
            {
                titulo: 'Os 7 hábitos das pessoas altamente eficazes',
                autor: 'Stephen R. Covey'
            }
        ],
    },
]

// const categoriasTotal = livroPorCategoria.length

// console.log(categoriasTotal)

// for(let categoria of livroPorCategoria){
//     console.log(`Total de livros da categoria: ${categoria.categoria}`)
//     console.log(categoria.livros.length)
// }


function contarAutor(){
    let autores = [];

    for(let categoria of livroPorCategoria){
        for(let livro of categoria.livros){
            if(autores.indexOf(livro.autor == -1)){
                autores.push(livro.autor)
            }
        }
    }

    console.log('Total de autores é:' + autores.length)
}


function livrosDoAutor(autor){
    let livros = [];

    for(let categoria of livroPorCategoria){
        for(let livro of categoria.livros){
            if(livro.autor === autor) {
                livros.push(livro.titulo)
            }
        }
    }

    console.log(`Livros do Autor ${autor}: ${livros.join(", ")}`)
}


livrosDoAutor('George S. Clason');