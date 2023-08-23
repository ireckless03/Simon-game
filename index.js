// Wait for the document to be fully loaded using jQuery's ready function
$(document).ready(function () {
});

// Initialize an empty array to store the game pattern
let gamePattern = [];

// Define an array of button colors
let buttonColours = ['green', 'red', 'yellow', 'blue'];

// Generate the next element in the game pattern
function nextSequence() {
  // Generate a random number between 0 and 3 (inclusive)
  let randomNumber = Math.floor(Math.random() * 4);

  // Use the random number to select a color from the buttonColours array
  let randomChosenColour = buttonColours[randomNumber];

  // Add the randomly chosen color to the game pattern
  gamePattern.push(randomChosenColour);

  // Debugging: Log the random number, chosen color, and the current game pattern
  console.log('Random Number:', randomNumber, 'Chosen Color:', randomChosenColour, 'Game Pattern:', gamePattern);
}

// Call the nextSequence function to generate the initial sequence
nextSequence();
