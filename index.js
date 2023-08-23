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

  // Attached click handler, when clicked animations are applied and audio according to colour is played
  $('#' + randomChosenColour).on('click', function () {
    $('.' + randomChosenColour)
      .fadeOut(100)
      .fadeIn(100);

    let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
    audio.play();
    return randomChosenColour;
  });

}

$(".btn").click(nextSequence);