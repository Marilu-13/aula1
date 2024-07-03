let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();

let tentativa = 1;
//

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", 
        {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Bem vindo ao Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();

//
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Que tri, tu acertou!!");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Tu acertou o número em ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "Menos");
            } else  {
                exibirTextoNaTela("p", "Mais");
    }
    tentativa++;
    limparcampo();
}
}
//
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +2);
    let quantidadeDeElementosNaLsta = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLsta == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
 }
//
function limparcampo() {
    chute = document.querySelector("input");
    chute.value = "";
}
//
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
//

