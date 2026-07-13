let carros = [
    {marca: "Fiat", modelo: "500"},
    {marca: "Mercedes", modelo: "C300"},
    {marca: "Citroen", modelo: "C4"}
]

carros.forEach(function(carro) {
    console.log(`Marca: ${carro.marca} - Modelo: ${carro.modelo}`)
})
