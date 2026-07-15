// EXEMPLO 1
let aluno = {
    nome: "Igor",
    matricula: 282867,
};

for(let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`)
};


// EXEMPLO 2
let carros = [
    {marca: "Fiat", modelo: "500"},
    {marca: "Mercedes", modelo: "C300"},
    {marca: "Citroen", modelo: "C4"}
]

carros.forEach(function(carro) {
    console.log(`Marca: ${carro.marca} - Modelo: ${carro.modelo}`)
})


// EXEMPLO 3
let livro = {
    titulo: "Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    pagina: 96
}