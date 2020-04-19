// Constants for the program
const MAX_ROUND = 3;
const BLANK_FEEDBACK = "|||";
const STARTING_COLOUR = "white";
const BUTTON_COUNT = 3;

// Extract a random set of elements from a given array
function getRandomSet(array, numberOfElements) {
    // Save a copy of the array in order to restore it later on
    // Method 8 of https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    // Debug help: https://medium.com/@sayes2x/passing-an-array-to-a-function-as-a-value-in-javascript-10c20d5b89
    const arrayToMutate = JSON.parse(JSON.stringify(array));

    // Pull out three random elements from the array
    let randomSet = [];
    for (var i = 0; i < numberOfElements; i++) {
      randomSet.push(getRandomElement(arrayToMutate, false));
    }

    return randomSet;
}

// Get a random element from a given array
function getRandomElement(array, replace) {
    const index = Math.floor(Math.random() * array.length);
    const element = array[index];

    // Remove the element at the chosen location if you choose to not
    // replace it (e.g. like picking a marble out of a bag and not putting
    // it back in)
    if (!replace) {
      array.splice(index, 1);
    }

    return element;
}

export {getRandomSet,
        getRandomElement, 
        MAX_ROUND, 
        BLANK_FEEDBACK,
        STARTING_COLOUR,
        BUTTON_COUNT};