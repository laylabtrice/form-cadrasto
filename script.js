function validar() {
    var email =            document.getElementById("email").value;
    var nome =             document.getElementById("nome").value;
    var cep =              document.getElementById("cep").value;
    var telefone =         document.getElementById("telefone").value;
    var datanasc =         document.getElementById("datanasc").value;
    var cpf =              document.getElementById("estado").value;
    var cidade =           document.getElementById("cidade").value;
    var numero =           document.getElementById("numero").value;
    var estado =           document.getElementById("estado").value;
    var rua =              document.getElementById("rua").value;
    var bairro =           document.getElementById("bairro").value;
    var senha =            document.getElementById("senha").value;
    var repetir_senha =    document.getElementById("repetir_senha").value;

    if(!email || !nome || !cep || !telefone || !datanasc || !cpf || !cidade|| !numero || !estado || !rua || !bairro || !senha || !repetir_senha ) {
        alert('Algo está errado! Preencha corretamente seu cadastro!');
    } else {
        if(senha === repetir_senha) {
            alert('Seu cadastro foi realizado :)');
        } else { alert('As senha não se coincidem!') }
    }
};