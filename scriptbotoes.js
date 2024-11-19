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
    }
}

function realizarLogout() {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuarioLogado');
    alert('Você saiu da sua conta.');
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', verificarLogin);
