// // import prompt from 'prompt';
// const prompt = require('prompt');
// console.log('hi');
// // prompt.console('pick a spot');

// prompt.start();

var prompt = require('prompt');

var board = {
    1: 'open',
    2: 'open',
    3: 'open',
    4: 'open',
    5: 'open',
    6: 'open',
    7: 'open',
    8: 'open',
    9: 'open'
};
function startGame(player) {

function tictactoeBoard() {
  console.log('\n' +
    '' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
    '' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
    '' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}



function move(position) {
    if (board[position] === 'open') {
        return true;
    }
    return false;
}

function markBoard(position, mark) {
    board[position] = mark;
}
var combos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];




function winningCombo(player) {
    for (var i = 0; i < combos.length; i++) {
        var markCount = 0;
        for (var j = 0; j < combos[i].length; j++) {
            if (board[combos[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}
    console.log('Your turn player: ' + player);
    prompt.get(['position'], function (err, result) {

        if (move(result.position)=== true) {
            markBoard(result.position, player);
            tictactoeBoard();
            if (winningCombo(player)===true) {
                console.log('You win');
                return;
            }
            if (player === 'X') {
                startGame('O');
            } else {
                startGame('X');
            }
        } else {
            console.log('pick 0-9');
            startGame(player);
        }
    });
}

console.log('Lets play tic tac toe, choose a number between 1-9')


startGame('X');