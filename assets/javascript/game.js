'use strict'; 

//This program will choose a random letter and the player will guess 

const alphabet = ['a','b'];

let wins = 0;
let losses = 0;
let guesses = 9;

let userGuess = null;
let computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];



document.onkeypress = function(qw) {
    // const userGuess= innerHTML //how to get innerhtml from element ;
    userGuess = String.fromCharCode(qw.keyCode).toLowerCase();

    console.log(`the user has pressed the ${userGuess} key`);
    if (userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
     }
     if (guesses === 0){
         losses ++;
     }
    document.getElementById('wins').innerHTML = "Wins:" + wins;
    document.getElementById('losses').innerHTML = "Losses:" + losses;
    document.getElementById('guessesleft').innerHTML = "Guesses left:" + guesses; 
 }; 

 let soFar= String.fromCharCode().toLowerCase();
 document.getElementById('guessesSoFar').innerHTML = 'So far' + soFar; 
