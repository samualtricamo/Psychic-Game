

    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
   
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var letterUser = [];
   
    
    
  
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    function totalGuessesLeft() {
        document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }
    
    function userGuesses() {
        document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
    }
    
    
    
    var restart = function() {
        guessesLeft = 9;
        losses = 0;
        letterUser = [];
    }
    
    document.onkeyup = function(event) {
        guessesLeft--;
    
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
        letterUser.push(userGuess);
        totalGuessesLeft();
        userGuesses();
    
        if (userGuess === computerPick){
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            restart();
        } 
        else if (totalGuessesLeft === 0) {
            losses++;
            document.querySelector("#lose").innerHTML = "Loses: " + losses;
            restart(); 
        }
      };
