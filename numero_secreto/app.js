let lista_de_numeros_sorteados = [];
let numero_limite = 100; 
let numero_secreto = gerar_numero_aleatorio();
let tentativas = 1;

function exibir_texto_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibir_mensagem_inicial() {
    exibir_texto_na_tela('h1', 'Jogo do número secreto');
    exibir_texto_na_tela('p', 'Escolha um número entre 1 e 100');
}

exibir_mensagem_inicial();

function verificar_chute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numero_secreto) {
        exibir_texto_na_tela('h1', 'Acertou!');
        let palavra_tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem_tentativas = `Você descobriu o número secreto com ${tentativas} ${palavra_tentativa}!`;
        exibir_texto_na_tela('p', mensagem_tentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numero_secreto) {
            exibir_texto_na_tela('p', 'O número secreto é menor');
        } else {
            exibir_texto_na_tela('p', 'O número secreto é maior');
        }
        tentativas++;
        limpar_campo();
    }
}

function gerar_numero_aleatorio() {
    let numero_escolhido =  parseInt(Math.random() * numero_limite + 1);
    let quantidade_de_elementos_na_lista = lista_de_numeros_sorteados.length;

    if (quantidade_de_elementos_na_lista == numero_limite) {
        lista_de_numeros_sorteados = [];
    }

    if (lista_de_numeros_sorteados.includes(numero_escolhido)) {
        return gerar_numero_aleatorio();
    } else {
        lista_de_numeros_sorteados.push(numero_escolhido);
        return numero_escolhido;
    }
}

function limpar_campo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciar_jogo() {
    numero_secreto = gerar_numero_aleatorio();
    limpar_campo();
    tentativas = 1;
    exibir_mensagem_inicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







