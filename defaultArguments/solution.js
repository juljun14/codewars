function defaultArguments(func, params) {
	var stringed = func.toString();
	var inputs = stringed.match(/\(.+\)/)[0].replace("(", "").replace(")", "").split(",")
	for (i = 0; i < inputs.length; i++) {
			inputs[i] = ""+inputs[i]+" = "+inputs[i]+" || "+params[inputs[i]]+";"
	}
	for (i = 0; i < inputs.length; i ++) {
		stringed = stringed.replace("{", "{ "+inputs[i]+"")
	}

	var newFunc = "var restoreFunc = " + stringed;
	eval(newFunc);

	return restoreFunc;
}

function add(a,b) { return a+b; };

var add_ = defaultArguments(add,{b:9});
// console.log(add_(10)); // returns 19
// console.log(add_(10,7)); // returns 17
// console.log(add_()); // returns NaN

// add_ = defaultArguments(add_,{b:3, a:2});
// console.log(add_(10)); // returns 13 now
// console.log(add_()); // returns 5

// add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
// console.log(add_(10)); // returns NaN
// console.log(add_(10,10)); // returns 20