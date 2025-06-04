class MinecraftBlockWordle {
    constructor() {
        this.targetCombination = getRandomBlockCombination();
        this.currentGuess = [];
        this.guesses = [];
        this.maxGuesses = 6;
        this.gameOver = false;
        this.board = document.getElementById('board');
        this.currentGuessDiv = document.getElementById('current-guess');
        this.message = document.getElementById('message');
        this.availableBlocksDiv = document.getElementById('available-blocks');
        
        this.initializeGame();
    }

    initializeGame() {
        this.createBoard();
        this.createBlockSelector();
        this.setupEventListeners();
        this.createCurrentGuessDisplay();
        console.log('Target combination:', this.targetCombination); // For debugging
    }

    createBoard() {
        this.board.innerHTML = '';
        for (let i = 0; i < this.maxGuesses; i++) {
            const row = document.createElement('div');
            row.className = 'guess-row';
            for (let j = 0; j < 5; j++) {
                const cell = document.createElement('div');
                cell.className = 'block-cell';
                row.appendChild(cell);
            }
            this.board.appendChild(row);
        }
    }

    createBlockSelector() {
        this.availableBlocksDiv.innerHTML = '';
        AVAILABLE_BLOCKS.forEach(block => {
            const blockElement = document.createElement('div');
            blockElement.className = 'selectable-block';
            blockElement.innerHTML = `<img src="${getBlockImagePath(block)}" alt="${block}" data-block="${block}">`;
            blockElement.addEventListener('click', () => this.selectBlock(block));
            this.availableBlocksDiv.appendChild(blockElement);
        });
    }

    createCurrentGuessDisplay() {
        this.currentGuessDiv.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const cell = document.createElement('div');
            cell.className = 'current-guess-cell';
            if (this.currentGuess[i]) {
                cell.innerHTML = `<img src="${getBlockImagePath(this.currentGuess[i])}" alt="${this.currentGuess[i]}">`;
            }
            this.currentGuessDiv.appendChild(cell);
        }
    }

    selectBlock(block) {
        if (this.currentGuess.length < 5 && !this.gameOver) {
            this.currentGuess.push(block);
            this.createCurrentGuessDisplay();
        }
    }

    clearGuess() {
        this.currentGuess = [];
        this.createCurrentGuessDisplay();
    }

    submitGuess() {
        if (this.currentGuess.length !== 5) {
            this.showMessage('Please select 5 blocks!');
            return;
        }

        if (this.gameOver) {
            return;
        }

        const guess = [...this.currentGuess];
        this.guesses.push(guess);
        this.updateBoard(guess, this.guesses.length - 1);
        
        if (this.checkWin(guess)) {
            this.gameOver = true;
            this.showMessage('🎉 Congratulations! You guessed the combination!');
            setTimeout(() => this.askPlayAgain(), 1500);
        } else if (this.guesses.length >= this.maxGuesses) {
            this.gameOver = true;
            this.showMessage(`Game Over! The combination was: ${this.targetCombination.join(', ')}`);
            setTimeout(() => this.askPlayAgain(), 2000);
        } else {
            this.showMessage(`Guess ${this.guesses.length}/${this.maxGuesses}`);
        }

        this.currentGuess = [];
        this.createCurrentGuessDisplay();
    }

    updateBoard(guess, rowIndex) {
        const row = this.board.children[rowIndex];
        const feedback = this.getFeedback(guess);
        
        guess.forEach((block, index) => {
            const cell = row.children[index];
            cell.innerHTML = `<img src="${getBlockImagePath(block)}" alt="${block}">`;
            cell.className = `block-cell ${feedback[index]}`;
        });
    }

    getFeedback(guess) {
        const feedback = new Array(5).fill('incorrect');
        const targetCopy = [...this.targetCombination];
        const guessCopy = [...guess];

        // Check for correct positions first
        for (let i = 0; i < 5; i++) {
            if (guessCopy[i] === targetCopy[i]) {
                feedback[i] = 'correct';
                targetCopy[i] = null;
                guessCopy[i] = null;
            }
        }

        // Check for wrong positions
        for (let i = 0; i < 5; i++) {
            if (guessCopy[i] !== null) {
                const targetIndex = targetCopy.indexOf(guessCopy[i]);
                if (targetIndex !== -1) {
                    feedback[i] = 'wrong-position';
                    targetCopy[targetIndex] = null;
                }
            }
        }

        return feedback;
    }

    checkWin(guess) {
        return guess.every((block, index) => block === this.targetCombination[index]);
    }

    askPlayAgain() {
        const playAgain = confirm('Would you like to play again?');
        if (playAgain) {
            this.resetGame();
        }
    }

    resetGame() {
        // Generate new target combination
        this.targetCombination = getRandomBlockCombination();
        this.currentGuess = [];
        this.guesses = [];
        this.gameOver = false;
        
        // Clear message
        this.showMessage('');
        
        // Reinitialize the game
        this.initializeGame();
        
        console.log('New target combination:', this.targetCombination); // For debugging
    }

    setupEventListeners() {
        document.getElementById('submit-guess').addEventListener('click', () => this.submitGuess());
        document.getElementById('clear-guess').addEventListener('click', () => this.clearGuess());
    }

    showMessage(text) {
        this.message.textContent = text;
    }
}