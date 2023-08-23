// Wait for the document to be fully loaded using jQuery's ready function
$(document).ready(function () {});

// Define an array of button colors
let buttonColours = ['green', 'red', 'yellow', 'blue'];

// Initialize an empty array to store the game pattern
let gamePattern = [];

// Generate the next element in the game pattern
function nextSequence() {
  // Generate a random number between 0 and 3 (inclusive)
  let randomNumber = Math.floor(Math.random() * 4);

  // Use the random number to select a color from the buttonColours array
  let randomChosenColour = buttonColours[randomNumber];

  // Add the randomly chosen color to the game pattern
  gamePattern.push(randomChosenColour);

  // Apply animations and play audio when a button matching the random color is clicked
  $('.' + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
  audio.play();

  // Log the current game pattern for debugging
  console.log('Game Pattern:', gamePattern);

  // Return the randomly chosen color
  return randomChosenColour;
}

// Attach the nextSequence function to a click event on all buttons with the class 'btn'
$('.btn').click(nextSequence);
