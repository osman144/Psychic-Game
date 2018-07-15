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

// DOM manipulation
function gameReset(){
    $('#wins').empty();
    $('#blank-spots').empty();
    $('#guess-attempts').empty();
    $('#letters-used').empty();
    computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];
}

// Randomizer function for generating random flag
function randomizer(i){
    let randomFlag = flagGuess[Math.floor(Math.random() * (flagGuess.length+1))].name;
    if(previousFlag.includes(randomFlag) === true ){
        randomizer()
    } else {
        previousFlag.push(randomFlag)
        console.log(randomFlag)
        return randomFlag
    }
};
//On page load
$(document).ready(function() {


    // flagGuess.forEach(randomizer)
    randomizer()

    // Function to randomly choose new flag
    function randomizerThing(){

        // flagGuess.forEach(function(){
        //     let randomFlag = flagGuess
        // })

        // for(i in flagGuess[i]){
        //     let randomFlag = Math.floor(Math.random*(flagGuess[i]+1));
        // }
        // return randomFlag
    }
    
    let andorra = flagGuess[0].flagImage
    $('#flag-column').append('<img src='+andorra+'/>')

// $('#doc').hide();

function startGame(){
//This program will choose a random letter and the player will guess 
computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];
console.log(computerChoice)

// Game function 
    



document.onkeypress = function(letter){
    gameLetter(letter)
}
}

});