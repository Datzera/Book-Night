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
                    <button>Adicionar ao Carrinho</button>
                `;
                listaLivros.appendChild(livroDiv);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', exibirLivrosNacionais);
