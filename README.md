# Tic-Tac-Toe Game

This project is a Tic-Tac-Toe game built using JavaScript, HTML, and CSS. The code is structured into distinct modules that handle various aspects of the game, including the game board, player management, game control logic, and display control for updating the game interface. The goal of the project is to implement a modular structure that minimizes global variables and promotes organized, readable code.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
  - [Gameboard Module](#gameboard-module)
  - [Player Factory Function](#player-factory-function)
  - [GameController Module](#gamecontroller-module)
  - [DisplayController Module](#displaycontroller-module)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
The project follows a modular approach, where:
- The gameboard, players, and game controller are each encapsulated in separate modules.
- Factories and Immediately Invoked Function Expressions (IIFE) are used to control the creation and behavior of objects within the game.
- All logic is neatly compartmentalized to allow for easy expansion, testing, and maintenance.

## Features
- **Game Board Module**: Manages the game state and player moves.
- **Player Factory Function**: Creates players with unique names and markers.
- **GameController Module**: Controls the game flow, including turn management and win/tie checks.
- **DisplayController Module**: Handles updating the game board and displaying the game result in the DOM.

## How It Works

### Gameboard Module
The `Gameboard` module is an IIFE that manages the game board. It includes:
- A `board` array to hold the current state of the board (initially filled with `null`).
- Methods:
  - `getBoard`: Returns the current board state.
  - `resetBoard`: Resets the board to its initial empty state.
  - `setMarker`: Adds a player’s marker to a specified index if it’s empty. Returns `true` if successful, `false` otherwise.

```javascript
const Gameboard = (() => {
    let board = Array(9).fill(null);
    const getBoard = () => board;
    const resetBoard = () => { board = Array(9).fill(null); };
    const setMarker = (index, marker) => { /* ... */ }
    return { getBoard, resetBoard, setMarker };
})();
```

### Player Factory Function
The `Player` function creates player objects. Each player has a name and a marker (`X` or `O`), which are assigned upon creation.

```javascript
const Player = (name, marker) => { return { name, marker }; };
```

### GameController Module
The `GameController` module is an IIFE responsible for game logic, player turns, and checking for win/tie conditions. It includes:
- `startGame`: Initializes players, resets the board, and sets up the active game state.
- `playTurn`: Processes a player's turn by adding their marker to the board, then checks for win or tie conditions. Alternates player turns if the game is still active.
- `checkWin`: Checks if the current player has won by comparing their markers against predefined winning patterns.

```javascript
const GameController = (() => {
    const startGame = (player1Name, player2Name) => { /* ... */ }
    const playTurn = (index) => { /* ... */ }
    const checkWin = () => { /* ... */ }
    return { startGame, playTurn };
})();
```

### DisplayController Module
The `displayController` module is an IIFE that manages DOM interactions. It includes:
- **Event listeners** for each cell, allowing players to place markers by clicking.
- `renderBoard`: Updates the DOM to reflect the current state of the board.
- `displayResult`: Shows the result of the game in the DOM when it ends.
- **Start Button**: Resets the game by calling `startGame` with player names from input fields.

```javascript
const displayController = (() => {
    const renderBoard = () => { /* ... */ }
    const displayResult = (message) => { /* ... */ }
    return { renderBoard, displayResult };
})();
```

## Usage
To play the game:
1. Open `index.html` in a web browser.
2. Enter player names and click "Start Game".
3. Players take turns clicking on cells to place their markers.
4. The game announces the winner or a tie when the board is filled or a winning combination is achieved.

## Contributing
Feel free to open issues or submit pull requests with improvements or additional features.

## License
This project is open-source and available under the MIT License. 
