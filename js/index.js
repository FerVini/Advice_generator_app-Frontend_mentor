const btnGenerate = document.querySelector("#generate-advice");
const adviceId = document.querySelector("#advice-id");
const adviceTxt = document.querySelector("#advice-text");
const carregando = document.querySelector("#carregando");

const API = "https://api.adviceslip.com/advice"

function gerarConselho() {

    btnGenerate.disabled = true;
    btnGenerate.innerHTML = '<i class="fa-solid fa-spinner girando-suave"></i>'

    fetch(API)
    .then(response => response.json())
    .then(dados => {
        renderizarConselho(dados)
    })
    .catch(erro => {
        console.error('Erro na requisição: ', erro);
    })
    .finally(() => {
        btnGenerate.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
        btnGenerate.disabled = false;
    });
}

function renderizarConselho(dados) {
    adviceId.textContent = `ADVICE #${dados.slip.id}`;
    adviceTxt.textContent = `"${dados.slip.advice}"`;
}

btnGenerate.addEventListener('click', () => gerarConselho());

document.addEventListener("DOMContentLoaded", () => gerarConselho());