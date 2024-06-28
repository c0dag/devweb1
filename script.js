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

/*calculadora*/

document.getElementById('calcularBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor, insira números válidos.";
    } else {
        switch (operacao) {
            case 'adicao':
                resultado = num1 + num2;
                break;
            case 'subtracao':
                resultado = num1 - num2;
                break;
            case 'mult':
                resultado = num1 * num2;
                break;
            case 'divisao':
                if (num2 === 0) {
                    resultado = "Não é possível dividir por zero.";
                } else {
                    resultado = num1 / num2;
                }
                break;
            default:
                resultado = "Operação inválida.";
        }
    }

    document.getElementById('resultado').innerText = "Resultado: " + resultado;
});




