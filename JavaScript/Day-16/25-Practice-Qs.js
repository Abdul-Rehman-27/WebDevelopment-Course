// Qs: create a nested array to show the following tic-tac-toe game state

let ticTacToe = [ ['x', null, 'o'], [null, 'x', null], ['o', null, 'x'] ];

console.log(ticTacToe);

//-Change null in 1st array to 'o'
ticTacToe[0][1] = 'o';
console.log(ticTacToe);