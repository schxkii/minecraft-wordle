// List of available Minecraft blocks (add all your PNG files here)
const AVAILABLE_BLOCKS = [
    'iron',
    'gold',
    'diamond',
    'emerald',
    'redstone',
    'lapis',
    // Add more blocks based on your PNG files in src/blocktex folder
];

// Function to get random block combination
function getRandomBlockCombination() {
    const combination = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * AVAILABLE_BLOCKS.length);
        combination.push(AVAILABLE_BLOCKS[randomIndex]);
    }
    return combination;
}

// Function to get block image path
function getBlockImagePath(blockName) {
    return `src/blocktex/${blockName}.png`;
}