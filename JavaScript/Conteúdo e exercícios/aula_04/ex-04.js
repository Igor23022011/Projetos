let filmes = [
    {titulo: "Pantera Negra", ano: 2018, genero: "ação"},
    {titulo: "Carros 3", ano: 2018, genero: "animação"},
    {titulo: "Toy Story 5", ano: 2026, genero: "animação"}
];

filmes.forEach (function (filme){
    console.log(`${filme.titulo} - ${filme.ano} - ${filme.genero}`)
})