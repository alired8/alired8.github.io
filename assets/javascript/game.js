var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSofar = [];

var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log('computer:' , computerRandom);

document.onkeyup = function(event){
    var userGuess= event.key;
    console.log(userGuess);
    guessesSofar.push(userGuess); 



if(userGuess === computerRandom) {
   wins++;
   guessesLeft = 9;
   guessesSofar.length = 0;
   computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   console.log('Computer: ', computerRandom);	
   console.log(wins);     
}


else if(guessesLeft === 1){
    losses++;
    guessesLeft = 9;
    guessesSofar.length = 0;
    console.log(guessesSofar.length);

}    
else {
guessesLeft--;
console.log(guessesLeft);
}

var html = //"<h1>The Psychic Game</h1>" + 
        "<p>Guess What Letter I'm Thinking Of?</p>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses So Far: " +guessesSofar +"</p>";
		console.log()
        
        
	document.querySelector('#game').innerHTML = html; 

};