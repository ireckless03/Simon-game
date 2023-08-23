$(document).ready(function () {
  // Initialize game variables
  let level = 0; // Current game level
  const buttonColours = ['green', 'red', 'yellow', 'blue']; // Array of button colors
  let gamePattern = []; // Stores the generated game pattern
  let userClickedPattern = []; // Stores the user's clicked pattern
  let gameStarted = false; // Flag to track if the game has started

  // Attach a key press event handler to start the game
  $(document).keypress(function (event) {
    if (!gameStarted) {
      startGame();
    }
  });

  // Start the game
  function startGame() {
    resetGame();
    nextSequence();
    gameStarted = true;
  }

  // Reset the game variables
  function resetGame() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $('#level-title').text('Press A Key to Start');
  }

  // Generate the next element in the game pattern
  function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);
    const randomChosenColour = pickRandomColour();
    gamePattern.push(randomChosenColour);
    setTimeout(() => {
      animateAndPlay(randomChosenColour);
    }, 1000);
  }

  // Pick a random color from the buttonColours array
  function pickRandomColour() {
    const randomNumber = Math.floor(Math.random() * buttonColours.length);
    return buttonColours[randomNumber];
  }

  // Handle user button clicks
  $('.btn').click(function () {
    const clickedButtonId = $(this).attr('id');
    userClickedPattern.push(clickedButtonId);
    animateAndPlay(clickedButtonId);
    checkAnswer(userClickedPattern.length - 1);
  });

  // Function to handle animations and audio
  function animateAndPlay(colour) {
    $('.' + colour)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    const audio = new Audio('sounds/' + colour + '.mp3');
    audio.play();
  }

  // Check if the user's answer is correct
  function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log('Success');

      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          userClickedPattern = [];
          nextSequence();
        }, 1000);
      }
    } else {
      endGame();
    }
  }

  // End the game and reset all variables
  function endGame() {
    $('#level-title').text('Game Over, Press Any Key to Restart');
    const gameOver = new Audio('sounds/wrong.mp3');
    gameOver.play();
    gameStarted = false;
  }
});
