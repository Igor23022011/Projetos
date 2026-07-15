let produtos = [
    {nome: "TV", preco: 1999.99, categoria: "Eletrodoméstico"},
    {nome: "Geladeira", preco: 3900.00, categoria: "Branca"},
    {nome: "PS5", preco: 3500.00, categoria: "Videogame"},
    {nome: "Varal", preco: 300.00, categoria: "Casa"},
    {nome: "Forno", preco: 590.00, categoria: "Branca"}
]

let total = 0;

produtos.forEach(function(produto){
    console.log(`Nome: ${produto.nome} - Preço: R$${produto.preco}`)
    total = total + produto.preco;
})

console.log(`Valor total é R$${total}`)