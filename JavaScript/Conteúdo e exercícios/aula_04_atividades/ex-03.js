let pessoa = {
    nome: "Igor",
    idade: 15,
    altura: 1.76,
    estudante: true,
}

for(let chave in pessoa){
    console.log(`${chave} - ${pessoa[chave]}`)
}