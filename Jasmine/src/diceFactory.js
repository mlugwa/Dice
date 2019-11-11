class DieFactory{
	constructor(sides)
	{
		this.sides = sides;
	}
	makeDie()
	{
		this.probabilities = [];	// container to set fair probability weighting
		var i = 0;
		while (i < this.sides)	// Probability array to carry same amount of elements as number of sides
		{
			this.probabilities.push(1);	//Pushing 1 to each elements to create fair weighting
			i++;
		}
		return ({sides: this.sides, probabilities: this.probabilities});  // Returning a fair instance of a die in object form
	}
}

/*
var factory6 = new DieFactory(6);
var die6 = factory6.makeDie();
console.log(die6);*/
