let player = {
	name:"Maurri Kone",
	chips:100
}


let cards=[]
let sum = 0
let isAlive=false
let hasBlackJack = false
let message
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cartEl = document.getElementById("card-el")
let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + " " + player.chips

function getRandomCard()
{	
	let randomCard1 = Math.floor(Math.random() * 13) + 1  
	
	if (randomCard1 === 1){return 11}
		else if(randomCard1>=11 && randomCard1<=13) { return 10}
			else{return randomCard1}
}

function startGame()
{
	isAlive=true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard,secondCard]
	sum = firstCard + secondCard
	renderGame()

}

function renderGame()
{
cartEl.textContent = "Cards: "
for(i=0;i<cards.length;i++)
{
	cartEl.textContent+= " " + cards[i]
}
sumEl.textContent = "Sum: "+sum 

if( sum<=20)
{
	message = "Do you want to draw a new card?"
}
	else if (sum===21)
	{
		message = "Wohoo! You've got Blackjack"
hasBlackJack = false}
		else
		{
		message = "You're out of the game!"
			isAlive=false}

messageEl.textContent = message

}

	

function newCard()
{
if (isAlive===true && hasBlackJack===false)
{

let thirdCard = getRandomCard()
console.log("Drawing a new card")
sum += thirdCard
cards.push(thirdCard)
console.log(cards)
renderGame() 
}
//sumEl.textContent = "Sum: "+ sum 
}

