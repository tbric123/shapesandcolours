// Get a random element from a given array
function getRandomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

export {getRandomElement};