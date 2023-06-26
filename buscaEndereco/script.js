function buscaCep() {
     let cep = document.getElementById("cep").value;
     let endereco = document.getElementById("endereco");
     let cidade = document.getElementById("cidade");
     let estado = document.getElementById("estado");
     let bairro = document.getElementById("bairro");
     let logradouro = document.getElementById("logradouro");
     let cepValido = cep.substr(0, 5) + "-" + cep.substr(5) + ".json";
     let url = "https://cdn.apicep.com/file/apicep/" + cepValido;
     
     fetch(url)
      .then(resultado => resultado.json())
      .then(data => {
            cidade.value = data.city;
            estado.value = data.state;
            bairro.value = data.district;
            logradouro.value = data.address;
        });
     }
    