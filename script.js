function validar() {
    var email =              document.getElementById("email").value;
    var nome =               document.getElementById("nome").value;
    var telefone =           document.getElementById("telefone").value;
    var data_de_nascimento = document.getElementById("data").value;
    var cpf =                document.getElementById("cpf").value;
    var cidade =             document.getElementById("cidade").value;
    var logradouro =         document.getElementById("logradouro").value;
    var senha =              document.getElementById("senha").value;
    var repetir_senha =      document.getElementById("repetirSenha").value;
    var cep =      document.getElementById("cep").value;

    if(!email || !nome || !cep || !telefone || !data_de_nascimento || !cpf || !cidade || !logradouro || !senha || !repetir_senha) {
        alert('Algo está errado! Preencha corretamente seu cadastro!');
    } else {
        if(senha === repetir_senha) {
            alert('Seu cadastro foi realizado :)');
        } else { alert('As senha não se coincidem!') }
    }
};