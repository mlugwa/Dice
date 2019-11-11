class Die{
	constructor(sides, probabilities)
	{
		if (sides < 2)
			throw new Error("Die must have 2 sides or more."); // Ensures that we are creating a 3D shape that
		else
			this.sides = sides;
		if (arguments.length === 2)
		{
			this.probabilities = probabilities;	// Storing array so we can work with it
			this.error_checker(); // All error checks are embedded inside the error_checker() function to avoid redundant code
		}	
	}
	error_checker()
	{
		 if (this.probabilities.length != this.sides)
                	 throw new Error("Probabilities array should be the same length as number of sides");
                        var i = 0;
                        var sum = 0;
                        while (i < this.probabilities.length)
                        {
                                if (this.probabilities[i] < 0) // Testing for any negative numbers in array
                                        throw new Error("Negative numbers are not allowed in Probabilities array");
                                else if (!Number.isInteger(this.probabilities[i])) // Testing if all elements in array are ints
                                        throw new Error("All elements in probabilities array are to be integers");
                                sum = sum + this.probabilities[i];
                                i++;
                        }
                        if (sum <= 0)   // Testing if sum of probabilities array is greater than 0
                                throw new Error("The sum of all elements in probabilites array is to be greater than 0");
	}
	roll()
	{
		this.value = Math.floor(Math.random() * this.sides + 1);
	}
	setProbabilities(probs)
	{
		this.probabilities = probs;
		this.error_checker();
	}


/************************************ Extra Steps ***************************************
 ****************************************************************************************
 *
 * The following steps were not mentioned in the questions.
 * Note that we have created a probability array that we do not get to use. So, I have decided to put it to use.
 * Here we will be simulating a weighted die roll based on our probabilities array.
 *
 */


	createWeightedArray()
	{
		var side = 1; // Represents each side of a die
		var i = 0;
		this.weightedArr = [];
		
		while (i < this.probabilities.length)
		{
			var countDown = this.probabilities[i];
			while (countDown > 0)
			{
				this.weightedArr.push(side);
				countDown--;
			}
			if (side <= this.sides)
				side++;
			i++;
		}
	}	 

	weightedDieRoll()
	{
		if (this.weightedArr.length === 0)
			throw new Error("No weightedArray! Please first generate a weightedArray by calling createWeightedArray() method");

		var selectIndex = Math.floor(Math.random() * this.weightedArr.length); // selecting an index at random from weightedArr.
		this.weightedDieValue = this.weightedArr[selectIndex];	// Storing the value found at random index of weightedArr
	}
}

var die6 = new Die(6, [1,4,3,1,0,1]);
die6.createWeightedArray();
die6.weightedDieRoll();
console.log(die6.weightedDieValue);	
