// Constants for the program
const MAX_ROUND = 3;
const BLANK_FEEDBACK = "|||";
const STARTING_COLOUR = "white";

// Get a random element from a given array
function getRandomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

export {getRandomElement, 
        MAX_ROUND, 
        BLANK_FEEDBACK,
        STARTING_COLOUR};