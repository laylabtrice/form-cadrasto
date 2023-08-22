function validar() {
    var email =              document.getElementById("email").value;
    var nome =               document.getElementById("nome").value;
    var telefone =           document.getElementById("telefone").value;
    var data_de_nascimento = document.getElementById("data").value;
    var cpf =                document.getElementById("cpf").value;
    var gender =             document.getElementById("cpf").value;
    var cidadepaís =         document.getElementById("cidadepaís").value;
    var ruabairro =          document.getElementById("ruabairro").value;
    var number =             document.getElementById("numero").value;
    var estado =             document.getElementById("estado").value;
    var senha =              document.getElementById("senha").value;
    var repetir_senha =      document.getElementById("confirmarsenha").value;
    var cep =      document.getElementById("cep").value;

    if(!email || !nome || !cep || !telefone || !data_de_nascimento || !cpf || !cidadepaís || !ruabairro || !senha || !repetir_senha|| !number || !estado || !gender ) {
        alert('Algo está errado! Preencha corretamente seu cadastro!');
    } else {
        if(senha === repetir_senha) {
            alert('Seu cadastro foi realizado :)');
        } else { alert('As senha não se coincidem!') }
    }
};