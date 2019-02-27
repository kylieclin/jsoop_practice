

class Account{
	constructor(){
		this.money = 0;
		//store the amount of money in the account
	}
	add( amount ){
		if( amount > 0 && typeof amount === 'number'){
			this.money += amount;
			return this.money;
		} else {
			return false
		}
		
		//add money to the amount stored in the account
		//takes in an amount
		//checks if it is actually a number greater than 0
			//if not, return false
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		if( amount < 0 || typeof amount !== 'number'){
			return false;
		} else{
			if(amount > this.money){
				var withdraw = this.money;
				this.money = 0;
				return withdraw;
			} else {
				this.money -= amount;
				return amount;
			}
		}


		//removes funds from an account
		//checks if amount is actually a number greater than 0
			//if not, return false
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.money;//returns the amount in the account
	}
}