function triangular( n ) {
	var sum = 0;

	if (n <= 0) {
		return 0;
	} else {
		for (i = n; i > 0; i--) {
			sum += i
		}
	}
	return sum;
}

console.log(triangular(3))