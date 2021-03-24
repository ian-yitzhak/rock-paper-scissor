function rpsGame(yourchoice){
	console.log(yourchoice)

	var humanChoice,badChoice;
	humanChoice = yourchoice.id
	badChoice = numberToChoice(randomTorpsInt());

	console.log('computer Choice', badChoice)


	result = decideWinner(humanChoice, badChoice);

	console.log(result)

	message = finalMessage(result);
	console.log(message)

	display(yourchoice.id, badChoice , message)



}
function randomTorpsInt(){
	return Math.floor(Math.random() * 3);
}

function numberToChoice(number){

	return ['rock', 'paper', 'scisor'][number]
}

function decideWinner(yourChoice , computerChoice){

	var dataB = {
		'rock' : {'scisor': 1, 'rock' : 0.5, 'scisor': 0},
		'paper' : {'rock': 1, 'paper' : 0.5, 'scisor': 0},
		'scisor' : {'paper': 1, 'scisor' : 0.5, 'rock': 0},

	}
	var yourScore = dataB[yourChoice][computerChoice];
	var compScore = dataB[computerChoice][yourChoice];

	return [yourScore, compScore]
	display = (yourchoice.id , badChoice , message)

}
function finalMessage([yourScore, compScore]){

	if(yourScore === 0){
		return { 'message' : 'YOU LOST', 'color': 'red'}
	}
	else if(yourScore === 0.5){

		return { 'message' : 'YOU TIED', 'color': 'yellow'}


	}
	else{

		return { 'message' : 'YOU WON', 'color': 'green'}
	}



}

function display(humanImage, badImage, finalMessage){

	var imageDb = {

		'rock' : document.getElementById('rock').src,
		'paper' : document.getElementById('paper').src,
		'scisor' : document.getElementById('scisor').src,
	}

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scisor').remove();


	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src = '" + imageDb[humanImage] + "' height: 150 width: 150 style='box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);' >"

	messageDiv.innerHTML = "<h1 style' color : " + finalMessage['color'] + "; font-size : 60px margin: 120px padding: 30px '>" + finalMessage['message'] + "</h1>"

	botDiv.innerHTML = "<img src = '" + imageDb[badImage] + "' height: 50 width: 50 style='box-shadow: 5px 4px 5px rgba(68, 38, 98, 0.6);' >"

	document.getElementById('cat-gen').appendChild(humanDiv);
	document.getElementById('cat-gen').appendChild(messageDiv);

	document.getElementById('cat-gen').appendChild(botDiv);
}

function refresh(){
        window.location.reload("Refresh")
      }