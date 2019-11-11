
describe("A die throw", function(){
	it("should indicate a value between 1 and number of sides", function(){
	var die20 = new Die(20);
	die20.roll();	//Rolling dice to feed value to this.value
	var value = die20.value;
	if (value >= 1 && value <= die20.sides)
		var value = "value is within the right range.";
	expect(value).toBe("value is within the right range.");
	});
});

describe("A die", function(){

	it("should have 2 or more sides", function(){
	var die6 = new Die(6);
	var result = die6.sides >= 2; // Will return true or false
	expect(result).toBe(true);
	});
	it("should have probabilities array that is the same length as num of sides", function(){
	var die6 = new Die(6, [1,1,1,1,1,1]);
	var result = (die6.sides === die6.probabilities.length); // Will return true or false;
	expect(result).toBe(true);
	})
	it("probabilities array should not have any negative numbers.", function(){
	var die6 = new Die(6, [1,1,1,1,1,1]);
	var i = 0;
	var result;
	while (i < die6.probabilities.length)
	{
		result = (die6.probabilities[i] < 0) ? "Negative numbers are not allowed in probabilities array" : "No negative numbers found.";
		i++;			
	}
	expect(result).toBe("No negative numbers found.");
	});
	it("probabilities array should only contain integers", function(){
	var die6 = new Die(6, [1,1,1,1,1,1]);
	var i = 0;
	var result;
	while (i < die6.sides)
	{
		result = (!(Number.isInteger(die6.probabilities[i]))) ? "Only integers allowed" : "Only integers were found";
		i++;
	}
	expect(result).toBe("Only integers were found");
	});
	it("probabilities array's elements should sum up to a number greater than 0", function(){
	var die6 = new Die(6, [1,1,1,1,1,1]);
	var i = 0;
	var sum = 0;
	while (i < die6.sides)
	{
		sum = sum + die6.probabilities[i];
		i++;
	}
	var answer = sum > 0;
	expect(answer).toBe(true);
	});
	
});

describe("Dice factory", function(){
	it("should create a fair die instance", function(){
	var factory6 = new DieFactory(6);
	var die6 = factory6.makeDie();
	expect(die6).toEqual({sides: 6, probabilities: [1,1,1,1,1,1]});
	});
});
	
