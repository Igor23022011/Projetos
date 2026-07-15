let amigos = [
    {nome: "Fulano(a)", idade: 12},
    {nome: "Sicrano(a)", idade: 10},
    {nome: "Beltrano(a)", idade: 13},
    {nome: "Marciano(a)", idade: 14},
]

amigos.forEach(function(amigo){
    console.log(`Nome: ${amigo.nome} - Idade: ${amigo.idade} anos`)
});