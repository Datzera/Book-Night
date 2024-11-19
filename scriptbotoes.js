function verificarLogin() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    const cadastroLink = document.getElementById('cadastroLink');
    const loginLink = document.getElementById('loginLink');
    const carrinhoLink = document.getElementById('carrinhoLink');
    const logoutLink = document.getElementById('logoutLink');

    if (usuarioLogado === 'true') {
        cadastroLink.style.display = 'none';
        loginLink.style.display = 'none';
        carrinhoLink.style.display = 'inline-block';
        logoutLink.style.display = 'inline-block';
    } else {
        cadastroLink.style.display = 'inline-block';
        loginLink.style.display = 'inline-block';
        carrinhoLink.style.display = 'none';
        logoutLink.style.display = 'none';

        const isCarrinhoPage = window.location.pathname.includes('carrinho.html');
        if (isCarrinhoPage) {
            alert('Você precisa estar logado para acessar esta página. Redirecionando para a página de login.');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }
    }
}

function realizarLogout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuarioLogado');
    localStorage.removeItem('carrinho'); 
    alert('Você saiu da sua conta.');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', verificarLogin);
