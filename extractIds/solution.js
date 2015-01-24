function extractIds(data){

}

data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

var answer  = [];
var check   = [];
var counter = 0;
var countinue = true;

if (typeof data.id !== "undefined") {
	answer.push(data.id);
}
if (typeof data.items !== "undefined") {
	check = data.items;
}

while (countinue) {
	for (var index in check) {
		console.log("counter: " + counter)
		console.log("index  : " + index)
		console.log("answer : " + answer)
		console.log(check)
		console.log("GO with above statements")
		if (typeof check[index].id !== "undefined") {
			console.log("PUTTING " + check[index].id + " INTO ANSWER")
			answer.push(check[index].id);
			counter++;
		}

		if (typeof check[index].items !== "undefined") {
			check = check[index].items;
			console.log("NEW ITEM DETECTED")
			counter = 0;
		}

		if (check.length === counter) {
			console.log("STOOOOOOP")
			countinue = false;
		}
	}
}

console.log(answer)

// console.log(extractIds(data)); // should return [1,2,3,4,5]