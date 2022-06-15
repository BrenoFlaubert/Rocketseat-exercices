/* ### Buscando e contato dados em arrays

    Baseado no array de livros por categoria abaixo, faça os seguintes
    desafios

    Contar o numero de categorias e o numero de livros em cada
    categoria
    contar o numero de autores
    mostrar livros do autor Auguto Cury
    Transformar a função acima em uma função que ira receber o nome
    do autor e devolver os livros desse autor

*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: 'George S. Clason',
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: 'Inteligencia Emocional',
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade -- Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 Hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    },
];

const totalByCategories = booksByCategory.length
console.log(totalByCategories)

for(let categories in booksByCategory){
    console.log('Total de livros da categoria', categories.category)
    console.log(categories.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors();


function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                authors.push(book.author)
            }
        }
    }
    console.log("Livros do Author", books)
}
booksOfAugustoCury()


function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                authors.push(book.author)
            }
        }
    }
    console.log(`Livros do ${author}: ${books.join(", ")}`)
}
booksOfAuthor()