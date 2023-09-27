

//Games

//Simulação de APi
const items = [
    {
        id: 0,
        nome: "Disney+",
        img: "",
        quantidade: 0,
        link: "",
        versao: "",
        avaliacao: 5 //0 a 10
    },
    {
        id: 1,
        nome: "Amazon",
        img: "",
        quantidede: 0,
        link: "",
        versao: "",
        avaliacao: 5 //0 a 10
    }
]

inicializarGames = () => {
    var containerProdutos = document.querySelector('#produtos');
    items.map((val)=> {
        containerProdutos.innerHTML += 
        `
            <ul class="aplicativos-descricao">
                <li>
                    <img src="`+val.img+`">
                    <p class="nome-produto">`+val.nome+`</p>
                    <a class="btn-produto" key="`+val.id+`">Adicionar</a>
                </li>
            </ul>
        `;
    })
}
inicializarGames();