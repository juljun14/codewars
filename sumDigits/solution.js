function sumDigits(number) {
	return parseInt(Math.abs(number).toString().split("").reduce(function(a,b) {
		return parseInt(a) + parseInt(b);
	}));
}

console.log(typeof parseInt(Math.abs(0).toString().split("").reduce(function(a,b) { return parseInt(a) + parseInt(b);})));