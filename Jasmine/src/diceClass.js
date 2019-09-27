
class Dice{
	constructor(numOfSides){
		if (arguments.length === 2)
		{
			var i = 0;
			var sum = 0;
			while (i < arguments[1].length)
			{
				if (arguments[1][i] < 0)
					throw ("negative probabilities not allowed");
				//if (sum < 1)
				//	throw ("The probability sum must be greater than 0");
				else if (isNaN(arguments[1][i]) === false)
					throw ("only integer values are allowed");
				sum = sum + arguments[1][i];
				i++;


			}
			if (sum < 1)
				throw ("The probability sum must be greater than 0");
		}
		this.sides = numOfSides
	}

	rollDice(){
		var value = Math.floor(Math.random() * this.sides) + 1;
		return value;
	}
}

// Testing if the Error Checks throw
//var sixSided = new Dice(6,[1,"gdfdf"]);
var sixSided = new Dice(6,[1,6,5,-16]);	// Here I am testing the sum of the probability values (sum is to be > 1)
//console.log(sixSided.rollDice());
