# Minecraft Block Wordle

## Overview
This is a Minecraft-themed Wordle game implemented using vanilla HTML, CSS, and JavaScript. Instead of guessing words with letters, players must guess a combination of 5 Minecraft blocks. The game uses actual Minecraft block textures for an immersive gaming experience.

## Project Structure
```
minecraft-game
├── src
│   ├── js
│   │   ├── app.js          # Main entry point for the game
│   │   ├── game.js         # Game logic and flow management
│   │   └── utils.js        # Utility functions for the game
│   ├── css
│   │   ├── styles.css      # Main styles for the game
│   │   └── animations.css   # CSS animations for transitions and effects
│   ├── data
│   │   └── blocks.js       # Array of available Minecraft blocks
│   └── blocktex
│       ├── iron.png        # Minecraft block textures (PNG files)
│       ├── gold.png
│       ├── diamond.png
│       └── ...             # Add more block texture files here
├── index.html              # Main HTML file for the game
└── README.md               # Documentation for the project
```

## How to Play
1. Open the `index.html` file in your web browser.
2. You will see a 6x5 grid where you can make your guesses.
3. Click on blocks from the available block selector to build your 5-block combination.
4. Click "Submit Guess" to submit your combination.
5. The game will provide visual feedback on your guess:
   - **Green background**: Correct block in the correct position
   - **Yellow background**: Correct block in the wrong position  
   - **Gray background**: Block is not in the target combination
6. You have 6 attempts to guess the correct block combination.
7. Blocks can appear multiple times in the same combination (e.g., iron, iron, gold, diamond, iron).

## Game Features
- **Visual Block Selection**: Click on Minecraft block textures to build your guess
- **Current Guess Display**: See your current selection before submitting
- **Clear Guess Button**: Reset your current guess if you want to start over
- **Play Again Option**: When the game ends, you'll be asked if you want to play again
- **Complete Game Reset**: Starting a new game generates a fresh random block combination

## Setup Instructions
1. Clone or download the repository to your local machine.
2. Make sure you have Minecraft block texture PNG files in the `src/blocktex/` folder.
3. Update the `AVAILABLE_BLOCKS` array in `src/data/blocks.js` to match your available texture files.
4. Open `index.html` in your preferred web browser to start playing.

## Adding More Blocks
To add more Minecraft blocks to the game:
1. Add PNG texture files to the `src/blocktex/` folder (e.g., `stone.png`, `dirt.png`)
2. Update the `AVAILABLE_BLOCKS` array in `src/data/blocks.js`:
```javascript
const AVAILABLE_BLOCKS = [
    'iron',
    'gold',
    'diamond',
    'emerald',
    'redstone',
    'lapis',
];
```

## Technologies Used
- **HTML5**: Game structure and layout
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Game logic, DOM manipulation, and event handling
- **Minecraft Block Textures**: PNG image files for visual blocks

## Game Mechanics
- **Random Generation**: Each game generates a random combination of 5 blocks
- **Duplicate Blocks Allowed**: The same block can appear multiple times in a combination
- **Position-Based Feedback**: Feedback is given based on both block type and position
- **6 Guess Limit**: Players have 6 attempts to find the correct combination

## Browser Compatibility
This game works in all modern web browsers that support:
- ES6 JavaScript features
- CSS Grid and Flexbox
- HTML5 Canvas (for future enhancements)

## Credits
Made with ❤️ by schxkii

Minecraft block textures are property of Mojang Studios.
"# minecraft-wordle" 
