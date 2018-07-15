'use strict'; 

// 15 Flags Each
const wordGuess = [
    {name:'Andorra',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/ad.png'
    },
    {name:'Azerbaijan',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/az.png'
    },
    {name:'Argentina',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/ar.png'
    },
    {name:'Brazil',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/br.png'
    },
    {name:'Canada',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/ca.png'
    },
    {name:'France',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/fr.png'
    },
    {name:'Germany',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/de.png'
    },
    {name:'Ghana',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/gh.png'
    },
    {name:'Greece',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/gr.png'
    },
    {name:'India',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/in.png'
    },
    {name:'Italy',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/it.png'
    },
    {name:'Japan',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/jp.png'
    },
    {name:'Kenya',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/ke.png'
    },
    {name:'The Philippines',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/ph.png'
    },
    {name:'Turkey',
    flagImage: 'http://flags.fmcdn.net/data/flags/w580/tr.png'
    }
]

let wins = 0;
let losses = 0;
let guesses = 9;
let soFar = [];
let userGuess;
let computerChoice;

// DOM manipulation
function gameReset(){
    wins = 0;
    losses = 0;
    guesses = 9;
    soFar = [];
    userGuess;
    computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];
}

//On page load
$(document).ready(function() {

$('#doc').hide();

function startGame(){
//This program will choose a random letter and the player will guess 
computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];
console.log(computerChoice)

// Game function 
function gameLetter(letter) {
    
    // String.fromCharCode method returns a string
    userGuess = String.fromCharCode(letter.keyCode).toLowerCase();

    soFar.push(userGuess);

    document.getElementById('guessesSoFar').innerHTML = 'Your guesses so far: ' + soFar;

    console.log(`The user has pressed the ${userGuess} key`);

    // if (wins === 5){
    //     document.getElementById('doc').innerHTML = 'You win'
    // }
    if(userGuess === computerChoice) {
        // Log wins
        wins++;

        // Append the wins
        document.getElementById('wins').innerHTML = 'Wins: ' + wins;


        // if(wins = 2){
        //     // Clear 
        //     gameReset();


        // }
        // Again 
        startGame();        
    } 
    // else if(guesses = 0){
    //     losses++;
    //     document.getElementById('losses').innerHTML = losses;

    // } else {
    //     guesses--;
    //     document.getElementById('guessesLeft').innerHTML = guesses;
    // }
}




    document.onkeypress = function(letter){
        gameLetter(letter)
    }
}

startGame();

});

// Dom manipulation 

// document.onkeypress = function(letter) {
//     // const userGuess= innerHTML //how to get innerhtml from element ;
//     userGuess = String.fromCharCode(letter.keyCode).toLowerCase();

//     console.log(`the user has pressed the ${userGuess} key`);

//     if (userGuess === computerChoice){
//         wins++;
//     }else{
//         guesses--;
//      }
//      if (guesses === 0){
//          losses ++;
//      }
//     document.getElementById('wins').innerHTML = "Wins:" + wins;
//     document.getElementById('losses').innerHTML = "Losses:" + losses;
//     document.getElementById('guessesleft').innerHTML = "Guesses left:" + guesses; 
//  }; 

//  let soFar= String.fromCharCode(letter).toLowerCase();
//  document.getElementById('guessesSoFar').innerHTML = 'So far' + soFar; 
