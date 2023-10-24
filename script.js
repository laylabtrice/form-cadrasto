function validar() {
    var email =              document.getElementById("email").value;
    var nome =               document.getElementById("nome").value;
    var telefone =           document.getElementById("telefone").value;
    var data_de_nascimento = document.getElementById("data").value;
    var cpf =                document.getElementById("cpf").value;
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

//Preenche os campos relacionados ao CEP
const preencherForumulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
// É possível testar e entender a RegEx em https://www.regexpal.com/
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
'use strict'; //Strict mode