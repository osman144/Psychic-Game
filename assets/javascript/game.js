'use strict'; 

// 15 Flags Each
const flagGuess = [
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
let previousFlag = [];
let wordView;
let underScores = [];


// On load, start game
$(document).ready(function() {
    //Generate random flag on game start 
    randomizer();
    startGame();


});

// DOM manipulation
// Clear DOM
function gameReset(){
    $('#wins').empty();
    $('#blank-spots').empty();
    $('#guess-attempts').empty();
    $('#letters-used').empty();
    computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];
}

// Randomizer function for generating random flag and country
function randomizer(i){

    let randomFlag = flagGuess[Math.floor(Math.random() * (flagGuess.length+1))];
    let randomCountryName = randomFlag.name;
    let randomFlagImage = randomFlag.flagImage;
    if(previousFlag.includes(randomFlag) === true ){
        randomizer()
    } else {
        console.log(randomCountryName)
        previousFlag.push(randomFlagImage)
        console.log(randomFlagImage)
        $('#flag-column').append('<img src='+randomFlagImage+'/>')

        let splitCountry = randomCountryName.split('');
        for(i in splitCountry){
            underScores.push("_");
            $("#blank-spots").append(`${underScores[i]} `);
        }

        return randomFlagImage
    }
};

// Start new word expression


// const country = function() {  
//     // let targetPerson = pickRandomWord();    
//     wordView = flagGuess[randNum];
//     // Convert target word to array of letters
//     // Create word-in-progress word array with same length as target word array that contains “_”
//     // Display word-in-progress word array to DOM
//     $("#blank-spots").empty();
//     for (let i = 0; i < wordView.name.length; i++) {
//         underScores.push("_");
//         $("#blank-spots").append(`${underScores[i]} `);
//     }
//     return wordView;
// };
// Reset function

// Game function 
function startGame() {
    // document.onkeypress = function(letter){
    // }
    // country();
}
//On page load
