function sumDigits(number) {
	return Math.abs(number).toString().split("").reduce(function(a,b) {
		return parseInt(a) + parseInt(b);
	}, 0);
}

console.log(typeof parseInt(Math.abs(0).toString().split("").reduce(function(a,b) { return parseInt(a) + parseInt(b);})));