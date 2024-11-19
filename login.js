function realizarLogin(event) {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(
        (usuario) => usuario.cpf === cpf && usuario.senha === senha
    );

    if (usuario) {
        localStorage.setItem('usuarioLogado', 'true');
        localStorage.setItem('nomeUsuarioLogado', usuario.nome);
        alert(`Bem-vindo, ${usuario.nome}!`);
        window.location.href = 'index.html';
    } else {
        alert('CPF ou senha inválidos. Tente novamente.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', realizarLogin);
    }
});
