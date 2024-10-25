const Gameboard = (() => {
    let board = Array(9).fill(null);
  
    const getBoard = () => board;
  
    const resetBoard = () => {
      board = Array(9).fill(null);
    };
  
    const setMarker = (index, marker) => {
      if (board[index] === null) {
        board[index] = marker;
        return true;
      }
      return false;
    };
  
    return { getBoard, resetBoard, setMarker };
  })();

  const Player = (name, marker) => {
  return { name, marker };
};

const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let isGameActive = true;
  
    const startGame = (player1Name, player2Name) => {
      players = [
        Player(player1Name, 'X'),
        Player(player2Name, 'O')
      ];
      Gameboard.resetBoard();
      currentPlayerIndex = 0;
      isGameActive = true;
      displayController.renderBoard();
    };
  
    const playTurn = (index) => {
      if (isGameActive && Gameboard.setMarker(index, players[currentPlayerIndex].marker)) {
        if (checkWin()) {
          displayController.displayResult(`${players[currentPlayerIndex].name} wins!`);
          isGameActive = false;
        } else if (Gameboard.getBoard().every(cell => cell !== null)) {
          displayController.displayResult("It's a tie!");
          isGameActive = false;
        } else {
          currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        }
        displayController.renderBoard();
      }
    };
  
    const checkWin = () => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      return winPatterns.some(pattern =>
        pattern.every(index => Gameboard.getBoard()[index] === players[currentPlayerIndex].marker)
      );
    };
  
    return { startGame, playTurn };
  })();

  const displayController = (() => {
    const cells = document.querySelectorAll('.cell');
    const resultDisplay = document.querySelector('.result');
    const startButton = document.querySelector('#start-game');
    const player1Input = document.querySelector('#player1');
    const player2Input = document.querySelector('#player2');
  
    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        GameController.playTurn(index);
      });
    });
  
    const renderBoard = () => {
      const board = Gameboard.getBoard();
      cells.forEach((cell, index) => {
        cell.textContent = board[index] || '';
      });
    };
  
    const displayResult = (message) => {
      resultDisplay.textContent = message;
    };
  
    startButton.addEventListener('click', () => {
      const player1Name = player1Input.value || 'Player 1';
      const player2Name = player2Input.value || 'Player 2';
      GameController.startGame(player1Name, player2Name);
      resultDisplay.textContent = '';
    });
  
    return { renderBoard, displayResult };
  })();
  