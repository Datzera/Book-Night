function gerarBibliotecaFicticia() {
    const nomesFicticios = [
        "A Jornada do Herói", "O Segredo dos Oceanos", "O Código do Tempo",
        "Mistérios da Floresta", "Histórias do Amanhã", "Entre Estrelas e Planetas",
        "Sombras na Lua", "Os Guardiões do Universo", "Segredos do Castelo Antigo",
        "A Última Fronteira", "Caminho das Pedras", "O Enigma da Caverna",
        "A Magia dos Elementos", "Ventos do Norte", "Ecos do Passado",
        "Revolução Digital", "O Viajante do Tempo", "Luzes da Cidade Perdida",
        "Além das Montanhas", "Segredos do Vale Encantado", "Pelas Estradas do Destino",
        "Fronteiras da Alma", "Sombras do Submundo", "O Labirinto de Cristal",
        "Sob a Luz do Luar", "Histórias de Um Velho Marujo", "O Reino das Lendas",
        "Correntes Invisíveis", "Estrelas que Nunca Dormem", "Coração de Aço",
        "Os Guardiões do Amanhã", "O Livro dos Mistérios Eternos", "A Última Canção da Terra",
        "Além do Horizonte Perdido", "A Saga dos Ventos",
        "O Mistério da Ilha Perdida", "O Último Guardião", "Os Segredos de Atlantis",
        "O Despertar do Dragão", "A Cidade Submersa", "Caminhos de Fogo",
        "A Lenda do Cavaleiro Sombrio", "A Maldição do Templo Esquecido", "O Último Vingador",
        "O Mistério da Lua Negra", "O Refúgio das Sombras", "A Busca Pela Pedra Filosofal",
        "A Torre dos Eternos", "O Céu das Estrelas Perdidas", "O Labirinto do Destino",
        "O Coração da Tempestade", "A Revelação da Verdade", "O Poder do Infinito",
        "O Guardião das Almas", "A Chave do Segredo", "O Reino Esquecido", "A Trilha do Vento",
        "Os Cavaleiros da Esperança", "O Último Rei", "O Mistério da Quarta Dimensão",
        "O Código da Eternidade", "O Pacto dos Deuses", "A Jornada do Destino", "Caminho da Esperança"
    ];

    const livros = [];

    for (let i = 0; i < nomesFicticios.length; i++) {
        const nome = nomesFicticios[i];
        const preco = (Math.random() * (100 - 20) + 20).toFixed(2);
        
        livros.push({ nome, preco });
    }

    localStorage.setItem('livros', JSON.stringify(livros));

    return livros;
}

function obterLivros() {
    let livros = JSON.parse(localStorage.getItem('livros'));
    if (!livros || livros.length === 0) {
        livros = gerarBibliotecaFicticia();
    }
    return livros;
}

function exibirLivros() {
    const livros = obterLivros();
    const listaLivros = document.getElementById('listaLivros');
    
    if (listaLivros) {
        listaLivros.innerHTML = "";
        livros.forEach((livro) => {
            const livroDiv = document.createElement('div');
            livroDiv.className = 'livro';
            livroDiv.innerHTML = `
                <h3>${livro.nome}</h3>
                <p>Preço: R$ ${livro.preco}</p>
                <button>Adicionar ao Carrinho</button>
            `;
            listaLivros.appendChild(livroDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', exibirLivros);
