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
    var senha =            document.getElementById("senha").value;
    var repetir_senha =    document.getElementById("repetir_senha").value;

    if(!email || !nome || !cep || !telefone || !datanasc || !cpf || !cidade|| !numero || !estado || !rua || !senha || !repetir_senha ) {
        alert('Algo está errado! Preencha corretamente seu cadastro!');
    } else {
        if(senha === repetir_senha) {
            alert('Seu cadastro foi realizado com sucesso :)');
        } else { alert('As senha não se coincidem!') }
    }
};

document.getElementById("cep").addEventListener("blur", () => {

    let cep = document.getElementById("cep").value

    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json()
        })
        .catch(error => {
            alert(error.message);
        })
        .then(response => {
            document.getElementById('rua').value = response.logradouro
            document.getElementById('estado').value = response.uf
            document.getElementById('cidade').value = response.localidade
        })
    }
})

document.getElementById("telefone").addEventListener("blur", () => {

    let telefone = document.getElementById("telefone").value
    telefone = telefone.replace(/[\(\)\s-]/g, '')

    if (telefone.length !== 11) {
        alert("Número de telefone inválido. Deve conter 10 dígitos.")
    } else {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 6)}-${telefone.slice(6)}`
        document.getElementById("telefone").value = telefone
    };

})