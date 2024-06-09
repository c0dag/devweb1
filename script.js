function cadastrar() {
    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (nomeCompleto === "" || telefone === "" || email === "" || dataNascimento === "" || usuario === "" || senha === "") {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    document.getElementById("resultado").innerHTML =
    "<p> Nome Completo: " + nomeCompleto + "</p>" +
    "<p> Telefone de contato: " + nomeCompleto + "</p>" +
    "<p> E-mail: " + email + "</p>" +
    "<p>  Data de nascimento: " + dataNascimento + "</p>" +
    "<p> Usuário: " + usuario + "</p>" +
    "<p> Senha: " + senha + "</p>" 
}

function cancelar() {
    document.getElementById("cadastroForm").reset();
    document.getElementById("resultado").innerHTML = "";
}