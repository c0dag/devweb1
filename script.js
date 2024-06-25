window.addEventListener('load', function() {
    const form = document.getElementById('cadastroForm');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const resultadoDiv = document.getElementById('resultado');

    cadastrarBtn.addEventListener('click', function() {
        if (form.checkValidity()) {
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;

            resultadoDiv.innerHTML = `
                <h2>Dados Cadastrados</h2>
                <p>Nome Completo: ${nomeCompleto}</p>
                <p>Telefone de contato: ${telefone}</p>
                <p>E-mail: ${email}</p>
                <p>Data de nascimento: ${dataNascimento}</p>
                <p>Usuário: ${usuario}</p>
                <p>Senha: ${senha}</p>
            `;
        } else {
            alert("Por favor preencha todos os campos!");
        }
    });

    cancelarBtn.addEventListener('click', function() {
        form.reset();
        resultadoDiv.innerHTML = '';
    });
});
