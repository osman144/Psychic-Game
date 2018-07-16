var hangFlag = {
    flagGuess : {
        Andorra : {
            name: 'Andorra',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/ad.png'
        },
        Azerbaijan: {
            name: 'Azerbaijan',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/az.png'
        }, 
        Argentina: {
            name: 'Argentina',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/ar.png'
        },
        Brazil: {
            name:'Brazil',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/br.png'
        },
        Canada: {
            name:'Canada',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/ca.png'
        },
        France: {
            name:'France',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/fr.png'
        },
        Germany: {
            name:'Germany',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/de.png'
        },
        Ghana: {
            name:'Ghana',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/gh.png'
        },
        Greece: {
            name:'Greece',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/gr.png'
        },
        India: {
            name:'India',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/in.png'
        },
        Italy: {
            name:'Italy',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/it.png'
        }, 
        Japan: {
            name:'Japan',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/jp.png'
        },
        Kenya: {
            name:'Kenya',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/ke.png'
        },
        Jamaica: {
            name:'Jamaica',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/jm.png'
        },
        Turkey: {
            name:'Turkey',
            flagImage: 'http://flags.fmcdn.net/data/flags/w580/tr.png'
        }
    },

    // Variables that set the initial state of the game
    // Set the key value pairs
    wordsInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

    // The setupGame method is called when the page first loads
    setupGame: function(){
        // This will pick a random word
        var objKeys = Object.keys(this.flagGuess);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

        // Split the chosen word up into its individual letters.
        this.lettersOfTheWord = this.wordInPlay.split("");
        // Builds the representation of the word, trying to guess and displays it on the page.
        // At the start it will be all underscores since user hasn't guessed any letters ("_ _ _ _").
        this.rebuildWordView();
        // This function sets the number of guesses the user gets, and renders it to the HTML.
        this.processUpdateTotalGuesses();
    },

    // This function is run whenever the user guesses a letter..
    updatePage: function(letter){
        // If the user has no guesses left, restart the game.
        if(this.guessesLeft === 0) {
            alert('You win!')
            this.restartGame();
        } else {
            // Check for and handle incorrect guesses.
            this.updateGuesses(letter);

            // Check for and handle correct guesses.
            this.updateMatchedLetters(letter);

            // Rebuild the view of the word. Guessed letters are revealed, unguessed letters have a "_".
            this.rebuildWordView();

            // If the user wins, restart the game.
            if (this.updateWins() === true) {
            this.restartGame();
            }
        }
    },

    // This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).
    updateGuesses: function(letter) {
        // If the letter is not in the guessedLetters array, and the letter is not in the lettersOfTheWord array..
        if((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
            // Add the letter to the guessedLetters array.
            this.guessedLetters.push(letter); 

            // Decrease guesses by one 
            this.guessesLeft--;

            // Update guesses remaining and guesses letters on the page.
            $("#guesses-remaining").append(this.guessesLeft);
            $('#letters-used').append(this.guessedLetters.join(', '));
        }
    },

    // This function sets the initial guesses the user gets.

    processUpdateTotalGuesses: function (){
        // The user will get more guesses the longer the word is.
        this.totalGuesses = this.lettersOfTheWord.length + 5;
        this.guessesLeft = this.totalGuesses;

        // Render the guesses left to the page.

        $('#guesses-remaining').append(this.guessesLeft);
    },

    // This function governs what happens if the user makes a successful guess.
    updateMatchedLetters: function(letter) {
        // Loop through the letters of the "solution".
        for(var i = 0; i < this.lettersOfTheWord.length; i++){
            if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
            // Push the newly guessed letter into the matchedLetters array.
            this.matchedLetters.push(letter);
            }
        
        }

    },
    
    // This function builds the display of the word that is currently being guessed.
    rebuildWordView: function() {
        // start with an empty string.
        var wordView = "";
        var flagView= "";

        // Loop through the letters of the word trying to guess..
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            // If the current letter has been guessed, display that letter.
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
                wordView += this.lettersOfTheWord[i];
            }
            // If it hasn't been guessed, display a "_" instead.
            else {
                wordView += "&nbsp;_&nbsp;";
            }
        };
        // Update the page with the new string
        console.log(wordView)
        $('#current-word').append(wordView);
    },

    // Function that "restarts" the game by resetting all of the variables.

    restartGame: function(){
        $('#letters-used').empty();
        this.wordsInPlay = null;
        this.lettersOfTheWord = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.setupGame();
        this.rebuildWordView();
    },

    // Function that checks to see if the user has won.
  updateWins: function() {
    
  }


};

// Initialize the game when the page loads.
hangFlag.setupGame();

// When a key is pressed..
document.onkeyup = function(event) {
  // Capture pressed key and make it lowercase.
  hangFlag.letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Pass the guessed letter into updatePage function to run the game logic.
  hangFlag.updatePage(hangFlag.letterGuessed);
};
