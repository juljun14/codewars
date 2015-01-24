function defaultArguments(func, params) {
  var reg = /\(([\s\S]*?)\)/;
  var extractVar = reg.exec(func);
  if (extractVar) {
  	var arguments = extractVar[1].split(',');
  }

  for (i = 0; i < arguments.length; i++) {
  	if (params[arguments[i]]) {
  		arguments[i] = params[arguments[i]];
  	}
  }
  console.log(extractVar)
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