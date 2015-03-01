Array.prototype.removeValue = function(int) {
	var ans = [];
	var count = 0;
	for (i = 0; i < this.length; i++) {
		if (this[i] !== int) {
			ans.push(this[i]);
		} else if (this[i] === int) {
			count++;
		}
	}
	if (count === 0) {
		return false;
	}
	return ans;
}