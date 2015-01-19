function squareSum(numbers){
	var total = 0;
	for (i = 0; i < numbers.length; i++) {
		total += Math.pow(numbers[i], 2);
	}
	return total;
}

console.log(squareSum([2,2,1]))