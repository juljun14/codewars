function noOdds( values ){
  var ans = [];

  for (var i = 0; i < values.length; i++) {
  	if (values[i] % 2 === 0) {
  		ans.push(values[i]);
		}
  }
  return ans;
}