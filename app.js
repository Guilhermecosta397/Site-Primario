// Dados fictícios de notícias sobre futebol
const newsData = [
    { title: "Seleção Brasileira vence amistoso contra Argentina", content: "A seleção brasileira conseguiu uma vitória importante em um amistoso contra a Argentina. O jogo terminou 2-1, com gols de Neymar e Vinícius Júnior." },
    { title: "Flamengo conquista a Libertadores", content: "O Flamengo conquistou a sua terceira Copa Libertadores, derrotando o River Plate por 3-1 em uma final emocionante." },
    { title: "Cristiano Ronaldo se despede do Manchester United", content: "Cristiano Ronaldo anunciou sua despedida do Manchester United, deixando um legado imenso no clube inglês." },
    { title: "Messi brilha e leva o PSG à vitória", content: "Lionel Messi mais uma vez foi o destaque do PSG, marcando dois gols e levando o time à vitória contra o Lyon." },
    { title: "Jogadores de futebol se unem para combater o racismo", content: "Vários jogadores de futebol do mundo inteiro se reuniram em uma campanha contra o racismo, promovendo a inclusão no esporte." },
    { title: "Copa do Mundo 2026 será realizada no México, EUA e Canadá", content: "O Comitê Organizador anunciou que a próxima Copa do Mundo será realizada em três países: México, Estados Unidos e Canadá." }
];

let currentNewsIndex = 0;


function loadNews() {
    const newsList = document.getElementById('news-list');

    
    for (let i = currentNewsIndex; i < currentNewsIndex + 3; i++) {
        if (i >= newsData.length) {
            document.getElementById('load-more').disabled = true; // Desabilitar o botão quando não houver mais notícias
            break;
        }

        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const title = document.createElement('h3');
        title.textContent = newsData[i].title;
        newsItem.appendChild(title);

        const content = document.createElement('p');
        content.textContent = newsData[i].content;
        newsItem.appendChild(content);

        newsList.appendChild(newsItem);
    }

    currentNewsIndex += 3;
}


loadNews();

document.getElementById('load-more').addEventListener('click', loadNews);
