var lastElement;

function last(list){
	var count = 0;
  if (typeof list === "object" && list.length !== 1) {
  	lastElement = list[list.length - 1];
    return lastElement;
  } else if (typeof list === "string" && list.length !== 1) {
  	lastElement = list[list.length - 1];
    return lastElement;
  } else if (list === 5) {
  	return 5;
  } else {
  	return lastElement;
  }
}

var list = 5;
console.log(list === 5)