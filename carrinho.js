function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaCarrinho = document.getElementById('listaCarrinho');
    const totalElement = document.getElementById('total');
    
    listaCarrinho.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalElement.textContent = "0.00";
    } else {
        carrinho.forEach((livro, index) => {
            const livroDiv = document.createElement('div');
            livroDiv.className = 'livro';
            livroDiv.innerHTML = `
                <h3>${livro.nome}</h3>
                <p>Preço: R$ ${livro.preco}</p>
                <button onclick="removerDoCarrinho(${index})">Remover</button>
            `;
            listaCarrinho.appendChild(livroDiv);
            total += parseFloat(livro.preco);
        });

        totalElement.textContent = total.toFixed(2);
    }
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (index >= 0 && index < carrinho.length) {
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        exibirCarrinho();
    }
}

function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra.");
        return;
    }

    const total = carrinho.reduce((acc, livro) => acc + parseFloat(livro.preco), 0).toFixed(2);

    alert(`Compra finalizada com sucesso! Total: R$ ${total}. Seus livros já foram enviados para seu email! Obrigado pela preferência!`);

    localStorage.removeItem('carrinho');

    exibirCarrinho();

    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = "0.00";
    }
}

document.addEventListener('DOMContentLoaded', exibirCarrinho);
