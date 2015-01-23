function defaultArguments(func, params) {
  var parseFunc = "var restoreFunc = " + func.toString();
  eval(parseFunc);

  return restoreFunc();
}