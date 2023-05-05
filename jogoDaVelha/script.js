let casas = document.querySelectorAll('.casas');
let player = 'O';
let turno = 1;
let vitoria = false;
let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let possiveisVitorias = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function pegarValores() {
    for (let cont = 0; cont <= 8; cont++) {
        tabuleiro[cont] = casas[cont].innerHTML;
    }
}

function verificarVitoria() {
    for (let cont = 0; cont <= 7; cont++) {
        if (tabuleiro[possiveisVitorias[cont][0]] == tabuleiro[possiveisVitorias[cont][1]] && tabuleiro[possiveisVitorias[cont][2]]
            && tabuleiro[possiveisVitorias[cont][0]] != ' '
            && tabuleiro[possiveisVitorias[cont][1]] != ' '
            && tabuleiro[possiveisVitorias[cont][2]] != ' '
        ) {
            vitoria = true;
        }
    }
}


for (let casa of casas) {
    casa.addEventListener('click',
        function () {
            if (casa.innerHTML != ' ') {
                return;
            } else {
                let titulo = document.querySelector('.titulo');
                casa.innerHTML = player;
                pegarValores();
                verificarVitoria();
                if (vitoria == true) {
                    console.log(`jogador ${player} ganhou, parabéns!`);
                    return;
                }
                player == 'O' ? player = 'X' : player = 'O';
                titulo.innerText == player;
                turno++;
            }
        });
};