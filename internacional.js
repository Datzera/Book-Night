function exibirLivrosNacionais() {
    const livros = obterLivros(); 
    const listaLivros = document.getElementById('listaLivros');
    
    if (listaLivros) {
        listaLivros.innerHTML = "";
        
        const livrosNacionais = livros.slice(10, 20); 

        if (livrosNacionais.length === 0) {
            listaLivros.innerHTML = "<p>Nenhum livro nacional encontrado.</p>";
        } else {
            livrosNacionais.forEach((livro) => {
                const livroDiv = document.createElement('div');
                livroDiv.className = 'livro';
                livroDiv.innerHTML = `
                    <h3>${livro.nome}</h3>
                    <p>Preço: R$ ${livro.preco}</p>
                    <button onclick="adicionarAoCarrinho('${livro.nome}', ${livro.preco})">Adicionar ao Carrinho</button>
                    `;
            listaLivros.appendChild(livroDiv);
        });
    }
}
}

function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    const livroExistente = carrinho.find(livro => livro.nome === nome);
    if (!livroExistente) {
        carrinho.push({ nome, preco });
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert("Livro adicionado ao carrinho.")
    }
    else {
        alert("Este livro já está no carrinho.")
    }
}

document.addEventListener('DOMContentLoaded', exibirLivrosNacionais);
