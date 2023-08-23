$(document).ready(function () {
  // Define an array of button colors
  let buttonColours = ['green', 'red', 'yellow', 'blue'];

  // Initialize an empty array to store the game pattern
  let gamePattern = [];

  // User click patterns
  let userClickedPattern = [];

  // Attach the nextSequence function to a key press event
  $(document).keypress(function (event) {
    nextSequence();
  });

  // * Game start
  // Generate the next element in the game pattern
  function nextSequence() {
    // Generate a random number between 0 and 3 (inclusive)
    let randomNumber = Math.floor(Math.random() * 4);

    // Use the random number to select a color from the buttonColours array
    let randomChosenColour = buttonColours[randomNumber];

    // Add the randomly chosen color to the game pattern
    gamePattern.push(randomChosenColour);

    // Log the current game pattern for debugging
    console.log('Game Pattern:', gamePattern);

    // Call a function to handle animations and audio
    animateAndPlay(randomChosenColour);
  }

  $('.btn').click(function () {
    // Get the ID of the clicked button
    let clickedButtonId = $(this).attr('id');

    // Log the ID to the console (you can perform any action you need here)
    console.log('Clicked button ID: ' + clickedButtonId);

    // Store the clicked button ID in the array
    userClickedPattern.push(clickedButtonId);

    console.log('User Pattern:', userClickedPattern);
  });

  // Function to handle animations and audio
  function animateAndPlay(color) {
    // Apply animations and play audio when a button matching the random color is clicked
    $('.' + color)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    let audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
  }
});
