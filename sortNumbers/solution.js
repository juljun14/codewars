function sortNumbers(nums){
	if (nums === [] || nums === null) {
		return [];
	}
	return nums.sort(function(a,b) { return a - b});
}