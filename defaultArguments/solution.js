function defaultArguments(func, params) {
  var replaceVar = func.toString().split("return");

  for (var variables in params) {
  	if (Object.keys(params)[Object.keys(params).length-1] === variables) {
  		replaceVar.splice(1, 1, "\n"+variables+" = typeof "+variables+" !== 'undefined' ? "+variables+" : "+params[variables]+";\n return"+replaceVar[1]+"")
  	} else {
  		replaceVar.splice(1, 0, "\n"+variables+" = typeof "+variables+" !== 'undefined' ? "+variables+" : "+params[variables]+";\n return")
  	}
  }

  var parseFunc = "var restoreFunc = " + replaceVar.join("");
  eval(parseFunc);

  console.log(parseFunc)

  return restoreFunc;
}

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
console.log(add_(10)); // returns 19
console.log(add_(10,7)); // returns 17
console.log(add_()); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
console.log(add_(10)); // returns 13 now
console.log(add_()); // returns 5

// add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
// console.log(add_(10)); // returns NaN
// console.log(add_(10,10)); // returns 20