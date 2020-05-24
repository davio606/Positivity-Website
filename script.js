function revealMessage() {
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal -1;
	}
	document.getElementById("countDownButton").innerHTML = newVal;
}

var quotes = [
'\"The hardest thing to do is to be true to yourself, especially when everybody is watching.\" -Dave Chappelle',
'\"When you sit down to design something, it can be anything, a car, a toaster, a house, a tall building or a shoe, what you draw or what you design is really a culmination of everything that you\'ve seen and done in your life previous to that point.\" -Tinker Hatfield',
'\"Love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is done well.\" -Vincent Van Gogh',
'\"There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.\" -Nelson Mandela',
'\"All life is an experiment. The more experiments you make, the better.\" -Ralph Waldo Emerson',
'\"It is our choices that show what we truly are, far more than our abilities.\"J.K. Rowling',
'\"Happiness is a quality of the soul…not a function of one’s material circumstances.\" -Aristotle',
'\"Constantly take inventory of what\'s important to you.\" -Dave Chappelle',
'\"Life is pure adventure, and the sooner we realize that, the quicker we will be able to treat life as art.\" Maya Angelou',
]
// Array of quotes

function newQuote() {
	// var randomNum = Math.floor(Math.random());
	var randomNum = Math.floor(Math.random()*9);
	document.getElementById('myQuote').innerHTML = quotes[randomNum];
}