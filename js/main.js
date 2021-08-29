'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const erroCep = document.getElementById("erroCEP");

    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty('erro')) {
        erroCep.style.display = "inline-block";
    } else {
        preencherFormulario(endereco);
        erroCep.style.display = "none";
    }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

