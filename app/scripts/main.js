 //EXAMPLE 1//

 rickyBobby = {firstName: 'Ricky', lastName: 'Bobby', address: '2153 Fast Lane ',
			city: 'Talledega', state: 'Alabama ', zipCode: '53241', favoriteColor: 'red',
			favoritePrayer: 'Dear baby Jesus'}

			rickyBobby.quoteFavoritePrayer = function(){
				return "My favorite prayer begins, " + this.favoritePrayer
			}

			rickyBobby.giveAddress = function (){
				return "My address is " + this.address
			}

			rickyBobby.giveFullAddress = function (){
				return ("Oh, sorry! My full address is " + this.address + "in the state of " + 
					this.state + "and my zip is " + this.zipCode)
			}

//EXAMPLE 2//

 heyEinstein = {molecule: 2}

			heyEinstein.countHydrogen = function (){
				this.molecule = this.molecule * 2;
				this.hydrogen = this.molecule * 2;

				return (this.molecule + " water molecules contain " + this.hydrogen + 
				" hydrogen atoms.")
			}

//EXAMPLE 3//

 masonEats = {weight: 150, donuts: 5, kale: -2}

 			masonEats.donuts = function (){
 				this.weight = this.weight + 5;

 				return ("Mason now weighs " + this.weight + " pounds!");
 			}
 			masonEats.kale = function (){
 				this.weight = this.weight -2;

 				return ("Mason now weighs " + this.weight + " pounds!");
 			}








