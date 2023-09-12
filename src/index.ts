$(document).ready(function () {
  let level = 0;
  const buttonColours: string[] = ['green', 'red', 'yellow', 'blue'];
  let gamePattern: string[] = [];
  let userClickedPattern: string[] = [];
  let gameStarted = false;

  $(document).keypress(function (event) {
    if (!gameStarted) {
      startGame();
    }
  });

  function startGame() {
    resetGame();
    nextSequence();
    gameStarted = true;
  }

  function resetGame() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $('#level-title').text('Press A Key to Start');
  }

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

  function pickRandomColour() {
    const randomNumber = Math.floor(Math.random() * buttonColours.length);
    return buttonColours[randomNumber];
  }

  $('.btn').click(function () {
    const clickedButtonId = $(this).attr('id');
    userClickedPattern.push(clickedButtonId);
    animateAndPlay(clickedButtonId);
    checkAnswer(userClickedPattern.length - 1);
  });

  function animateAndPlay(colour: string) {
    $('.' + colour)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    const audio = new Audio('sounds/' + colour + '.mp3');
    audio.play();
  }

  function checkAnswer(currentLevel: number) {
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

  function endGame() {
    $('#level-title').text('Game Over, Press Any Key to Restart');
    const gameOver = new Audio('sounds/wrong.mp3');
    gameOver.play();
    gameStarted = false;
  }
});
