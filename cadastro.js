const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', function (e) {
    e.preventDefault();

    const cpf = document.getElementById('cpf_cliente').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(usuario => usuario.cpf === cpf)) {
        alert('CPF já cadastrado! Tente outro.');
        return;
    }

    usuarios.push({ cpf, senha, nome });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    formCadastro.reset();
});
