var listOfItems = document.getElementsByClassName("visibilityOfText");
var listOfTd = document.getElementsByTagName("td");
	var i;
	for(i = 0; i < 18; i++){
		var a; 
		var b;
		do{
			a = Math.round(Math.random()*35);
			b = Math.round(Math.random()*35);
		}while(a == b || listOfItems[a].innerHTML != "" || listOfItems[b].innerHTML != "");

		var value = 10 + Math.round(Math.random()*3);
		listOfItems[a].innerHTML = value;
		listOfItems[b].innerHTML = value;

		listOfItems[a].classList.add("hidden");
		listOfItems[b].classList.add("hidden");
}


var firstCell = null;
var secondCell = null;
var score = 0;
var attempts = 0;
var total = 36;
var flagForStartGame = false;
var leftAttemptsNumb;

var easy = document.getElementById("easy");
var mid = document.getElementById("mid");
var hard = document.getElementById("hard");
var leftAttempts = document.getElementById("leftAttempts");

function startGame(obj){
	for( i = 0; i<listOfTd.length;i++)
	{	listOfTd[i].classList.remove("hidden");
		listOfItems[i].classList.add("hidden");
	}
	
	
	
	flagForStartGame = true;
	if (easy.checked ==false && mid.checked == false && hard.checked == false) {
		alert('Выберите уровень сложности перед началом игры');
		flagForStartGame = false;
	}
	
	if (easy.checked) {
		alert('Уровень - легкий. У вас 60 попыток');
		leftAttempts.innerHTML = "У вас осталось попыток: 60";
		leftAttemptsNumb = 60;

	}
	
	if (mid.checked) {
		alert('Уровень - средний. У вас 50 попыток');
		leftAttempts.innerHTML = "У вас осталось попыток: 50";
		leftAttemptsNumb = 50;
	}
	
	if (hard.checked) {
		alert('Уровень - сложный. У вас 40 попыток');
		leftAttempts.innerHTML = "У вас осталось попыток: 40";
		leftAttemptsNumb = 40;
	}
	
	
	

}

function change(obj){
	
	if(flagForStartGame == false){
		return;
	}
	
	if(firstCell != null && secondCell != null){
		return;
	}
	
	if(firstCell == null){
	firstCell = obj;
	firstCell.children[0].classList.remove("hidden");
	}else{
		secondCell = obj;
		if(firstCell == secondCell){
			firstCell.children[0].classList.add("hidden");
			firstCell = null;
			secondCell = null;
			return;
		}
		if(firstCell.children[0].innerHTML == secondCell.children[0].innerHTML){
			firstCell.classList.add("hidden");
			secondCell.classList.add("hidden");
			score++;
			total = total-2;
			attempts++;
			document.getElementById("score").innerHTML = "Ваш счет: "+score;
			document.getElementById("left").innerHTML = "Осталось: "+total;
			document.getElementById("attempts").innerHTML = "Число ваших попыток: "+attempts;
			leftAttempts.innerHTML = "У вас осталось попыток: " + (--leftAttemptsNumb);
			firstCell = null;
			secondCell = null;
		}else{
		secondCell.children[0].classList.remove("hidden");
		leftAttempts.innerHTML = "У вас осталось попыток: " + (--leftAttemptsNumb);
	setTimeout(function(){
		attempts++;
		document.getElementById("attempts").innerHTML = "Число ваших попыток: "+attempts;
		firstCell.children[0].classList.add("hidden");
		secondCell.children[0].classList.add("hidden");
		firstCell = null;
		secondCell = null;
	},1000);
		}
	}
	
	if(leftAttemptsNumb == 0 && total > 0){
		alert("Вы проиграли :(");
		firstCell = null;
		secondCell = null;
		score = 0;
		attempts = 0;
		total = 36;
		flagForStartGame = false;
	}
	
	if(leftAttemptsNumb >= 0 && total == 0){
		alert("Вы выиграли :) . За "+ attempts+" попыток");
		firstCell = null;
		secondCell = null;
		score = 0;
		attempts = 0;
		total = 36;
		flagForStartGame = false;

	}
	
}
