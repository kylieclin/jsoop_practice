
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		this.newcard = []; //make storage for your card objects
		this.random =null;
		this.amountOfCards = null;
	}
	addCard( suit, faceValue ){

		this.newcard.push( new Card(suit, faceValue));
		return this.newcard.length;
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		for(var i =0; i < this.newcard.length; i++){
			var index = Math.floor(Math.random()*this.newcard.length);
			var index2 = Math.floor(Math.random()*this.newcard.length);
			if(index !== index2){
				var temp = this.newcard[index];
				this.newcard[index] = this.newcard[index2];
				this.newcard[index2] = temp;
			}
		}

		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		this.amountOfCards= this.newcard.length;
		return this.amountOfCards;
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards( num ){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		var arr =[];
		for(var i = 0; i < num; i++){
			if(this.newcard.length >=1){
				arr.push(this.newcard[this.newcard.length-1])
				this.newcard.pop();
			}
		}
		return arr;
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
	}
}