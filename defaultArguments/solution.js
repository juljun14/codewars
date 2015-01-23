function defaultArguments(func, params) {
  var replaceVar = func.toString().split("return");

  for (var variables in params) {
  	replaceVar[1] = replaceVar[1].replace(variables, params[variables])
  }

  var parseFunc = "var restoreFunc = " + replaceVar.join("return");
  eval(parseFunc);

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

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
console.log(add_(10)); // returns NaN
console.log(add_(10,10)); // returns 20